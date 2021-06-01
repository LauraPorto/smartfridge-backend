// create an express app
require('dotenv').config();
const express = require("express");
const router = require('./router');
const http = require('http');
const app = express();
const db = require ('./db');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(router);

let server = http.createServer(app);

//arrancamos el servidor
db.then(() => {
    server.listen (process.env.PORT || 3001, 
	() => console.log("Server is running..."));
}).catch(console.log);

 