const router = require('express').Router();
const userController = require('../Controllers/userController');
const auth = require('../middleware/auth');
//const adminAuth = require('../Middleware/adminAuth');

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
router.get('/', auth, async (req, res) => {
    try {
        const allUsers = await userController.indexAll();
        return res.json(allUsers);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//Usuario por Id
router.get('/:id', auth, async (req, res) => {
    try {
        let id = req.params.id;
        const user = await userController.indexById(id);
        return res.json(user);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//PUT
//Modificar los datos del usuario
router.put('/:id', async (req, res) => {

    try{
        const id = req.params.id;
        const user = req.body;

        const modifiedUser = await userController.update(id, user);

        return res.status(200).json(modifiedUser);
    }catch (error) {
        return res.status(500).json({message: error.message
        });
    }
});

//DELETE
//Borrar un usuario 
router.delete('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let result = await userController.delete(id);
        let status = 'User deleted';
        res.json({status, result});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});


module.exports = router;