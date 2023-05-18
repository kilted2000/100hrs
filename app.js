//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  
  

  router.post('/api/register', (req, res) => {
    // Handle the registration logic here
    // Access request body data using req.body
    // Perform necessary validation, data processing, and database operations
    // Send back the appropriate response using res.json() or res.send()
  });

  app.use('/', router);


  module.exports = router;


app.listen(4000, ()=>{
    console.log("Server listening on Port 4000")
})