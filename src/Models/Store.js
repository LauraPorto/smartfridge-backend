const mongoose = require('mongoose'); 
const ObjectId = mongoose.Types.ObjectId;

let storeSchema = mongoose.Schema({
    userId: {
        type: ObjetcId, 
        ref: 'User'
    }, 
    food: {
        type: Array, 
        default: []
    }, 
    forbiddenFood: {
        type: Array, 
        default: []
    }, 
    creationDate: {
        type: Date
    }
}); 

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
