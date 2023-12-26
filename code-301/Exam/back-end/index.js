// 3rd Party Dependencies
// Read the environment
require('dotenv').config();
// Mongoose!
const mongoose = require('mongoose');



// Our own dependencies
// Import my server.js file
// "server" below is ...
const server = require('./server.js');



// Make a database connection
// This is a permanent/live connection
// Active until the app stops running
// Start the database
mongoose.connect( process.env.MONGODB_URL );




// Start up the server
server.start( process.env.PORT || 3001 );
