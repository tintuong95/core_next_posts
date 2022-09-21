import sharp from "sharp";

export default function convertImage(width,height,req) {
  sharp(req.file.path)
    .resize(width, height)
    .toFile(
      path.resolve(
        req.file.destination,
        width + "x" + height + "_" + req.file.filename
      ),
      function (err) {
        err ? console.log(err) : console.log("success");
      }
    );
}
