const router = require('express').Router();
const storeController = require('../Controllers/storeController');

//GET 
//Todos los ingredientes 
router.get('/', async (req, res) => {
    try{
        const allFavRecipes = await storeController.allStore();
        return res.json(allFavRecipes);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});


//Ingredientes por Id
router.get('/:id', async (req, res) => {
    try{
        const userId = req.params.id;
        const myRecipes = await Store.storeById(userId);
        return res.json(myRecipes);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});


//Ingredientes por nombre
router.get('/:title', async (req, res) => {
    try{
        const title = req.params.title;
        const recipeName = await Store.storeByName(title);
        return res.json(recipeName);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//POST
//Guardar una receta en favoritos
router.post('/', async (req, res) => {
    try{
        const apiId = req.params.apiId;
        const title = req.params.title; 
        const result = await storeController.addFavorite (title, apiId);
        const status = 'Recipe save on Fav';
        return res.json({result, status})
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
});

//DELETE
//Borrar una receta de favoritos
router.delete('/', async (req, res) => {
    try{
        const apiId = req.params.apiId;
        const result = await storeController.deleteFavorite(apiId);
        const status = 'Recipe deleted on Fav';
        return res.json({result, status})
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
})


module.exports = router;