const express = require("express");

const {
    getItems,
    createItem,
    deleteItems,
    getItemsCustom,
    createItemCustom,
    deleteItemsCustom
} = require(__dirname + "/../controllers/todolistController.js");

const router = express.Router();

router.route("/").get(getItems).post(createItem).delete(deleteItems);

router.route("/:listId").get(getItemsCustom).post(createItemCustom).delete(deleteItemsCustom);

module.exports = router;