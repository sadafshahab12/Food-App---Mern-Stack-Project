const express = require("express");
const mongoDBConnect = require("./db");
const createUserRouter = require("./routes/CreateUser");
const loginUserRouter = require("./routes/CreateUser");

const app = express();
mongoDBConnect();
const port = 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With , Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/signup", createUserRouter);
app.use("/login", loginUserRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
