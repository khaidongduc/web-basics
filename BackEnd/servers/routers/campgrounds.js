const express = require('express');
const router = express.Router();

// middlewares
const myMiddleWare = function(req, res, next){
    console.log("GOES THrough, MIddleWare");
    next();
}
router.use(myMiddleWare); // this middleware only applies to elements in campgrounds route

// posts' index route
router.get('/', async (req, res) => {
    res.send("GET THE INDEX");
});

// posting new post
router.get('/new', (req, res) => {
    res.send("GET THE NEW POST");
})

// get the post
router.get('/:id', async (req, res,) => {
    res.send("GET THE POST");
});

module.exports = router;