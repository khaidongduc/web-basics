/// express is a web framework for Node.js

/// these following code will start a sever, however it will not
/// reflect the change if we made if we dont manually reset the sever
/// to automate this, we use nodemon
/// to use nodemon, use
// nodemon file_path 

const express = require('express');
const path = require('path');
const app = express();

const CustomError = require('./customError')

app.use((request, response, next) => { // every time a request hits the server
    console.log("we got a request");    
    next(); 
});

// get request
app.get('/cats', (request, response) => {
    console.log("cats requests");
    throw new CustomError('cat error', 401);
})


// post
app.post('/tacos', (req, res) => {
    let {dish, qty} = req.body; // extract from post request
    res.send(`POST\n${dish} ${qty}`);
})


// handle the error (custom error handler callback)
app.use((err, req, res, next) => {
    console.log("get an error");
    const {status} = err;
    res.status(status).send("something went wrong");
})


/// listen
app.listen(3000, () => { // listening to requests at port 3000
    console.log("LISTENING ON PORT 3000");
})

