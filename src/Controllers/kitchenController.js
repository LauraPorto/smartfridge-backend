const Kitchen = require('../Models/Kitchen');


class KitchenController {

    //GET
    //Todos los alimentos de mi cocina 
    async allIngredients () {
        return await Kitchen.find();
    };

    // //Todos los ingredientes vetados
    async allForbiddenIngredients () {
        return await Kitchen.forbiddenFood.find();
    }

    //PUT
    //Añadir alimentos a mi cocina 
    async addIngredients (userId, name) {
        await Kitchen.findOne({userId});
        const foodStore = Kitchen.food;
        const ingredientsAdded = foodStore.push({name: name});
        return ingredientsAdded;
    }

    //Añadir alimentos prohibidos a mi cocina 
    async addForbiddenIngredients (userId, name) {
        await Kitchen.forbiddenFood.findOne(userId);
        const forbiddenFood = Kitchen.forbiddenFood;
        const ingredientsAdded = forbiddenFood.push({name: name});
        return ingredientsAdded;
    }

    //DELETE
    //Borrar alimentos de la despensa 
    async delete(id){
        return await Kitchen.food.findByIdAndDelete(id);
    };

    //Borrar alimentos vetados de la despensa 
    async deleteForbidden(id){
        return await Kitchen.forbiddenFood.findByIdAndDelete(id);
    };

}

const kitchenController = new KitchenController;
module.exports = kitchenController;