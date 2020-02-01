const express = require('express');
const parser = require('body-parser');
const app = express();
app.use(parser.json());

const items = [
        {"id" : 1, "name" : "Apple", "price" : 0.45, "description" : "Crunchy, keeps the doctors away!"},
        {"id" : 2, "name" : "Orange", "price" : 0.25, "description" : "Makes a great juice!"},
        {"id" : 3, "name" : "Avocado","price" : 1.45, "description" : "Magic on toast with a little S&P!"},
        {"id" : 4, "name" : "Banana", "price" : 0.75, "description" : "Slap some peanut butter on that bad lad!"}
]

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    let itemId = +req.params.id;
    let foundItem = items.find(foundItem => foundItem.id == itemId);
    res.json(foundItem);
});

app.listen(7002);