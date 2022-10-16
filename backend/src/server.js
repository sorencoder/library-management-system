const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const Books = require('./model/books');
const issuedBook = require('./model/issuedBook');
const issuedBookModel = require('./model/issuedBook');

const booksDB = 'mongodb+srv://ishwar:908870pA.@cluster0.c23bnrn.mongodb.net/books';


mongoose.connect(booksDB).then(function () {


    //homepage
    app.get("/", function(req, res){
        const response = {statuscode: res.statusCode, message:"API is working correctly"};
        res.send(response);
    });

    // get all the books available
    app.get('/books', async function (req, res) {
        var book = await Books.find();
        res.json(book);
        // res.send('Books Section');
    });

    //add new book or update book 
    app.post("/books/add", async function (req, res) {
        await Books.deleteOne({id:req.body.id})
        const newBook = new Books(
            {
                id: req.body.id,
                bookname: req.body.bookname,
                author: req.body.author
            
            }
        );
        await newBook.save();
        const response = {message: "book added successfully"};
        res.json(response);
    });


    //delete a book from record
app.post("/books/delete" , async function(req, res){
    await Books.deleteOne({id: req.body.id});
    const response = {message:"Notes deleted " +`id:${req.body.id}`};
    res.json(response);
});

 // show all books issued
    app.get("/books/issued", async function (req,res) {
         const issued = await issuedBook.find();
         res.json(issued);
    });

    //issue new book
    app.post("/books/issuebook",async function (req,res) {
        await issuedBook.deleteOne({id: req.body.id});
        const newissued = new issuedBookModel({
            id: req.body.id,
            bookname: req.body.bookname,
            author: req.body.author
        }); 
        await newissued.save();
        res.json(newissued);
    });

    
});



//remove issued book
app.post("/books/issuedbook/delete" , async function(req, res){
    await issuedBook.deleteOne({id: req.body.id});
    const response = {message:"Notes deleted " +`id:${req.body.id}`};
    res.json(response);
});


//PORT on which the backend will be running on the hosted server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log('server started: ' + PORT);
});
