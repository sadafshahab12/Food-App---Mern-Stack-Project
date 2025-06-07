const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../model/User");

exports.createUserController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, location, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(password, salt);
  try {
    const trimedName = name.replace(/\s+/g, " ").trim();
    await User.create({
      name: trimedName,
      location: location,
      password: securePassword,
      email: email,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
