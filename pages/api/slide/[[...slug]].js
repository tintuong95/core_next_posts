import nc from "next-connect";
import path from "path";
import sharp from "sharp";
import fs from "fs-extra";
import { upload } from "../../../config/multer.js";
import Slide from "../../../db/models/slide.js";

const handler = nc({
  onError: (err, req, res, next) => {
   
    res.status(500).end("Server error: " + err.stack);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Not Found!");
  },
});

//EXISTED

async function existSlide(req, res, next) {
  try {
    const response = await Slide.findOne({
      where: { id: req.query["slug"][0] },
    });
    if (response) {
      res.locals = response;
      return next();
    }
    res.status(404).end("Not Found!");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
}

//[GET]:/id
handler.get("/api/slide/:id", existSlide, async (req, res) => {
  try {
    res.json({ data: res.locals });
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[DELETE]:id
handler.delete("/api/slide/:id", existSlide, async (req, res) => {
  try {
    res.locals.destroy();
    res.status(201).end("Successfully updated");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[GETs]
handler.get("/api/slide", async (req, res) => {
  try {
    const response = await Slide.findAll({});
    res.json({ data: response });
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[POST]
handler.post("/api/slide", upload.single("image"), async (req, res) => {
  try {
    //convert image

    sharp(req.file.path)
      .resize(623, 485)
      .toFile(
        path.resolve(req.file.destination, "resize_" + req.file.filename),
        function (err) {
          err ? console.log(err) : console.log("success");
        }
      );

    const response = await Slide.create({
      image: "resize_" + req.file.filename,
    });
    fs.removeSync(req.file.path);

    res.status(201).end("Successfully created");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
