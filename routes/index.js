//index.js - Dhevan Lau - 301130935 - Due Date: 14 February 2021

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});


module.exports = router;
