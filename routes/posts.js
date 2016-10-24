const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const route = require('../middleware/posts')
const ev = require('express-validation');
const validations = require('../validations/index');


router.get('/', auth.isLoggedIn,(req,res,next)=>{
  route.getPost(req,res)
})

router.post('/:genre',auth.isLoggedIn,(req,res,next)=>{
  ev(validations.post);
  route.createPost(req,res)
})

router.post('/edit/:id/:genre',auth.isLoggedIn,(req,res,next)=>{
  route.editPost(req,res)
})

router.get('/delete/:id/:genre',auth.isLoggedIn,(req,res,next)=>{
  route.deletePost(req,res)
})

module.exports = router;
