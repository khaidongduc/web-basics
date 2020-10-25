const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect to mongodb default port
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(data => {
        console.log("Connection Open!!!");
    })
    .catch(error => {
        console.log("ERROR", error);
    })

const personSchema = new Schema({
    first: {
        type: String,
        default: "John"
    },
    last: {
        type: String,
        default: "Doe"
    }
})

personSchema.virtual('fullName')
.get(function(){
    return `${this.first} ${this.last}`;
})
.set(function(fullName){
    this.first = fullName.substr(0, fullName.indexOf(' '));
    this.last = fullName.substr(fullName.indexOf(' ') + 1);
})

const Person = mongoose.model('Person', personSchema);

var unknown = new Person();
unknown.fullName = "Tammy Scott"
console.log(unknown);