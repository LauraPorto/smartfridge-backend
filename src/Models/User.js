const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


let userSchema = mongoose.Schema({
    storeId : {
        type: ObjectId, 
        ref: 'Store'
    },
    name : {
        type: String, 
        required: true
    }, 
    surname : {
        type: String, 
        required: true
    }, 
    phone : {
        type: String, 
    }, 
    country : {
        type: String, 
    }, 
    email : {
        type: String, 
        required: true
    }, 
    password : {
        type: String, 
        required: true
    },
    creationDate: {
        tye: Date
    }
});


const User = mongoose.model('user', userSchema);
module.exports = User;