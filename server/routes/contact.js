const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our contact Model
let Contact = require('../models/contact');

// Get Route for the contact list page - Read Operation
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            res.render('contact/list', { title: 'Business Contacts', ContactList: contactList});
            //console.log(ContactList)
        }
    })
});

// Get Route for displaying the add page  - create Operation
router.get('/add', (req, res, next) => {
    res.render('contact/add', { title: 'Add Contact'});
});

// Get Post for processing the add  page  - create Operation
router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "contact_name" : req.body.contact_name,
        "contact_number" : req.body.contact_number,
        "email_address" : req.body.contact_email
    });

    Contact.create(newContact, (err, Contact) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
});

// Get Route for displaying the Edit list page  - Update Operation
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            //show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit})
        }
    });
});

// Post Route for processing the Edit list page  - Update Operation
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id" : id,
        "contact_name" : req.body.contact_name,
        "contact_number" : req.body.contact_number,
        "email_address" : req.body.contact_email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

// Get to perform Deletion  - Deletion Operation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
});


module.exports = router;