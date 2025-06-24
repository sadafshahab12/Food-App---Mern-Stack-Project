const express = require("express");
const Order = require("../model/Order");

const myOrderDataRouter = express.Router();

myOrderDataRouter.post("/my-order-data", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });

    // Check if order_data exists
    if (!myData || !myData.order_data) {
      return res.json({ orderData: { email: req.body.email, orders: [] } });
    }

    // Reshape the nested mess into a clean structure
    const cleanedOrders = [];
    let currentOrder = null;

    myData.order_data.forEach((entry) => {
      if (Array.isArray(entry)) {
        // Nested order group
        entry.forEach((nestedEntry) => {
          if (nestedEntry.order_date) {
            // new date group
            if (currentOrder) cleanedOrders.push(currentOrder); // push last order
            currentOrder = { orderDate: nestedEntry.order_date, items: [] };
          } else {
            // product
            if (currentOrder) currentOrder.items.push(nestedEntry);
          }
        });
      } else if (entry.order_date) {
        // new date group (non-nested)
        if (currentOrder) cleanedOrders.push(currentOrder);
        currentOrder = { orderDate: entry.order_date, items: [] };
      } else {
        // product
        if (currentOrder) currentOrder.items.push(entry);
      }
    });

    if (currentOrder) cleanedOrders.push(currentOrder); // push final group
    cleanedOrders.reverse();
    res.json({ orderData: { email: myData.email, orders: cleanedOrders } });
  } catch (error) {
    return res.status(500).send("Server Error: " + error.message);
  }
});

module.exports = myOrderDataRouter;
