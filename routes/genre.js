'use strict'
const express = require('express');
const router = express.Router();
const route = require('../middleware/genre');

router.get('/:genre',(req,res,next)=>{
  route.getGenreWithPostsAndComments(req, res);
});

module.exports = router;
