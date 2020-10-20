const mongoose = require("mongoose");
const Product = require('./models/product')

// connect to database
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(data => {
        console.log("Mongo Connection Open!!!");
    })
    .catch(error => {
        console.log("MONGO CONNECTION ERROR", error);
    });

const p = new Product({
    name: "Grape",
    price: 1.99,
    category: 'fruit'
});
p.save().then(() => {
    console.log(p);
}).catch(e => {
    console.log(e);
})