const Store = require('../Models/Store');
const User = require('../Models/User');


/*
CONTROLLER DESPENSA: leer los datos almacenados en la despensa, añadir alimentos a la despensa, eliminar alimentos de la despensa
*/

class StoreController {

    //GET
    //Leer los alimentos de la despensa 
    async allIngredients () {
        return await Store.find();
    };

    //PUT
    //Añadir alimentos de la despensa 
    async addIngredients (id) {
        return await Store.findById(id);
    }

    //DELETE
    //Borrar alimentos de la despensa 
    async delete(id){
        return await User.findByIdAndDelete(id);
    };
}

const storeController = new StoreController;
module.exports = storeController;
