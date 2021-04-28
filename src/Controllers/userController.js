const User = require('../Models/User');
const bcrypt = require('bcrypt');
// const jwt = require('jwt');

class UserController {

    //POST - Registro de usuario
    async signUp(user){
        return await User.create(user);
    }

    //LOG IN


    //LOG OUT 

    //GET - Todos los usuarios
    async indexAll(){
        return await User.find();
    }
}

const userController = new UserController;
module.exports = userController;
