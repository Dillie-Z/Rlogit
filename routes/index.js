'use strict'

const express = require('express');
const router = express.Router();
const login = require('../routes/login');
const signup = require('../routes/signup');
const logout = require('../routes/logout')
const posts = require('../routes/posts');
const comments = require('../routes/comments');
const profile = require('../routes/profile');
const genre = require('../routes/genre');

router.use('/login', login);
router.use('/signup', signup);
router.use('/logout',logout);
router.use('/posts', posts);
router.use('/comments', comments);
// router.use('/profile', profile);
router.use('/genre', genre);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  if(req.user){
    var loggedIn;
    loggedIn = true;
  }
  let user = req.user

  res.render('index', { user,loggedIn });
});

module.exports = router;
