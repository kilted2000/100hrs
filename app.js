//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  







app.listen(3000, ()=>{
    console.log("Server listening on Port 3000")
})