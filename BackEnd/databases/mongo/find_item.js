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

// create schema
const movieSchema = new Schema({
    title: String,
    year: Number,
    score: {type: Number, default: 0.0}, // add default value
    rating: String
})

// use schema to create a class
const Movie = mongoose.model('Movie', movieSchema);
// create a new collection by lowercase and pluralize 'Movie' (movies)

// finding - syntax like in mongodb
// get all
Movie.find({}).exec()
.then(data => {
    console.log(data)
});

// find movies that fit the criteria
Movie.find({rating: 'R'}).exec()
.then(data => {
    console.log(data)
});

// find one data that fit the criteria
Movie.findOne({rating: 'R'}).exec()
.then(data => {
    console.log(data)
})