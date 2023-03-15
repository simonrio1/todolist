const mongoose = require("mongoose");
const ItemModel = require(__dirname + "/item.js");

const listSchema = new mongoose.Schema({
    name: String,
    items: [ItemModel.schema]
});

module.exports = mongoose.model('List', listSchema);

