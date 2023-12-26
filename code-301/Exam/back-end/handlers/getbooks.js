'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const Books = require('../models/books.js');

async function handleGetBooks (request, response){
    let filter = {};
    const books = await Books.find(filter)
    response.status(200).json(books);
  }

module.exports = handleGetBooks;
