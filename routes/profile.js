'use strict'
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const route = require('../middleware/profile')

router.get('/',auth.isLoggedIn,(req,res,next)=>{
  route.getProfile(req,res)
})

module.exports = router;
