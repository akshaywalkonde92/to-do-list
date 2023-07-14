const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); 
// console.log(date());

const ejs = require("ejs");
const app = express();
//node module

// the array which will be updated every time we add up 'newItewm'
const items = ["HTML", "CSS", "JavaScript"];
const workItems = [];
app.set('view engine', 'ejs');

// command to use bodyparser app
app.use(bodyParser.urlencoded({extended:true}));




//resource folder to access the resources
app.use(express.static("public"));

/**here is the main or final process due which we get updated list */
app.get("/", function(req, res){
  const day = date.getDate();
    res.render("list", {listTitle:day, newListItems:items});
});

 



app.post("/", (req,res)=>{
  let item= req.body.newItem
  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
  // console.log(req.body);

  // let item= req.body.newItem;
  // items.push(item);
  // res.redirect("/");

});
 
//for work list page
app.get("/work", (req, res)=>{
  res.render("list",{listTitle:"Work List", newListItems: workItems});
  // res.redirect("/");
});

// app.post("/",(req,res)=>{  
//   let item = req.body.newItem;
//   items.push(item);
//   res.redirect("/work");
// });

/***
 * Now after getting request from "list.ejs" file, it takes to 'app.post' 
 * here it is pushing item in the 'items' array every single time it gets data from 'input' tag
 * then it directs us toward 'app.get' section in server.js file
 */
// app.post("/", (req,res)=>{
//   var item= req.body.newItem
  
// });



  app.listen(3000, function() {
    console.log("Server started on port 3000");
    console.log("It is Working");
  });