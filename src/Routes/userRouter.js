const router = require('express').Router();
const userController = require('../Controllers/userController');
const auth = require('../Middleware/auth');

//POST
//Registro de usuarios
router.post('/signup', async (req, res) => {
    try{
        const user = await userController.signUp(req.body);
        return res.json(user)
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//LogIn 
router.post('/login', async (req, res) => {
    try{
        
        let email = req.body.email;
        let password = req.body.password;

        console.log('Comprobación del post login', email, password);
        
        let token = await userController.logIn(email, password); 
        
        if(token){
            res.json(token);
        }else{
            res.sendStatus(403);
        }
        
    }catch(error){
        return res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//LogOut

//GET
//Todos los usuarios
router.get('/', async (req, res) => {
    try {
        const allUsers = await userController.indexAll();
        return res.json(allUsers);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;