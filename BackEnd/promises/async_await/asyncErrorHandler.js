const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetables', 'dairy']
    }
})

const Product = mongoose.model('Product', productSchema);

// connect to database
mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
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


// app.get('/products/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         if (!product) {
//             return next(new Error('Something Went Wrong'));
//         }
//         res.render('detailPage', { product });
//     } catch (err) {
//         next(err); // this is to handle error from mongoose (or somewhere we can't control  )
//     }
// })

/// we make an async that return a function that will pass error to next
function wrapAsync(func) {
    return function (req, res, next) {
        func(req, res, next).catch(e => next(e));
    }
}

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new Error('Something Went Wrong'));
    }
    res.render('detailPage', { product });
}));

app.use((err, req, res, next) => {
    const { status = 500, message = "Something gone wrong" } = err;
    res.send(`${status} ${message}`);
})

app.listen(3000, () => {
    console.log("Start listening on port 3000");
})