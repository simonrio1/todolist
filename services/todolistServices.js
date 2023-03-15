const ItemModel = require(`${__dirname}/../models/item.js`);
const ListModel = require(`${__dirname}/../models/list.js`);

// exports.getItems = async (list) => {
//     return await ItemModel.find({type: list});
// }

exports.createItem = async (item) => {
    return await ItemModel.create(item);
}

exports.deleteItem = async (id) => {
    return await ItemModel.findByIdAndRemove(id);
}

exports.getList = async (listName) => {
    return await ListModel.findOne({name: listName});
}

exports.createList = async (listName) => {
    return await ListModel.create({name: listName, items: []});
}

exports.updateList = async (listName, newList) => {
    return await ListModel.findOneAndUpdate({name: listName}, newList);
}