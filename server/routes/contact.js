
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route for the contact list page - Read Operation
router.get('/', contactController.displayContactList);

// Get Route for displaying the add page  - create Operation
router.get('/add', requireAuth, contactController.displayAddPage);

// Get Post for processing the add  page  - create Operation
router.post('/add', requireAuth, contactController.processAddPage);

// Get Route for displaying the Edit list page  - Update Operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// Post Route for processing the Edit list page  - Update Operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Get to perform Deletion  - Deletion Operation
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;