const router = require('express').Router();
const kitchenController = require('../Controllers/kitchenController');

//GET
//Todos los ingredientes en mi cocina
router.get('/', async (req, res) => {
    try {
        const allIngredients = await kitchenController.allIngredients();
        return res.json(allIngredients);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//Todos los ingredientes vetados
router.get('/exception', async (req, res) => {
    try{
        const allIngredients = await kitchenController.allForbiddenIngredients();
        return res.json(allIngredients);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
})

//DELETE 
//Borrar ingredientes
router.delete('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let ingredientDeleted = await kitchenController.delete(id);
        let status = 'Ingredient deleted !';
        res.json({status, ingredientDeleted});
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});

//Borrar ingredientes vetados
router.delete('/exception/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let ingredientDeleted = await kitchenController.deleteForbidden(id);
        let status = 'Ingredient deleted !';
        res.json({status, ingredientDeleted});
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});

//PUT 
//Añadir ingredientes a mi cocina
router.put('/:userId', async (req, res) => {
    try{
        const userId = req.params.userId;
        const name = req.body;

        const findIngredient = await kitchenController.addIngredients(userId, name);

        return res.status(200).json(findIngredient);

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});

//Añadir ingredientes vetados a mi cocina
router.put('/exception/:userId', async (req, res) => {
    try{
        const name = req.body;
        const userId = req.params.userId;

        const findIngredient = await kitchenController.addForbiddenIngredients(userId, name);

        return res.status(200).json(findIngredient);

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});


module.exports = router;