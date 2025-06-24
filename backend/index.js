require("dotenv").config();
const express = require("express");
const mongoDBConnect = require("./db");
const cors = require("cors");
const loginUserRouter = require("./routes/LoginUser");
const createUserRouter = require("./routes/CreateUser");
const foodDataRouter = require("./routes/FoodData");
const orderDataRouter = require("./routes/OrderData");
const myOrderDataRouter = require("./routes/myOrderData");
const app = express();
mongoDBConnect();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/auth", createUserRouter);
app.use("/auth", loginUserRouter);
app.use("/api", foodDataRouter);
app.use("/api", orderDataRouter);
app.use("/api", myOrderDataRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
