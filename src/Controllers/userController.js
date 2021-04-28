const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretword';

class UserController {

    //POST
    //Registro de usuario
    async signUp(user){
        user.password = await bcrypt.hash(user.password,5)
        return User.create(user);
    }

    //LogIn
    async logIn(email, password){
        const user = await User.findOne({email}) 

        //Buscamos el email del usuario en la BBDD
        if(!user){
            return 'Email not found';
        }

        //Comparamos la contraseña del usuario con la contraseña encriptada guardada en la BBDD
        if(!await bcrypt.compare(password, user.password)){
            return 'The password is incorrect.';
        }

        //Información guardada en el token
        const payload = {
            userId: user.id,
            tokenCreationDate: new Date
        };

        //JSON con el payload firmado
        return {
            token: jwt.sign(payload, secret),
            id: user.id
        }
    };

    //LogOut

    //GET
    //Todos los usuarios
    async indexAll(){
        return await User.find();
    }
}

const userController = new UserController;
module.exports = userController;
