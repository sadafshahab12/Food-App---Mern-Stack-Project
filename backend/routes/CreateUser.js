const express = require("express");

const createUserRouter = express.Router();
const User = require("../model/User");
const { body, validationResult } = require("express-validator");
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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, password, location } = req.body;
      const trimedName = name.replace(/\s+/g, " ").trim();
      await User.create({
        name: trimedName,
        password: password,
        email: email,
        location: location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = createUserRouter;
