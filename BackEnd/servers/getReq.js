/// express is a web framework for Node.js

/// these following code will start a sever, however it will not
/// reflect the change if we made if we dont manually reset the sever
/// to automate this, we use nodemon
/// to use nodemon, use
// nodemon file_path 

const express = require('express');
const path = require('path');
const app = express();


app.use((request, response, next) => { // every time a request hits the server
    console.log("we got a request");    
    /*
    /// send string as auto generated html
    response.send("Hello, we got your request. This is a respond");

    /// we can send html by using html tags
    response.send("<h1>Hello, we got your request. This is a h1 respond</h1>");


    /// send an object will give you a json
    response.send({name: "Khai", age: 18});
    */

    next(); // this is for the .use to stop 
    // since there is no response from use, it will look for the 
    // next request
    // we can specified the path by using next('path')
    // if next() is used, this is called a middleware
});

/// routing
// the paths are called route

// get request
app.get('/', (request, response) => { // get request from root (homepage)
    console.log("Home page request");
    response.sendFile(path.join(__dirname, "home.html"));
})
app.get('/cats', (request, response) => {
    console.log("cats requests");
    response.send("<h2>meow</h2>");
})

// if there are several folders, we wouldn't just
// add app.get() for every files to every folder
// instead, we make a generic path
// the generic path goes as follow 'path/:sub_path'
app.get('/r/:subreddit', (request, response) => {
    const {subreddit} = request.params; 
    // the sub_path will be a property in object params
    response.send(`this is a subreddit about ${subreddit}`);
})
app.get('/r/:subreddit/:postId', (request, response) => {
    const {subreddit, postId} = request.params; 
    // the sub_path will be a property in object params  
    response.send(`viewing postID ${postId} on ${subreddit}`);
})

// queryString
// query is an object in request
app.get('/search', (request, response) => {
    console.log(request.query);
    const {q, color} = request.query;
    response.send(`Search results for ${q} with color ${color}`);
})

// all
app.get("*", (request, response) => {
    // placing this at the end applies to all get request except one specified before
    // place this will override all get request that comes later 
    // dont place it first
    // should be at the last get request
    console.log("unknown requests");
    response.send("<h2>I dont know that route</h2>");
})

/// listen
app.listen(3000, () => { // listening to requests at port 3000
    console.log("LISTENING ON PORT 3000");
})

