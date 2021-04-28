const router = require('express').Router();
const userController = require('../Controllers/userController');

//POST - Registro 

router.post('/signup', async (req, res) => {
    try{
        const user = await userController.signUp(req.body);
        return res.json(user)
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
})


module.exports = router;