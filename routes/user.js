let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our User Model
let User = require('../models/user');

// Get Route for the user list
router.get('/', (req, res, next) => {
    User.find((err, UserList) => {
        if(err)
        {
            return console.error(err);
        }
        else 
        {
            console.log(UserList)
        }
    })
});

module.exports = router;