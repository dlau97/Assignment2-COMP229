
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our contact Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

// Get Route for the contact list page - Read Operation
router.get('/', contactController.displayContactList);

// Get Route for displaying the add page  - create Operation
router.get('/add', contactController.displayAddPage);

// Get Post for processing the add  page  - create Operation
router.post('/add', contactController.processAddPage);

// Get Route for displaying the Edit list page  - Update Operation
router.get('/edit/:id', contactController.displayEditPage);

// Post Route for processing the Edit list page  - Update Operation
router.post('/edit/:id', contactController.processEditPage);

// Get to perform Deletion  - Deletion Operation
router.get('/delete/:id', contactController.performDelete);

module.exports = router;