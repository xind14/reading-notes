'use strict';
const Books = require('../models/books.js');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


async function handlePostBooks (request, response){
    let book = request.body;
    console.log("post request to server", book);
        if (book) {
            let postedBook = await Books.create(book);
            console.log("added to MongoDB:", postedBook);
            response.status(200).json(postedBook);
        }   else {
                throw new Error("We are unable to add the book", error.message);
        }
}

module.exports = handlePostBooks;
