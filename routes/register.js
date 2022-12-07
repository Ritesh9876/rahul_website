const router = require("express").Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const config = require("config");
const userLogins = require("../models/userLogin.model");

router.post("/", async (req, res) => {
  const {
    email,
    password,
    username,
    first_name,
    last_name,
  } = req.body;
  console.log(req.body);
  try {
    console.log("why this Entered");

    const user = await userLogins.findOne({ username: username });
    if (!user) {
      try {
        let newUser = new userLogins({
          password:password,
          username:username,
          first_name:first_name,
          last_name:last_name,
          email:email,
        });
      const resk=  await newUser.save();
      console.log(resk)
        res.status(200).json("User registration successful");
      } catch (err) {
        return res.status(400).json({ err: "Error Registering User" });
      }
    } else {
      return res.status(200).json({ err: "UEXIST" });
    }
  } catch (err) {
    return res.status(400).json({ err: "Error Creating Room." });
  }
});
module.exports = router;
