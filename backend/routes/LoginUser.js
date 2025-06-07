const express = require("express");
const { body } = require("express-validator");
const loginUserRouter = express.Router();
const { loginUserController } = require("../controllers/loginUserController");

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
  loginUserController
);

module.exports = loginUserRouter;
