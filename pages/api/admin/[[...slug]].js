import Cookies from "cookies";
import nextConnect from "next-connect";
import bcrypt from "bcrypt";
import React from "react";
import Admin from "../../../db/models/admin.js";

const handler = nextConnect({
  onError: (err, req, res, next) => {
    res.status(500).end("Server error: " + err.stack);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Not Found!");
  },
});

//[LOGIN]
handler.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await Admin.findOne({
      where: { username },
    });

    if (response && response.validPassword(password)) {
      var cookies = new Cookies(req, res, {
        keys: ["ZlnmhYIyjO3ybxYmHZDZA72aIK3ViwJO"],
      });

      cookies.set("access_token", username, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 1000), //1 hours
      });
      return res.status(200).json({ data: { username } });
    }
    res.status(404).end("login failed");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[LOGOUT]
handler.get("/api/admin/logout", async (req, res) => {
  try {
    var cookies = new Cookies(req, res);
    cookies.set("access_token");
    return res.status(200).end("Logout success!");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[SIGNIN]
handler.post("/api/admin/signin", async (req, res) => {
  try {
    const response = await Admin.create(req.body);
    res.status(201).end("Successfully created");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[UPDATE]
handler.put("/api/admin/update", async (req, res) => {
  const { username, oldPassword, newPassword } = req.body;

  try {
    const response = await Admin.findOne({
      where: { username },
    });

    if (response && response.validPassword(oldPassword)) {
      response.update({ password: newPassword });
      return res.status(201).end("Successfully created");
    }

    res.status(404).end("Not found");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

//[get by cookies]
handler.get("api/admin/profile", async (req, res) => {
  try {
    const cookie = req.headers.cookie;
    if (cookie) {
      return res.status(200).end("Successfully profile");
    }
    return res.status(403).end("Fails profile");
  } catch (err) {
    res.status(500).end("Server error: " + err.stack);
  }
});

export default handler;
