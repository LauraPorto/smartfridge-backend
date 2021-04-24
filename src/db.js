const mongoose = require ('mongoose');

const MONGO_HOST = process.env.MONGO_HOST || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'mongodb';
const MONGO_USER = process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;

const QUERY_STRING = MONGO_USER ? 
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`:
`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

const db = mongoose.connect(QUERY_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db.then((result) => {
    console.log('database connection success');
    return result;
});