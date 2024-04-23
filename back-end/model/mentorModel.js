const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    Name:String,
    Email:String,
    PhoneNumber: Number,
    Password:String,
    ProjectTopic:String
})

const mentorModel = mongoose.model('mentor', Schema);
module.exports = mentorModel;