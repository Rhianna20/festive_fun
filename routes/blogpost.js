// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const Post = require('../models/post')

// //get all posts
// router.get('/noteposts', async (req, res) =>{
//     const posts = await Post.find()
//     res.send(posts)
// })

// //create post
// router.post('/notepost', async (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         thingsToDo: req.body.thingsToDo,
//     })
//     await post.save()
//     res.send(post)
// })

// module.exports = router;