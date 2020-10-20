/// https://mongoosejs.com/docs/middleware.html#types-of-middleware

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const etablishConnection = async function () {
    // connect to mongodb default port
    await mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(data => {
            console.log("Connection Open!!!");
        })
        .catch(error => {
            console.log("ERROR", error);
        })
}
etablishConnection()
    .then(() => {
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
            .get(function () {
                return `${this.first} ${this.last}`;
            })
            .set(function (fullName) {
                this.first = fullName.substr(0, fullName.indexOf(' '));
                this.last = fullName.substr(fullName.indexOf(' ') + 1);
            })

        personSchema.pre('save', async function () {
            console.log("ABOUT TO SAVE!!!")
        })

        personSchema.post('save', async function () {
            console.log("SAVED!!!")
        })
        const Person = mongoose.model('Person', personSchema);
        const someOne = new Person({ fullName: "Alice Wonderland" });
        someOne.save();
    })