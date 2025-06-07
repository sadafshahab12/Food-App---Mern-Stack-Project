const express = require("express");
const mongoDBConnect = require("./db");
const cors = require("cors");
const loginUserRouter = require("./routes/LoginUser");
const createUserRouter = require("./routes/CreateUser");
const app = express();
mongoDBConnect();
const port = 5000;

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With , Content-Type, Accept"
//   );
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/signup", createUserRouter);
app.use("/login", loginUserRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
