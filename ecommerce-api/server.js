const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const productsRoute = require("./routes/productsRoute");
const errorMiddleware = require("./middleware/errorMiddleware");

// dotenv
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
const FRONTEND = process.env.FRONTEND;

// cors config to allow requests from your frontend domain
const corsOptions = {
  origin: [FRONTEND, "http://localhost:3000", "http://127.0.0.1:3000"],
  optionsSuccessStatus: 200,
  changeOrigin: true,
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productsRoute);

app.get("/", (req, res, next) => {
  res.json({ message: "Hello, world!" });
});

app.get("/blog", (req, res, next) => {
  res.send("This is a blog!");
});

app.use(errorMiddleware);

// connect to database MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(PORT, () => {
      console.log("Products API listening on port " + PORT);
    });
  })
  .catch((error) => console.log(error));
