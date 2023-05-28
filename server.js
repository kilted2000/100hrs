// //jshint esversion:6
// const express = require("express");
// const bodyParser = require("body-parser");
//  const router = express.Router();
// const https = require("https");
// const fetch = require('node-fetch');
// const cool = require("cool-ascii-faces");

// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// app.get("/", function (req, res) {      
//   res.sendFile(__dirname + "/index.html")
// })


// app.post("/", function (req, res) {
//   const firstName = req.body.fName;
//   const lastName = req.body.lName;
//   const email = req.body.email;
//   const data = {
//       members: [{
//           email_address: email,
//           status: "subscribed",
//           merge_fields: {
//               FNAME: firstName,
//               LNAME: lastName
//           }
//       }]
//   };
//   const jsonData = JSON.stringify(data);

//   const url = 'https://us17.api.mailchimp.com/3.0/lists/7a89b11209';

// const options = {
//   method: "POST",
//   // auth: "richard1:19fba236b7f2143827e3311eb5a244d6-us17"
//   auth: "richard1:ef477e9a9fdb37f25324daea1549795e"
// }

//   const request = https.request(url, options, function (response) {
//       response.on("data", function (data) {
//           console.log(JSON.parse(data));
//           if (response.statusCode === 200) {
//               res.sendFile(__dirname + "/success.html");
//           } else {
//               res.sendFile(__dirname + "/failure.html");
//           }
//       })
//   })

//   request.write(jsonData);
//   request.end();


// });

// app.post("/failure", function (req, res) {
//   res.redirect("/")
// })

//    app.use('/', router);


//   module.exports = router;


// app.listen(3000, ()=>{
//     console.log("Server listening on Port 3000")
// })

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

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };
  const jsonData = JSON.stringify(data);

  const url = 'https://us17.api.mailchimp.com/3.0/lists/7a89b11209';
  const options = {
    method: "POST",
    auth: "richard1:ef477e9a9fdb37f25324daea1549795e"
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    })
    .catch(error => {
      console.error(error);
      res.sendFile(__dirname + "/failure.html");
    });
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.use('/', router);

app.listen(3000, () => {
  console.log("Server listening on Port 3000");
});
