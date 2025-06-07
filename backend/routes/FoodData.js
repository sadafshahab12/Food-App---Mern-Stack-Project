const express = require("express");
const foodDataRouter = express.Router();

foodDataRouter.post("/food-data", (req, res) => {
  try {
    // console.log(global.foodItems, global.foodCategory);
    res.send([global.foodItems, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = foodDataRouter;
