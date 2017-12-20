const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

const Contact = module.exports = mongoose.model('contact', ContactSchema );


module.exports.addContact =  function(con,callback){
    con.save(callback);
};


