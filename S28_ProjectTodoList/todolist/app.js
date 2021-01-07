// 265
const express = require("express");
const bodyParser = require("body-parser");
// 342
const mongoose = require("mongoose");
const app = express();
// 266
// 272 MODULES
app.set('view engine', 'ejs'); // calling ejs

app.use(express.static('public')); // calling public files
// 270
app.use(bodyParser.urlencoded({
    extended: true
})); // using bodyparser
// 342
mongoose.connect("mongodb://localhost:27017/wdbAY", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 342
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }
});

const Item = mongoose.model("Item", itemSchema);

// 342 Insert items (I used the seeds/item.js)
// 343 Rendering the items

// 265, 266, 268, 271, 272, 342, 343
app.get("/", (req, res) => {
    Item.find((err, foundItems) => {
        res.render('list', {
            listTitle: "Today",
            items: foundItems
        });
    });
});

// 268, 271, 344
app.post("/", (req, res) => {
    let itemName = req.body.newItem;
    let item = new Item({
        name: itemName
    });
    item.save();
    res.redirect("/");
})

// 345
app.post("/delete", (req, res) => {
    Item.findByIdAndRemove(req.body.checkbox, (err) => {});
    res.redirect("/");
})

// 346
app.get("/:listName", (req, res) => {
    let listName = req.params.listName;
    const listSchema = {
        name: String,
        items: [itemsSchema]
    }

    const List = mongoose.model(List, listSchema);
    const list = new List({
        name: listName,
        items: []
    })

    res.redirect("/");
})

// 271
app.get("/about", (req, res) => {
    res.render("about", {

    });
})

app.listen(3000, () => console.log("Server started onr port 3000"));