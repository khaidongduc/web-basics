const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const { signedCookie } = require('cookie-parser');

app.use(cookieParser('this is my scecret'));

app.get('/', (req, res, next) => {
    const { name = "Anonymous" } = req.cookies;
    res.send(`HEY THERE ${name.toUpperCase()}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Steve');
    res.send("SEND COOKIE");
})

app.get('/sign-cookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed: true});
    res.send("SIGN COOKIE")
})

app.get('/verify-sign-cookie', (req, res) => {
    const signedCookie = req.signedCookies;
    console.log(signedCookie);
    res.send("VERIFY")
})

app.listen(3000, () => {
    console.log("START LISTENING");
})