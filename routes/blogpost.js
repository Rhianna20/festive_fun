const express = require('express');
const mongoose = require('mongoose');


//connect to mongoDB 
mongoose.connect('mongodb://localhost:27017/funDb', { useNewUrlParser: true})
.then(() =>{
    const app = express();

    console.log('database connected')
})