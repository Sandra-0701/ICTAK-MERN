const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    UserName:String,
    Password:String,
    
})

const loginModel = mongoose.model('login', Schema);
module.exports = loginModel;