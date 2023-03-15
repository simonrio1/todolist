//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Item = require(__dirname + "/models/item.js");
const todolistRouter = require(__dirname + "/routes/todolistRoutes.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/", todolistRouter);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://simonrio411:pUBvovCwQDQk3bra@cluster0.xf71iyl.mongodb.net/todolistDB?retryWrites=true&w=majority');
}


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
