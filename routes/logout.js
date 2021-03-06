const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');


router.get('/',auth.isLoggedIn,(req,res,next)=>{
  req.logout();
  res.redirect('/');
})

module.exports = router;
