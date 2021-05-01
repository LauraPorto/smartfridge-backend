const router = require('express').Router();
const storeController = require('../Controllers/storeController');

//GET 
//Todos los ingredientes 
router.get('/', async (req, res) => {
    try{
        const allIngredients = await storeController.allStore();
        return res.json(allIngredients);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});


//Ingredientes por Id
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const ingredientId = await Store.storeById(id);
        return res.json(ingredientId);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});


//Ingredientes por nombre
router.get('/:name', async (req, res) => {
    try{
        const name = req.params.name;
        const ingredientName = await Store.storeByName(name);
        return res.json(ingredientName);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});



module.exports = router;