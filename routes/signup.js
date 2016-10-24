'use strict'
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const ev = require('express-validation');
const validations = require('../validations/index');
// const route = require('../middleware/');

router.get('/',(req,res,next)=>{
  res.render('signup')
})

router.post('/', ev(validations.signup) ,(req,res,next)=>{
  auth.createUser(req,res);
})

module.exports = router;
