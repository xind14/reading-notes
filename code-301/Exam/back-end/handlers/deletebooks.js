'use strict';
const Books = require('../models/books.js');
// const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

async function handleDeleteBooks (request, response){
    let id = request.params.id;
    console.log("delete request at server", id);
        if (id) {
            let deletedBook = await Books.findByIdAndDelete(id);
            console.log("deleted from MongoDB:", deletedBook);
            response.status(204).send({});
        } else {
            throw new Error("We are unable to add the book", error.message);
        }
}

module.exports = handleDeleteBooks;
