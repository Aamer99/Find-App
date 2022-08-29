const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Amer1420",
  database: "Find",
  port: "3306",
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected to database");
  }
});

const userRouter = require("./routes/User/User");
app.use("/user", userRouter);

const coffeRouter = require("./routes/coffe/coffe");
app.use("/coffe", coffeRouter);

const restaurantRouter = require("./routes/Restaurant/Restaurant");
app.use("/restaurant", restaurantRouter);
const placeRouter = require("./routes/place/place");
app.use("/place", placeRouter);

app.listen("4000", () => {
  console.log("server is running");
});
