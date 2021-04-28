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
        })
    }
});

//DELETE 
//Borrar ingredientes
router.delete('/:id', async (res, res) => {
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
})