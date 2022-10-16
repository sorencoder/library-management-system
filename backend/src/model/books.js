const mongoose = require('mongoose');
const bookSchema = mongoose.Schema(
    {
        id:{
            type:String,
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
        dateadded:{
            type: Date,
            default: Date.now()
        }
    }
);
module.exports = mongoose.model("books",bookSchema);
