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

}

const storeController = new StoreController;
module.exports = storeController;
