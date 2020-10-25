const express = require('express');
const session = require('express-session');

const app = express();

const sessionOption = { 
    secret: 'this is not a good secret', 
    resave: false,
    saveUninitialized: false
};
app.use(session(sessionOption));

app.get('/viewcount', (req, res, next) => {
    if(req.session.count) req.session.count += 1;
    else req.session.count = 1;
    res.send(`You have seen this page ${req.session.count} times`);
})

app.get('/register', (req, res, next) => {
    const {username = 'John Doe'} = req.query;
    req.session.username = username;
    res.redirect("/greet");
})

app.get('/greet', (req, res, next) => {
    res.send(`Hello ${req.session.username}`);
})

app.listen(3000, () => {
    console.log("Start Listeing");
})