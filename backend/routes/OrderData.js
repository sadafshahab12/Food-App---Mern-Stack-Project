const express = require("express");
const Order = require("../model/Order");
const orderDataRouter = express.Router();

orderDataRouter.post("/order-data", async (req, res) => {
  let data = req.body.order_data;
  data.splice(0, 0, { order_date: req.body.order_date });
  const orderData = data;
  try {
    const existingOrder = await Order.findOne({ email: req.body.email });

    if (!existingOrder) {
      await Order.create({
        email: req.body.email,
        order_data: orderData,
      });
      return res.json({ success: true });
    } else {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: orderData } }
      );
      return res.json({ success: true });
    }
  } catch (error) {
    console.log("Error:", error.message);
    return res.status(500).send("Server Error: " + error.message);
  }
});

module.exports = orderDataRouter;
