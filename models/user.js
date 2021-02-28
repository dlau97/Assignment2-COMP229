let mongoose = require("mongoose");

//create a model class
let userModel = mongoose.Schema({
    username: String,
    password: String,
    email_address: String,
    display_name: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('User', userModel);