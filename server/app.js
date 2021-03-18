require('sucrase/register/jsx');

const express = require('express');

const React = require('react');

const app = express();

const ReactDomServer = require('react-dom/server');

const PORT = process.env.PORT || 3033;

const createError = require('http-errors');

const path = require('path');

const cookieParser = require('cookie-parser');

// const logger = require('dev')

const { home } = require('./views/home.jsx')

const { notes } = require('./views/notes.jsx')

// app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res){
    const userName = req.query['userName']
    if (userName){
        const html = ReactDomServer.renderToString(
            React.createElement(notes) ) 
        res.send(html);
     

    }
    else {
        const landingPage = ReactDomServer.renderToString(
            React.createElement(home, {}),
        )
        res.send(landingPage)
    }
    
})





app.listen(PORT, () => {
    console.log(`Server is listening on port: 3033`);

});

module.exports = app;