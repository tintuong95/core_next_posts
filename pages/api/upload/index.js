import nc from "next-connect";
import { uploadTextArea } from "../../../config/multer.js";

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end("Server error: " + err.stack);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Not Found!");
  },
});

//[POST]

handler.use(uploadTextArea.single("upload")).post(async (req, res) => {
  try {
    res.status(200).json({
      uploaded: true,
      url:process.env.VERCEL_URL + "/" + req.file.filename,
    });
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
