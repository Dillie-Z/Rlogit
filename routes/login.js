'use strict'
const express = require('express');
const router = express.Router();
const passport = require('passport');
const ev = require('express-validation');
const validations = require('../validations/index');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/signup',
  failureFlash: true
}),(req,res,next)=>{
  ev(validations.login)
})

module.exports = router;
