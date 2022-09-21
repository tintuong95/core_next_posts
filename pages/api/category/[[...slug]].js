import nc from "next-connect";
import Category from "../../../db/models/category.js";
import News from "../../../db/models/news.js";
import toParam from "../../../utils/param.js";


const handler = nc({
  onError: (err, req, res, next) => {

    res.status(500).end("Server error: " + err.stack);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Not Found!");
  },
});


//EXISTED

async function existCategory(req, res, next) {
 try {
   const { param } = req.query;
   const response = await Category.findOne({
     where: { id: param },
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
handler.get("/api/category",async (req, res) => {
  try {
    const response = await Category.findAll({
     include:{model:News,as:"category"}
    });
    res.json({ data: response });
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[POST]
handler.post("/api/category", async (req, res) => {
  try {
    const response = await Category.create({
      ...req.body,
      param: toParam(req.body.name),
    });

    res.status(201).end("Successfully created");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});


//[GET]:/id
handler.get("/api/category", existCategory, async (req, res) => {
  try {
    res.json({ data: res.locals });
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});



//[PUT]:id
handler.put("/api/category", existCategory,async (req, res) => {
  try {
    res.locals.update(req.body);
    res.locals.save();
    res.status(201).end("Successfully updated");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[DELETE]:id
handler.delete("/api/category", existCategory, async (req, res) => {
  try {
    res.locals.destroy();
    res.status(201).end("Successfully updated");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

export default handler;
