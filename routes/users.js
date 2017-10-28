var express = require('express');
var router = express.Router();
const User  = require('../models/user');
const Claim = require('../models/Claim');


router.get('/profile', (req, res, next) => {
  Claim.find({homeowner: req.user._id}, (err, claims) =>{
    if (err) { return next(err); }
    res.render('profiles.ejs', {claims} );

  });
}

)

module.exports = router;
