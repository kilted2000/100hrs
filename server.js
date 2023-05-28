
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const https = require("https");
const fetch = require('node-fetch');
const cool = require("cool-ascii-faces");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});





app.use('/', router);

app.listen(3000, () => {
  console.log("Server listening on Port 3000");
});
