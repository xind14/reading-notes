'use strict';
const Books = require('../models/books.js');
// const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

async function handleUpdateBooks (request, response){
    let id = request.params.id;
    let book = request.body;
    console.log("update request at server", id);
        if (id) {
            let updatedBook = await Books.findByIdAndUpdate(id, book, {new: true, overwrite: true});
            console.log("updated MongoDB:", updatedBook);
            response.status(200).json(updatedBook);
        } else {
            throw new Error("We are unable to update the book", error.message);
        }
}

module.exports = handleUpdateBooks;

