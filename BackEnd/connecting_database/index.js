const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");


const Product = require('./models/product')

// connect to database
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(data => {
        console.log("Mongo Connection Open!!!");
    })
    .catch(error => {
        console.log("MONGO CONNECTION ERROR", error);
    })

// set up app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routing
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.render('home', { products });
    } catch (error) {
        res.send("ERROR");
    }
});

app.get('/products/add', (req, res) => {
    res.render('addForm');
})

app.get('/products/:id/edit', async (req, res) => {
    try {
        let { id } = req.params;
        const product = await Product.findById(id);
        res.render('editForm', { product });
    } catch (error) {
        res.send("ERROR");
    }
})

app.post('/products', (req, res) => {
    try {
        let { name, price, category } = req.body;
        let newProduct = new Product({ name, price, category });
        newProduct.save();
        res.redirect(`/products/${newProduct._id}`);
    } catch (error) {
        res.send("ERROR");
    }
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.render('detailPage', { product });
    } catch (error) {
        res.send("ERROR");
    }
})

app.patch('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndUpdate(id, req.body, {runValidators: true});
        res.redirect(`/products/${id}`);
    } catch (error) {
        res.send(error);
    }
})

app.delete('/products/:id', async (req, res) => {
    console.log("HIT DELETE");
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.redirect("/products");
    } catch (error) {
        res.send(error);
    }
})

app.listen(3000, () => {
    console.log("Start listening on port 3000");
})