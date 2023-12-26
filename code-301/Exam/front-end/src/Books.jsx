import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { If, Then, Else } from 'react-if';
import UpdateBook from './UpdateBook.jsx';

// This should actually be in .env.local
let SERVER = 'http://localhost:3000';

function Books(props) {

  const [books, setBooks] = useState([]);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const selectBook = (book) => {
    setSelectedBook(book);
  }

    //client side update
  const handleUpdateBook = async (book) => {
    console.log("Sending updated book to server", book);
    let response = await axios.put(`${SERVER}/books/${book._id}`, book);
    let updatedBook = response.data;
    console.log("From the server, the book is:", updatedBook);

    // Update the list ....
    let newBooksList = books.map(book => {
      if (book._id === updatedBook._id) { return updatedBook; }
      else { return book; }
    });

    setBooks(newBooksList);
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "name") { setName(value); }
    if (name === "breed") { setBreed(value); }
  }

  //client side create
  // Send the new Books data to the server ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Create an object that looks like a Book to send to the server
    let book = { name, breed };
    console.log("Sending Book to server", book);

    // 2. Use axios to make a POST request to the server with OBJ as body
    let response = await axios.post(`${SERVER}/books`, book);
    console.log("Server Response", response.data);

    // 3. Add the new book from the server to our state (books)
    setBooks([...books, response.data])
  }


    //client side delete
  const handleDelete = async (e) => {
    // delete the book
    console.log("Delete", e.target.id);
    let response = await axios.delete(`${SERVER}/books/${event.target.id}`)
    let book = response.data; // {}

    let newBooks = books.filter((book) => {
      return book._id !== e.target.id;
    });

    setBooks(newBooks);
  }

  // client side read
  const fetchBooks = async () => {
    const response = await axios.get(`${SERVER}/books`);
    console.log(response.data);
    setBooks(response.data);
  }

  // Runs at component 1st render (like on create)
  useEffect(() => {
    console.log("Mounted Up!");
    fetchBooks();

    return () => {
      console.log("Unmounted");
    }

  }, []);

  return (
    <>
      <p>My Books</p>

      <hr />

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Book Name" onChange={handleChange} />
        <input name="breed" placeholder="Book Breed" onChange={handleChange} />
        <button type="submit">Save Book</button>
      </form>

      <hr />

      <If condition={books.length}>
        <Then>
          <ul>
            {
              books.map(book =>
                <li key={book._id}>
                  <span style={{ cursor: "pointer" }} onClick={() => selectBook(book)}>{book.name} is a {book.breed}</span>
                  <span id={book._id} onClick={handleDelete} style={{ marginLeft: ".5em", color: "red", cursor: "pointer" }}>X</span>
                </li>
              )
            }
          </ul>
        </Then>
        <Else>
          <p>No Books Found :(</p>
        </Else>
      </If>

      <UpdateBook handleSubmit={handleUpdateBook} book={selectedBook} />

    </>
  );
}

export default Books;


import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {If, Then, Else} from 'react-if';
import UpdateDog from './UpdateDog.jsx';

// This should actually be in .env.local
let SERVER = 'http://localhost:3000';

function Dogs(props) {

  const [dogs, setDogs] = useState([]);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [selectedDog, setSelectedDog] = useState(null);

  const selectDog = (dog) => {
    setSelectedDog(dog);
  }

  const handleUpdateDog = async (dog) => {
    console.log("Sending updated dog to server", dog);
    let response = await axios.put(`${SERVER}/dogs/${dog._id}`, dog);
    let updatedDog = response.data;
    console.log("From the server, the dog is:", updatedDog);

    // Update the list ....
    let newDogsList = dogs.map( dog => {
      if( dog._id === updatedDog._id ) { return updatedDog; }
      else { return dog; }
    });

    setDogs( newDogsList );
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if( name === "name" ) { setName(value); }
    if( name === "breed" ) { setBreed(value); }
  }

  // Send the new Dogs data to the server ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Create an object that looks like a Dog to send to the server
    let dog = { name, breed };
    console.log("Sending Dog to server", dog);

    // 2. Use axios to make a POST request to the server with OBJ as body
    let response = await axios.post( `${SERVER}/dogs`, dog);
    console.log( "Server Response", response.data );

    // 3. Add the new dog from the server to our state (dogs)
    setDogs( [...dogs, response.data])
  }

  const handleDelete = async (e) => {
    // delete the dog
    console.log("Delete", e.target.id);
    let response = await axios.delete(`${SERVER}/dogs/${event.target.id}`)
    let dog = response.data; // {}

    let newDogs = dogs.filter( (dog) => {
      return dog._id !== e.target.id;
    });

    setDogs(newDogs);
  }

  const fetchDogs = async () => {
    const response = await axios.get(`${SERVER}/dogs`);
    console.log(response.data);
    setDogs(response.data);
  }

  // Runs at component 1st render (like on create)
  useEffect( () => {
    console.log("Mounted Up!");
    fetchDogs();

    return () => {
     console.log("Unmounted");
    }

  }, []);

  return (
    <>
      <p>My Dogs</p>

      <hr />

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Dogs Name" onChange={handleChange} />
        <input name="breed" placeholder="Dog Breed" onChange={handleChange} />
        <button type="submit">Save Dog</button>
      </form>

      <hr />

      <If condition={dogs.length}>
        <Then>
          <ul>
            {
              dogs.map( dog =>
                <li key={dog._id}>
                  <span style={{cursor:"pointer"}} onClick={ () => selectDog(dog) }>{dog.name} is a {dog.breed}</span>
                  <span id={dog._id} onClick={handleDelete} style={{ marginLeft:".5em", color:"red", cursor:"pointer"}}>X</span>
               </li>
             )
            }
          </ul>
        </Then>
        <Else>
          <p>No Dogs Found :(</p>
        </Else>
      </If>

      <UpdateDog handleSubmit={handleUpdateDog} dog={selectedDog} />

    </>
  );
}

export default Dogs;
