const express = require("express");

const createUserRouter = express.Router();
const User = require("../model/User");

//data inserted successfully

createUserRouter.post("/create-user", async (req, res) => {
  try {
    await User.create({
      name: "Sadaf",
      password: "123456789",
      email: "sadafshahabsr12@gmail.com",
      location: "Karachi, Pakistan",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = createUserRouter