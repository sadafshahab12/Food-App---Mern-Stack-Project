const express = require("express");
const Order = require("../model/Order");

const myOrderDataRouter = express.Router();

myOrderDataRouter.post("/my-order-data", async (req, res) => {
  try {
    // Always validate the input
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Find the order data by email
    const myData = await Order.findOne({ email });

    // If no data found or no order_data present
    if (!myData || !Array.isArray(myData.order_data)) {
      return res.json({
        orderData: {
          email: email,
          orders: [], // always return an empty array to avoid frontend breaking
        },
      });
    }

    // Reshape the messy data into clean order groups
    const cleanedOrders = [];
    let currentOrder = null;

    myData.order_data.forEach((entry) => {
      if (Array.isArray(entry)) {
        // Nested group
        entry.forEach((nestedEntry) => {
          if (nestedEntry.order_date) {
            if (currentOrder) cleanedOrders.push(currentOrder);
            currentOrder = { orderDate: nestedEntry.order_date, items: [] };
          } else {
            if (currentOrder) currentOrder.items.push(nestedEntry);
          }
        });
      } else if (entry.order_date) {
        if (currentOrder) cleanedOrders.push(currentOrder);
        currentOrder = { orderDate: entry.order_date, items: [] };
      } else {
        if (currentOrder) currentOrder.items.push(entry);
      }
    });

    if (currentOrder) cleanedOrders.push(currentOrder); // push last group
    cleanedOrders.reverse(); // latest orders first

    res.json({
      orderData: {
        email: myData.email,
        orders: cleanedOrders || [], // never undefined, always an array
      },
    });
  } catch (error) {
    console.error("Error in /my-order-data:", error);
    res.status(500).json({ error: "Server Error: " + error.message });
  }
});

module.exports = myOrderDataRouter;
