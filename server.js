const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const todos = require('./data/todos');



app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));



app.get('/', (req, res) => {
    res.render('index.ejs',{
        todos: todos
    });
})

app.post('/', (req, res) => {
    todos.push(req.body)
    res.redirect('/')
})








app.listen(3000, () => {
    console.log('App is listening on port 3000');
})