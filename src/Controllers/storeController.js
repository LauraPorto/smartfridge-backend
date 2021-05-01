const Store = require('../Models/Store');


class StoreController {

    async allIngredients () {
        return await Store.find();
    };

    async ingredientsById (id) {
        return await Store.findById(id);
    }

    async ingredientsByName (name) {
        return await Store.findOne({name: name});
    };

}

const storeController = new StoreController;
module.exports = storeController;
