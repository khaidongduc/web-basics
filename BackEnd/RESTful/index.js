const express = require('express');
const path = require('path')
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

var comments = [
    {
        id: uuid(),
        username: "kyle",
        text: "Hello World"
    },
    {
        id: uuid(),
        username: "hope",
        text: "Hello World"
    },
    {
        id: uuid(),
        username: "ariel",
        text: "Hello World!"
    },
    {
        id: uuid(),
        username: "luke",
        text: "Hello World!!"
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    let { username, text } = req.body;
    if (username && text) {
        comments.push({ username, text, id:uuid() });
        res.redirect('/comments');
    }
})

app.get('/comments/:id', (req, res) => {
    let { id } = req.params;
    let comment = comments.find(c => c.id == id);
    if (comment) res.render('comments/comment', { comment });
    else res.send('DOESN\'T EXIST');
})

app.patch('/comments/:id', (req, res) => {
    let { id } = req.params;
    let { newCommentText } = req.body;
    const comment = comments.find(c => c.id == id);
    if(comment) {
        comment.text = newCommentText;
        res.redirect('/comments');
    }
    else res.send('DOESN\'T EXIST');
})

app.get('/comments/:id/edit', (req, res) => {
    let {id} = req.params;
    const comment = comments.find(c => c.id == id);
    res.render('comments/edit', {comment});
})

app.delete('/comments/:id', (req, res) => {
    let {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3000);