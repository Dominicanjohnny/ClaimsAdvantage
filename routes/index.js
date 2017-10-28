var express = require('express');
var router = express.Router();
const Picture = require('../models/pictures');

/* GET home page. */
router.get('/', function(req, res, next) {
  Picture.find((err, pictures) => {
    res.render('index', {pictures})
  })
});
module.exports = router;
