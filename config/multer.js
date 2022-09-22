import multer from "multer";
import path from "path";
import randomId from "../utils/randomId.js";

const storage = (offset) => {
  try {
    return multer.diskStorage({
      destination: function (req, file, cb) {
        var ext = path.extname(file.originalname);

        if (
          ext !== ".png" &&
          ext !== ".jpg" &&
          ext !== ".jpeg" &&
          ext !== ".PNG"
        ) {
          return cb(
            new Error("Only images and zip are allowed"),
            "Error file type!"
          );
        }

        const dir = __dirname.split("\\");
        dir.splice(offset);

        cb(null, path.join(dir.join("\\"), "../public"));
      },
      filename: function (req, file, cb) {
        var ext = path.extname(file.originalname);

        cb(null, randomId(6) + ext);
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const upload = multer({ storage: storage(-4) });

export const uploadTextArea = multer({ storage: storage(-3) });
