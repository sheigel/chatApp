var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'React', qp: req.query.nameP });
});

module.exports = router;
