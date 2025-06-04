const express = require("express");
const mongoDBConnect = require("./db");
const createUserRouter = require("./routes/CreateUser");

const app = express();
mongoDBConnect();
const port = 5000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/signup", createUserRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
