let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our contact Model
let Contact = require('../models/user');

// Get Route for the contact list
router.get('/', (req, res, next) => {
    Contact.find((err, ContactList) => {
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            console.log(ContactList)
        }
    })
});

module.exports = router;