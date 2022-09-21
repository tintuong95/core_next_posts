import multer from "multer";
import nc from "next-connect";
import { upload } from "../../../config/multer.js";
import News from "../../../db/models/news.js";
import Category from "../../../db/models/category.js";
import toParam from "../../../utils/param.js";
import randomId from "../../../utils/randomId.js";

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end("Server error: " + err.stack);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Not Found!");
  },
});

//EXISTED middleware
async function existNews(req, res, next) {
  try {
    const response = await News.findOne({
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

//[GETs]

handler.get("/api/news", async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;

    let query={}

    Object.entries(req.query).forEach(item=>{
      if(item[0] != "limit" && item[0] !="offset"){
        query[item[0]] = item[1] 
      }
    })
   


    const response = await News.findAll({
      where: query,
      limit: Number(limit),
      offset: Number(offset),
      include: { model: Category, as: "category" },
    });
    res.json({ data: response });
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

// [GET]:/id
handler.get("/api/news/:id", existNews, async (req, res) => {
  try {
    res.json({ data: res.locals });
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[PUT]:id
handler.put(
  "/api/news/:id",
  existNews,
  upload.single("image"),
  async (req, res) => {
    try {
      if (req.file) {
        req.body.image = req.file.filename;
      }

      res.locals.update(req.body);
      res.locals.save();
      res.status(201).end("Successfully updated");
    } catch (err) {
      res.status(500).end("Server error: " + err.stack);
    }
  }
);

//[POST]

handler.post("/api/news", upload.single("image"), async (req, res) => {
  try {
    //convert image

    sharp(req.file.path)
      .resize(200, 160)
      .toFile(
        path.resolve(req.file.destination, "resize_" + req.file.filename),
        function (err) {
          err ? console.log(err) : console.log("success");
        }
      );

    const response = await News.create({
      ...req.body,
      image: req.file.filename,
      param: toParam(req.body.title) + "-" + randomId(4),
    });
 fs.removeSync(req.file.path);
    res.status(201).end("Successfully created");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[DELETE]
handler.delete("/api/news/:id", existNews, async (req, res) => {
  try {
    res.locals.destroy();

    res.status(200).end("Successfully removed");
  } catch (error) {
    res.status(500).end("Server error: " + err.stack);
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
