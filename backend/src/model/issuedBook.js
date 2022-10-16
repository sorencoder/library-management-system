const mongoose = require('mongoose');
const { schema } = require('./books');
const issuedBook = mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true
    },
    bookname:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model("issuedBook" , issuedBook)