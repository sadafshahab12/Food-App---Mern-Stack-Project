require("dotenv").config();
const express = require("express");
const User = require("../model/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const loginUserRouter = express.Router();
const bcrypt = require("bcryptjs");

loginUserRouter.post(
  "/login-user",
  [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid Email. Enter Valid Email.")
      .isLength({ max: 100 }),
    body("password", "Incorrect Password").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try Logging with correct email." });
      }
      const comparePassword = await bcrypt.compare(password, userData.password);
      if (!comparePassword) {
        return res
          .status(400)
          .json({ errors: "Try Logging with correct password." });
      }

      const userId = {
        user: {
          id: userData._id,
        },
      };
      const authToken = jwt.sign(userId, process.env.JWT_SECRET);
      return res.status(200).json({ success: true, authToken: authToken });
    } catch (error) {}
  }
);

module.exports = loginUserRouter;
