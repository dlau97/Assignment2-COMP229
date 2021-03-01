//index.js - Dhevan Lau - 301130935

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/aboutme', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

// Get Route for displaying the login page
router.get('/login', indexController.displayLoginPage);

// Get Post for processing the login page 
router.post('/login', indexController.processLoginPage);

// Get Route for displaying the register page
router.get('/register', indexController.displayRegisterPage);

// Get Post for processing the register page 
router.post('/register', indexController.processRegisterPage);

// Get to perform UserLogout 
router.get('/logout', indexController.performLogout);


module.exports = router;
