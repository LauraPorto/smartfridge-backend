const Store = require('../Models/Store');


class StoreController {

    async allStore () {
        return await Store.find();
    };

    async storeById (userId) {
        return await Store.findById(userId);
    }

    async storeByName (title) {
        return await Store.findOne({title: title});
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
