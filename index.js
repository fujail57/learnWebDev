const express = require("express");

const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");

const app = express();
// const PORT = 8001;

// middleware
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectToMongoDB("mongodb://localhost:27017/short-url1").then(() =>
  // connectToMongoDB("mongodb://127.0.0.1:27017/short-url1").then(() =>
  console.log("MongoDb Connected")
);

app.use(express.json());

app.use("/url", urlRoute);

// app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
app.listen(8000, () => console.log("Server started"));
