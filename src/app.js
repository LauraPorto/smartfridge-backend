// create an express app
require('dotenv').config();
const express = require("express");
const app = express();
const db = require ('./db');
const cors = require('cors');

const userRouter = require('./Routes/userRouter');
// const storeRouter = require('./Routes/storeRouter');

app.use(express.json());
app.use(cors());
// app.use(express.static(router));
// const router = require('express').Router();


// use the express-static middleware
app.use(express.static("public"))

app.get('/user/', userRouter.allUsers() || allUsers());

// define the first route
app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.get("/adios", function (req, res) {
    res.send("Adios World!")
  })

// start the server listening for requests
db.then(() => {
    app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
}).catch(console.log);

