const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect to mongodb default port
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(data => {
        console.log("Connection Open!!!");
    })
    .catch(error => {
        console.log("ERROR", error);
    })

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "need a name"], // custom error message
        minlength: [3, "too short"],
        maxlength: [28, "too long"]
    },
    price: {
        type: Number,
        required: true,
        min: 0.0
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

productSchema.methods.sellOnline = async function(){ // sellOnline to every instance of the class
    this.qty.online -= 1;
    await this.save();
}

productSchema.statics.fireSale = function(){ // add fireSale to the class
    return this.updateMany({}, {price: 0.0});
}

const Product = mongoose.model('Product', productSchema);