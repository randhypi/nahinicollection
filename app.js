const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/nih", {
  useNewUrlParser: true,
});

const productsSchema = {
  title: String,
  model: String,
  stock: Int16Array,
};

const Products = mongoose.model("Products", productsSchema);

// todo

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
