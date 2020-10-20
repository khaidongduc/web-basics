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

// create schema
const movieSchema = new Schema({
    title: String,
    year: Number,
    score: { type: Number, default: 0.0 }, // add default value
    rating: String
})

// use schema to create a class
const Movie = mongoose.model('Movie', movieSchema);
// create a new collection by lowercase and pluralize 'Movie' (movies)

// updating

// update One
Movie.updateOne({ title: 'Jumaji' }, { year: 1965 })
    .then(data => {
        console.log(data);
    })

// update One
Movie.updateMany({ rating: 'R' }, { rating: 'PG-13' })
    .then(data => {
        console.log(data);
    })

// find And update
Movie.findOneAndUpdate({ title: 'Jumaji' }, { year: 1967 })
    .then(data => {
        console.log(data); // data is the old version
    })

Movie.findManyAndUpdate({ rating: 'PG-13' }, { rating: R })
    .then(data => {
        console.log(data); // data is the old version
    })
