const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: String,
    //type: String
});

module.exports = mongoose.model('Item', itemSchema);

