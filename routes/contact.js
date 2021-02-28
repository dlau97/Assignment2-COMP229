let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our contact Model
let Contact = require('../models/contact');

// Get Route for the contact list
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            res.render('contact', { title: 'Business Contacts', ContactList: contactList});
            //console.log(ContactList)
        }
    })
});

module.exports = router;