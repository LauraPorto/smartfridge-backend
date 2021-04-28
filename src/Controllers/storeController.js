const Store = require('../Models/Store');
const User = require('../Models/User');


/*
CONTROLLER DESPENSA: leer los datos almacenados en la despensa, añadir alimentos a la despensa, eliminar alimentos de la despensa
*/

class StoreController {

    //GET
    //Todos los alimentos de la despensa 
    async allIngredients () {
        return await Store.food.find();
    };

    //Todos los ingredientes vetados
    async allForbiddenIngredients () {
        return await Store.forbiddenFood.find();
    }

    //PUT
    //Añadir alimentos a la despensa 
    async addIngredients (name) {
        await Store.food.findOne({name: name});
        const ingredientsAdded = Store.food.push(name);
        return ingredientsAdded;
    }

    //Añadir alimentos prohibidos a la despensa 
    async addForbiddenIngredients (name) {
        await Store.forbiddenFood.findOne({name: name});
        const ingredientsAdded = Store.forbiddenFood.push(name);
        return ingredientsAdded;
    }

    //DELETE
    //Borrar alimentos de la despensa 
    async delete(id){
        return await Store.food.findByIdAndDelete(id);
    };

    //Borrar alimentos vetados de la despensa 
    async deleteForbidden(id){
        return await Store.forbiddenFood.findByIdAndDelete(id);
    };

}

const storeController = new StoreController;
module.exports = storeController;
