const express = require('express');

// use Router to break up our code to several pieces
// we can add middleware to router
const campgroundRouter = require('./campgrounds');
const reviewRouter = require('./reviews');

const app = express();

app.get('/', (req, res, next) => {
    res.send("HOME PAGE");
})

app.use('/campgrounds', campgroundRouter);
app.use('/reviews', reviewRouter);

app.listen(3000, () => {
    console.log("START LISTENING");
})