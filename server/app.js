require('sucrase/register/jsx');

const express = require('express');

const bodyParser = require('body-parser');

const React = require('react');

const app = express();

const router = express.Router();

const db = require('./db');
const ReactDomServer = require('react-dom/server');

const PORT = process.env.PORT || 3033;

const mongoose = require('mongoose');
const createError = require('http-errors');

const path = require('path');

const cookieParser = require('cookie-parser');

// const logger = require('dev')

const { home } = require('./views/home.jsx')

const { notes } = require('./views/notes.jsx')


// app.use(logger('dev'));

//connect to mongoDB 
mongoose.connect('mongodb://localhost:27017/funDb', { useNewUrlParser: true})
.then(() =>{
    const app = express();

    console.log('database connected')
})
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//other dependencies
app.use(express.static(path.join(__dirname, 'public')));

// view engine set
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.get('/', function (req, res){
  
    const userName = req.query['userName']
    console.log(req.query['userName'])

    if (userName){
        const html = ReactDomServer.renderToString(
            React.createElement(notes) ) 
        res.send(html);
        console.log(req.params['userName'])
    }
    else {
        const landingPage = ReactDomServer.renderToString(
            React.createElement(home, {}),
        )
        res.send(landingPage)
    }
    
})



// Create a post
app.post('/notebook', function (req, res) {
  
    // const toDo =  pool.query("INSERT INTO notePosts (title) VALUES ('Ms Jackson') (things_to_do) VALUES ('stick to a bloody diet')")
    // [thingsTodo]
    // res.json(notePost.row[0])
  
    let notePost = req.body;
    // notePost.id = notePost.length +1;
    // notePost.push(notePost)
    res.send(notePost)
    console.log(req.body)
    
})

// Get all the note posts

// app.get('/:id', async(req, res) => {

//         const all = await pool.query("SELECT * FROM notePost")
//         res.json(all.rows)
// }) 




app.listen(PORT, () => {
    console.log(`Server is listening on port: 3033`);

});

module.exports = app;