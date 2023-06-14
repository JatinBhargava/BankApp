const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _id : Number,
    username : String,
    email : String,
    amount : Number,
    account_number : Number 
},{
    timestamps : true
})

const User = mongoose.model('user',UserSchema)

module.exports = User
