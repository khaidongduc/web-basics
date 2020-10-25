// to connect nodejs with mongo, we use mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect to mongodb default port
mongoose.connect('mongodb://localhost:27017/farm', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(data => {
        console.log("Connection Open!!!");
    })
    .catch(error => {
        console.log("ERROR", error);
    })

const productSchema = new Schema({
    name: String, 
    price: Number,
    season:{
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    },
})
const farmSchema = new Schema({
    name: String, 
    city: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', productSchema);

Farm.findOne({name: 'Farm Name'})
    .populate('products')
    .then(farm => console.log(farm));