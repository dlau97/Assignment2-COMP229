//users.js - Dhevan Lau - 301130935 - Due Date: 14 February 2021

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
