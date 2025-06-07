const express = require("express");
const User = require("../model/User");
const { body, validationResult } = require("express-validator");

const loginUserRouter = express.Router();

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
      if (password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "Try Logging with correct password." });
      }
      return res.status(200).json({ success: true });
    } catch (error) {}
  }
);

module.exports = loginUserRouter;
