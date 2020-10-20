const express = require('express');
const path = require('path');
const redditData = require('./data.json');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get('/reddit/:subreddit', (req, res, next) => {
    let {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data) res.render('subreddit', data);
    else next();
});

app.get('/reddit/:subreddit', (req, res) => {
    res.send("This page doesn't exist");
});

app.listen(3000, () => {
    console.log("Start Listening on port 3000");
});

