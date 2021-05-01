const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let kitchenSchema = mongoose.Schema({
    storeId: {
        type: ObjectId,
        ref: 'Store'
    },
    userId: {
        type: ObjectId, 
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

const Kitchen = mongoose.model('Kitchen', kitchenSchema);
module.exports = Kitchen;
