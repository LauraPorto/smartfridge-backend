// create an express app
require('dotenv').config();
const express = require("express")
const app = express()
const db = require ('./db');

//const router = require ('./router');

//app.use(express.json());
//app.use(router);

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.get("/adios", function (req, res) {
    res.send("Adios World!")
  })

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));