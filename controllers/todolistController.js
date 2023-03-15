const todolistService = require(__dirname + "/../services/todolistServices.js");

exports.getItems = async (req,res) => {
    try {
        const listId = "Home";
        let list = await todolistService.getList(listId);

        if (list === null) {
            list = await todolistService.createList(listId);
        }
        res.render("list", {listTitle: list.name, items: list.items});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createItem = async (req,res) => {
    try {
        const listId = "Home";
        const newItem = req.body.newItem;
        const item = await todolistService.createItem({name: newItem});
        const list = await todolistService.getList(listId);
        list.items.push(item);
        const newList = await todolistService.updateList(listId, list);
        res.redirect("/");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteItems = async (req, res) => {
    try {
        const listId = "Home";
        const list = await todolistService.getList(listId);
        const itemsToDelete = Object.keys(req.body);
        itemsToDelete.forEach(id => {
            list.items.pull({_id: id});
        });
        const newList = await todolistService.updateList(listId, list);
        res.redirect("/");

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


exports.getItemsCustom = async (req,res) => {
    try {
        const listId = req.params.listId;
        let list = await todolistService.getList(listId);

        if (list === null) {
            list = await todolistService.createList(listId);
        }
        res.render("list", {listTitle: list.name, items: list.items});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createItemCustom = async (req,res) => {
    try {
        const listId = req.params.listId;
        const newItem = req.body.newItem;
        //const item = await todolistService.createItem({name: newItem, type: listId});
        const item = await todolistService.createItem({name: newItem});
        const list = await todolistService.getList(listId);
        list.items.push(item);
        const newList = await todolistService.updateList(listId, list);
        res.redirect("/"+listId);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteItemsCustom = async (req, res) => {
    try {
        const listId = req.params.listId;
        const list = await todolistService.getList(listId);
        const itemsToDelete = Object.keys(req.body);
        itemsToDelete.forEach(id => {
            list.items.pull({_id: id});
        });
        const newList = await todolistService.updateList(listId, list);
        res.redirect("/"+listId);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}