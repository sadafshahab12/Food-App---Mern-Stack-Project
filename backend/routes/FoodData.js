const express = require("express");
const foodDataRouter = express.Router();

foodDataRouter.post("/food-data", (req, res) => {
  try {
    const foodItems = global.foodItems || [];
    const foodCategory = global.foodCategory || [];

    console.log("Backend Data Being Sent:", foodItems, foodCategory);

    res.send([foodItems, foodCategory]); 
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = foodDataRouter;
