export default function randomId(length) {
  var id = "";
  var string =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var len = string.length;
  for (var i = 0; i < length; i++) {
    id += string.charAt(Math.floor(Math.random() * len));
  }
  return id;
}
