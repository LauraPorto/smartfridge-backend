const Store = require('../Models/Store');


class StoreController {

    async allStore () {
        return await Store.find();
    };

    async storeById (id) {
        return await Store.findById(id);
    }

    async storeByName (name) {
        return await Store.findOne({name: name});
    };

    async addFavorite (title, apiId){
        return await Store.create({title: title, apiId: apiId})
    };

    async deleteFavorite (apiId){
        return await Store.deleteOne({apiId: apiId})
    }

}

const storeController = new StoreController;
module.exports = storeController;
