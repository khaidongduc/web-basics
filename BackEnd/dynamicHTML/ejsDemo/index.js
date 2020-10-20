var express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

// to serve static assets
app.use(express.static(path.join(__dirname, '/assets')));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
// __dirname is where this file is located

app.get('/', (req, res) => {
    res.render("home"); 
    // default is views/<file_name>.<view_engine> in the current working directories
    // however, to work from different directory, we should ser default views directory
    // so we don't have to write int the entire path
})

app.get('/tags', (req, res) => {
    let num = Math.floor(Math.random() * 10); 
    res.render("tags", {num});
})

app.get('/parse_data', (req, res) => {
    let num = Math.floor(Math.random() * 10);
    // pass an object to send data to ejs
    res.render("parse_data", {randomNum: num});
})

app.get('/loops_if', (req, res) => {
    let num = Math.floor(Math.random() * 10);
    // pass an object to send data to ejs
    res.render("loops_if", {num});
})

app.get('/bootstrap', (req, res) => {
    res.render('bootstrap');
})

app.get('/partials', (req, res) => {
    res.render('partials');
})

app.get('/folder/:subfolder', (req, res) => {
    const {subfolder} = req.params;
    res.render('folder_page', {subfolder});
})

const redditData = require(path.join(__dirname, '/assets/data/data.json'));
app.get('/reddit', (req, res) => {
    res.render('reddit', {redditData});
})

app.get('/reddit/:subreddit', (req, res, next) => {
    let {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data) res.render('subreddit', data);
    else next();
})



app.get('*', (req, res) => {
    res.send('this page doesn\'t exist');
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})