const mongoose = require('mongoose'); 
const ObjectId = mongoose.Types.ObjectId;

let storeSchema = mongoose.Schema({
    userId: {
        type: ObjectId, 
        ref: 'User'
    }, 
    name: {
        type: String
    }, 
    apiId: {
        type: String
    }, 
    creationDate: {
        type: Date
    }
}); 

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
