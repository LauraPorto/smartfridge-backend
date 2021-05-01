const mongoose = require ('mongoose');

const MONGO_CLUSTER = process.env.MONGO_CLUSTER || null;
const MONGO_SERVER = process.env.MONGO_SERVER || 'mongodb';
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'mydb';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUERY_STRING = MONGO_USER ? 
`${MONGO_SERVER}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`:
`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

const db = mongoose.connect('mongodb+srv://admin:1234@cluster0.aeplm.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db.then((result) => {
    console.log('database connection success');
    return result;
});

//mongodb+srv://admin:<password>@cluster0.aeplm.mongodb.net/test