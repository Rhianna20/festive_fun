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

const Post = require('../models/post');

const { mainPage }  = require('./views/mainPage');


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



app.get('/', async function (req, res){
  
    const userName = req.query['userName']
    console.log(req.query['userName'])

    if (userName){
        const html = ReactDomServer.renderToString(
            React.createElement(notes) ) 
        const posts = await Post.find();
        res.send(html);
        console.log(posts)
        
        // console.log(req.params['userName'])
    }
    else {
        const landingPage = ReactDomServer.renderToString(
            React.createElement(home, {}),
        )
        res.send(landingPage)
    }
    
})



// Create a post
app.post('/notebook', async function (req, res) {
  
    const post = new Post({
        title: req.body.title,
        thingsToDo: req.body.thingsToDo
    })
    await post.save()
    res.send(post)
    console.log(post)
  
    // let notePost = req.body;
    // notePost.id = notePost.length +1;
    // notePost.push(notePost)
    // res.send(notePost)
    // console.log(req.body)
    
})


//get indivdual posts
router.get('/posts/:id', async (req, res) =>{
    const post = await Post.findOne({_id: req.params.id})
    res.send(post)
})

//uodate posts

router.patch('/post/:id', async (req, res) =>{
    try{
        const post = await Post.findOne({_id: req.params.id})
        if (req.body.title) {
            post.title = req.body.title
        }
        if (req.body.thingsToDo){
            post.content = req.body.thingsToDo
        }
        await post.save()
        res.send(post)
    }
    catch{
        res.status(404)
        res.send({error: "post doesnt exist"})
    }
})

router.delete('/posts/:id', async (req, res) =>{
    try {
        await Post.deleteOne({ _id: req.params.id})
        res.status(204).send(mainPage)
    } catch{
        res.status(404)
        res.send({error: "post doesnt exist!"})
    }
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