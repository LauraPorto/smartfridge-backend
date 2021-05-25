// create an express app
require('dotenv').config();
const express = require("express");
const router = require('./router');
const app = express();
const db = require ('./db');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(router);

//arrancamos el servidor
db.then(() => {
    app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
}).catch(console.log);

