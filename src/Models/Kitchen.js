const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let kitchenSchema = mongoose.Schema({
    storeId: {
        type: ObjectId,
        required: true, 
        ref: 'Store'
    },
    userId: {
        type: ObjectId, 
        required: true, 
        ref: 'User'
    },
    name: {
        type: String, 
        required: true
    }, 
    recipe: {
        ingredients :{
            type: Array,
            default: []
        }, 
        content : {
            type: String
        }
    }
});

const Kitchen = mongoose.model('Kitchen', kitchenSchema);
module.exports = Kitchen;
