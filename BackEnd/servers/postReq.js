const express = require('express');
const path = require('path');

const app = express();
// need to specify the format of the post request body
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get('/tacos', (req, res) => {
    let {dish, qty} = req.query;
    res.send(`GET\n${dish} ${qty}`);
})

app.post('/tacos', (req, res) => {
    let {dish, qty} = req.body; // extract from post request
    res.send(`POST\n${dish} ${qty}`);
})

app.listen(3000, () => {
    console.log("START LISTENING");
})