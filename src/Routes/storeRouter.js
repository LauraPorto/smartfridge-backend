const router = require('express').Router();
const storeController = require('../Controllers/storeController');

//GET 
//Todos los ingredientes 
router.get('/', async (res, req) => {
    try{
        const allIngredients = await storeController.allIngredients();
        return res.json(allIngredients);
    }catch(error){
        return res.json(500).json({
            message: error.message
        });
    }
});


//Ingredientes por Id
router.get('/:id', async (res, req) => {
    try{
        const id = req.params.id;
        const ingredientId = await Store.ingredientsById(id);
        return res.json(ingredientId);
    }catch(error){
        return res.json(500).json({
            message: error.message
        });
    }
});


//Ingredientes por nombre
router.get('/:name', async (res, req) => {
    try{
        const name = req.params.name;
        const ingredientName = await Store.ingredientsByName(name);
        return res.json(ingredientName);
    }catch(error){
        return res.json(500).json({
            message: error.message
        });
    }
});



module.exports = router;