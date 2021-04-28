const router = require('express').Router();
const userController = require('../Controllers/userController');

//POST - Registro de usuarios

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

//GET - Todos los usuarios
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