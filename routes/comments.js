'use strict'
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const route = require('../middleware/comments');
const ev = require('express-validation');
const validations = require('../validations/index');

router.post('/:id/:genre',auth.isLoggedIn,(req,res,next)=>{
  ev(validations.comment)
  route.createComment(req,res);
})

router.post('/edit/:id/:genre',auth.isLoggedIn,(req,res,next)=>{
route.editComment(req,res);
})

router.get('/delete/:id/:genre',auth.isLoggedIn,(req,res,next)=>{
route.deleteComment(req,res);
})

module.exports = router;
