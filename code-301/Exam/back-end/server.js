
'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const handleGetBooks = require('./handlers/getbooks.js')
const handlePostBooks = require('./handlers/postbooks.js')
const Books = require('./models/books.js');
const handleDeleteBooks = require('./handlers/deletebooks.js');
const handleUpdateBooks = require('./handlers/putbooks.js');

const app = express();
app.use(cors());
app.use(express.json());

//route, callback function
app.get ('/books', handleGetBooks);
app.get('/', (request, response) => {
  response.send('home page')
})
app.get('/test', (request, response) => {
  response.send('test request received')
})
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.post ('/books', handlePostBooks);
app.delete ('/books/:id', handleDeleteBooks);
app.put ('/books/:id', handleUpdateBooks);

const server = {
  start: function(PORT){
    app.listen(PORT, () => console.log(`listening on ${PORT}`));

  }
}

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

module.exports=server;








'use strict';

// require('dotenv').config(); in index.js
// 3rd Party Dependencies
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose'); in index.js

// Esoteric Dependencies
const Books = require('./models/Book.js');

// Setup and Configure Express
const app = express();
app.use(cors());

// Teaches express how to parse/consume/translate information from a post or put request
app.use( express.json() );

// const PORT = process.env.PORT || 3001;  in index.js



// "/" is the "default" or "home page" route
app.get('/', (request, response) => {
  response.send('Home Page');
});

// "/test" is a proof of life route
app.get('/test', (request, response) => {
  response.send('test request received')
});

app.post('/books', handleAddBook )

async function handleAddBook(request, response) {
  let book = request.body;
  console.log("Adding", book);

  let addedBook = await Books.create( book );
  console.log('Mongo added:', addedBook);

  // Add this to the DB
  response.json(addedBook);
}

app.get('/books', async (request, response) => {
  const books = await Books.find();
  response.json(books);
});

app.delete('/books/:id', async (request, response) => {
  let id = request.params.id;
  console.log('Deleting', id);
  // BAD: let deletedBook = await Books.findOneAndDelete(id);
  let deletedBook = await Books.findOneAndDelete({_id:id});
  // GOOD: let deletedBook = await Books.findByIdAndDelete(id);
  console.log("deleted", deletedBook);
  response.status(204).send({});
});

// mongoose.connect( process.env.MONGODB_URL ); in index.js

app.listen(PORT, () => console.log(`listening on ${PORT}`));










'use strict';

// 3rd Party Dependencies
const express = require('express');
const cors = require('cors');

// Esoteric Dependencies
const Books = require('./models/books.js');
const Book = require('./models/books.js');

// Setup and Configure Express
const app = express();
app.use(cors());
// Teaches express how to parse/consume/translate information from a post or put request
app.use(express.json());

// Routes
// --------------------------------

// PROOF OF LIFE ROUTES
app.get('/', handleHomePage);
app.get('/test', handleTest);

// CRUD ROUTES! in server to connect and make changes to DB
app.get('/books', handleGetBooks);
app.post('/books', handleAddBook);
app.delete('/books/:id', handleDeleteBook);
app.put('/books/:id', handleUpdateBook);

// Route Handler Functions ... how changes in DB are made
// --------------------------------

function handleHomePage(request, response) {
  response.send("Welcome to the server");
}

function handleTest(request, response) {
  response.send('test request received');
}

async function handleAddBook(request, response) {
  let book = request.body;
  console.log("Adding", book);

  let addedBook = await Books.create(book);
  console.log('Mongo added:', addedBook);

  // Add this to the DB
  response.json(addedBook);
}

async function handleGetBooks(request, response) {
  const books = await Books.find();
  response.json(books);
  //request.query
}

async function handleDeleteBook(request, response) {
  let id = request.params.id;
  console.log('Deleting', id);
  // BAD: let deletedBook = await Books.findOneAndDelete(id);
  let deletedBook = await Books.findOneAndDelete({ _id: id });
  // GOOD: let deletedBook = await Books.findByIdAndDelete(id);
  console.log("deleted", deletedBook);
  response.status(204).send({});
}

async function handleUpdateBook(request, response) {
  // Call on our Book Model to do a "put" or an in-place update
  let book = request.body;
  let id = request.params.id;

  const updatedBook = await Books.findByIdAndUpdate(id, book, { new: true, overwrite: true });

  response.json(updatedBook);
}

// Server Mechanism
// --------------------------------

function startServer(port) {
  app.listen(port, () => console.log(`listening on ${port}`));
}

module.exports = { start: startServer };
