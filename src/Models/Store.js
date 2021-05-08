const mongoose = require('mongoose'); 
const ObjectId = mongoose.Types.ObjectId;

let storeSchema = mongoose.Schema({
    userId: {
        type: ObjectId, 
        ref: 'User'
    }, 
    title: {
        type: String
    }, 
    apiId: {
        type: String, 
        required: true
    }, 
    creationDate: {
        type: Date
    }
}); 

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
