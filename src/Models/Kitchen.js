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
