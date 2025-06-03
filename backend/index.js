const express = require("express");
const mongoDBConnect = require("./db");

const app = express();
mongoDBConnect();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
