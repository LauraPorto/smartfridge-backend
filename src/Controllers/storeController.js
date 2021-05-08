const Store = require('../Models/Store');


class StoreController {

    async allStore () {
        return await Store.find();
    };

    async storeById (userId) {
        return await Store.find({userId: userId});
    }

    async storeByName (title) {
        return await Store.findOne({title: title});
    };

    async addFavorite (title, apiId, userId){
        return await Store.create({title: title, apiId: apiId, userId})
    };

    async deleteFavorite (apiId, userId){
        return await Store.deleteOne({apiId: apiId, userId})
    }

}

const storeController = new StoreController;
module.exports = storeController;
