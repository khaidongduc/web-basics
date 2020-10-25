// to connect nodejs with mongo, we use mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect to mongodb default port
mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(data => {
        console.log("Connection Open!!!");
    })
    .catch(error => {
        console.log("ERROR", error);
    })


const userSchema = new Schema({
    first: String,
    last: String,
    address: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const harrPotter = new User({
        first: 'Harry',
        last: 'Potter',
        address: [
            {
                street: "Black",
                city: "Red",
                state: "King",
                country: "Wiz"
            }
        ]
    });
    const res = await harrPotter.save();
    console.log(res);
}

makeUser();