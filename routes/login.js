const router = require("express").Router();
const config = require("config");
const userLogin = require("../models/userLogin.model");
const axios = require("axios");


router.post("/", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    let user = await userLogin.findOne({ username: username });
    if (!user) throw new Error("User not found");
    // console.log(user);
    user = JSON.parse(JSON.stringify(user));
    console.log("pass",username,password)
    if (password === user.password) {
      const payload = {
        user: { id: user.username },
      };
      return res.status(200).json({ err: "valid" });

    } else {
      return res.status(400).json({ err: "Invalid Credentials" });
    }
  } catch (err) {
    return res.status(400).json({ err: "Invalid Credentials" });
  }
});
module.exports = router;
