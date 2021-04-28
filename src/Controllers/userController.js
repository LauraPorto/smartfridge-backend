const User = require('../Models/User');
const bcrypt = require('bcrypt');
// const jwt = require('jwt');

class UserController {

    //REGISTRO
    async signUp(user){
        return await User.create(user);
    }

    //LOG IN


    //LOG OUT 


}

const userController = new UserController;
module.exports = userController;
