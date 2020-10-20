// Middleware functions are functions that have access to the request object (req), 
// the response object (res), and the next middleware function in the application’s request-response cycle. 
// The next middleware function is commonly denoted by a variable named next.

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev')); // logging other request

// define own middlewares
app.use((req, res, next) => {
    console.log('this is my first middle ware');
    next(); // move on to next middle ware

    // normally we won't have code like this (calling after next())
    console.log('this is my first middle ware -> after next'); // this still run - after next() is done
})

app.use((req, res, next) => {
    console.log('this is my second middle ware');
    next(); // move on to next middle ware
})

// add Date to req
app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
})

// dont do authentication this way
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password) {
        if (password == "password") {
            next();
        } else res.send("Wrong password");
    } else res.send("Please enter the password");
}

// this will call verify password before the callback
app.get('/', verifyPassword, (req, res) => {
    console.log(req.requestTime);
    res.send('Home page');
})


// 404 Page
app.use('*', (req, res) => {
    res.status(404).send('404 Not Found');
})


app.listen(3000, () => {
    console.log("start listening");
})

