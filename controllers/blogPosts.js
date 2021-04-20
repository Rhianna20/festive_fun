const path = require('path');
const BlogPost = require('../models/post')

exports.index = function (req, res){
    res.sendFile(path.resolve('../views/BlogPost'));
}

exports.create = function (req, res) {
    var newBlogPost = new BlogPost(req.body);
    // console.log(req.body);
    newBlogPost.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save post to database');
        } else {
            res.redirect('/newBlogPost/getnewBlogPost');
        }
  });
               };

               exports.list = function (req, res) {
                BlogPost.find({}).exec(function (err, blogPost) {
                        if (err) {
                                return res.send(500, err);
                        }
                        res.render('getBlogPost', {
                                blogPost: blogPost
                     });
                });
        };