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

new Movie({
    title: 'IT',
    year: 1998,
    rating: 'R'
}).save(); // save on object to current mongodb

// insert many - not commonly used, there aren't many instances where
// we need to add several pieces of data into database 
Movie.insertMany([
    {title: 'Jumanji', year: '2000', rating: 'R'},
    {title: 'Jumanji 2', year: '2001', rating: 'R'}
])
.then(data => {
    console.log("It works");
    console.log(data);
})
