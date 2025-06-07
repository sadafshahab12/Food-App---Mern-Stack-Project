const express = require("express");
const createUserRouter = express.Router();
const { body} = require("express-validator");
const { createUserController } = require("../controllers/createUserController");

//data inserted successfully

createUserRouter.post(
  "/create-user",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .matches(/^[A-Za-z\s]+$/)
      .withMessage("Name must contain only letters and spaces"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid Email. Enter Valid Email.")
      .isLength({ max: 100 }),
    body("password")
      .isLength({
        min: 8,
      })
      .withMessage("Password should be at least 8 chars")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[^A-Za-z0-9]/)
      .withMessage("Password must contain at least one special character"),
  ],
  createUserController
);

module.exports = createUserRouter;
