const express = require('express');
const router  = express.Router();
const Claim = require('../models/Claim.js');


router.get('/file-new-claim', (req, res) => {
    res.render('claims/new-claims.ejs');
});


router.post('/new-claim', (req, res, next) => {
   const newClaim = new Claim({
     homeowner: req.user._id,
     dol: req.body.dol,
     policynumber: req.body.policynumber,
     typeofdamage: req.body.description,
     insurance: req.body.insurance,
     deductible: req.body.deductible,
     urlImage: req.body.urlImage,
   });

   newClaim.save( (err, claim) => {
     if (err) {
       return next (err)
     }

     return res.redirect ("/")
   });
 });

router.post('/claim/:id/delete', (req, res, next) => {
  const idclaim = req.params.id;

  Claim.findByIdAndRemove (
    idclaim, (err, claim ) => {
      if (err) {
        return next (err);
        return res.redirect('/');
      }
    }
  )
});

module.exports = router;
