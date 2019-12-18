const Mongoose = require('mongoose');

var userSchema = Mongoose.Schema({
    name: {
        type : String,
        require : true
    },

    email : {
        type : String,
        require : true
    },

    password : {
        type : String,
        require : true
    },

});

module.exports = Test = Mongoose.model('Test',userSchema);