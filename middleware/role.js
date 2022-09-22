import Cookies from "cookies";

export function role(req, res, next) {
  const cookies = new Cookies(req, res);
  if (cookies.get("access_token")) {
    return next();
  }
  res.status(403).end("Forbidden access token");
}
