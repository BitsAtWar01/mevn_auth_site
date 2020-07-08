const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
}, {
    timestamps: true
})
//Model
const Users = mongoose.model('User', userSchema);

//Export

module.exports = Users;