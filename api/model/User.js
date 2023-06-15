const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    amount : Number,
    account_number : String 
},{
    timestamps : true
})

const User = mongoose.model('user',UserSchema)

module.exports = User
