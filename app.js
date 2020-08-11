//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var items = ["Buy Food", "Cook Food","Eat Food"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list",{Kindofday:day,items:items});
});


app.post("/",function(req,res){
  items.push(req.body.newItem);
  res.redirect("/");
});

app.get("/about",function(req,res){
  res.render("about");
});


app.listen("4000",function () {
  console.log("Server  has started at 4000");
});
