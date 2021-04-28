const router = require('express').Router();
const storeController = require('../Controllers/storeController');

/*
DESPENSA: GET (ver los alimentos de la despensa), DELETE (eliminar alimentos de la despensa), POST (añadir alimentos a la despensa)
*/

//GET
//Todos los ingredientes
router.get('/', async (req, res) => {
    try {
        const allIngredients = await storeController.allIngredients();
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
        const allIngredients = await storeController.allForbiddenIngredients();
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
        let ingredientDeleted = await storeController.delete(id);
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
        let ingredientDeleted = await storeController.deleteForbidden(id);
        let status = 'Ingredient deleted !';
        res.json({status, ingredientDeleted});
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});

//PUT 
//Añadir ingredientes a la despensa
router.put('/:userId', async (req, res) => {
    try{
        const userId = req.params.userId;
        const name = req.body;

        const findIngredient = await storeController.addIngredients(userId, name);

        return res.status(200).json(findIngredient);

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});

//Añadir ingredientes a la despensa
router.put('/exception/:userId', async (req, res) => {
    try{
        const name = req.body;
        const userId = req.params.userId;

        const findIngredient = await storeController.addForbiddenIngredients(userId, name);

        return res.status(200).json(findIngredient);

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});

module.exports = router;