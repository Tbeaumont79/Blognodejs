const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        unique: true,
        required: true,
    },
    password:{
        type:String,
        required:true,
        index:true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);