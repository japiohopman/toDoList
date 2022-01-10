// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const items = ["koop eten", "aanzetstaal", "bureua hoe schrijf je dat?"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("lists", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
console.log(req.body);
  const item = req.body.newItem;
  if (req.body.lists === "Work Lists") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("lists", {
    listTitle: "Work Lists",
    newListItems: workItems
  });
});

app.get("/about", function(req, res){
  res.render("about");
});

app.post("/work", function(req, res) {
  const item = req.body.newListItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("up and running port 3000");
});



//   var currentDay = today.getDay();
//   var day = "";
//
//   switch (currentDay) {
//     case 0:
//       day = "sunday";
//       break;
//     case 1:
//       day = "monday";
//       break;
//     case 2:
//       day = "dinsdag";
//       break;
//     case 3:
//       day = "woensdag";
//       break;
//     case 4:
//       day = "donderdag";
//       break;
//     case 5:
//       day = "vrijdag";
//       break;
//     case 6:
//       day = "zaterdag";
//       break;
//     default:
// console.log("ERROR currend day is equal to" + currentDay);
//   }
