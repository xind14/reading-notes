# Class 7 - HTML Tables and JS Constructor Functions

## Lab 7 - Salmon Cookies Pt. 2

## Setup

1. Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

2. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

3. Replace the lists of your data for each store and build a single table of data instead. Break each column by the hour (6am - 7pm) and complete each row (Seattle, Tokyo, Dubai, Paris, Lima, Totals) with a “Daily Location Total”

4. Each cookie stand location should have a separate render() method that creates and appends its row to the table

5. The header row and footer row are each created in their own stand-alone function
    - NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

6. Developer Style Guide:
    - Good use of a constructor function; style and syntax are correctly implemented

    - Duplicate code has been removed and DRY principles are evident
    - Working on a non-main branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

## Written Class Notes

Objects Review
Properties: nouns or "Has"
Methods: verbs or "Can"

        Home HTML
        <!DOCTYPE html>
        <html>
            <head>
                <title>Code Review</title>
                <link rel="stylesheet" href="css/reset.css" />
                <link rel="stylesheet" href="css/style.css" />
            </head>
            <body>

            <header>
                <h1>Pats Salmon Cookies</h1>
                <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sales.html">Sales</a></li>
                </ul>
                </nav>
            </header>

            <main>
                <div id="root">
                <section class="hero">
                    <img src="images/salmon.png" />
                </section>
                </div>
            </main>

            <footer>
                &copy; 2023 John
            </footer>

            <script src="home.js"></script>
            </body>
        </html>

    Home JS
    // DOM: Document OBJECT Model
    // Objects:
    //   Key/Value Pairs
    //   properties: Nouns or "Has"
    //   methods: Verbs or "Can"

    // Create a store object
    // NOTE: seattle.phoneNumbers[0] is "main"
    // These stores can "render" themselves ... "component"
    // NOTE: Both have the same render method
    //       this is not very "DRY"
    //       "Don't Repeat Yourself"
    //       sales.js and the sales.html does this differently...

    const seattle = {
    name: "Seattle",
    phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
    render: function() {
        // Looks for any element with an id="root", i.e.
        // <section id="root">
        const rootElement = document.getElementById("root");

        // Create a new, empty section for a store
        const storeSection = document.createElement("section");
        storeSection.classList.add("location")
        rootElement.appendChild(storeSection);

        const firstTitle = document.createElement("h2");
        // Give it some content
        firstTitle.textContent = this.name;
        // Add it to the page, as a child of rootElement
        storeSection.appendChild(firstTitle);

        // Add a unordered list to show the address...
        const storeDataList = document.createElement("ul");
        storeSection.appendChild(storeDataList);

        // Put the phone numbers in the UL
        for( let i=0; i<this.phoneNumbers.length; i++ ) {
        const phoneItem = document.createElement('li');
        // Add the actual number, from the store object
        phoneItem.textContent = this.phoneNumbers[i];
        // Append that to the UL
        storeDataList.appendChild(phoneItem);
        }
    }
    }

    const tokyo = {
    name: "Tokyo",
    phoneNumbers: ["Main: 333-1212", "Fax: 333-6363"],
    render: function() {
        // Looks for any element with an id="root", i.e.
        // <section id="root">
        const rootElement = document.getElementById("root");

        // Create a new, empty section for a store
        const storeSection = document.createElement("section");
        rootElement.appendChild(storeSection);

        const firstTitle = document.createElement("h2");
        // Give it some content
        firstTitle.textContent = this.name;
        // Add it to the page, as a child of rootElement
        storeSection.appendChild(firstTitle);

        // Add a unordered list to show the address...
        const storeDataList = document.createElement("ul");
        storeSection.appendChild(storeDataList);

        // Put the phone numbers in the UL
        for( let i=0; i<this.phoneNumbers.length; i++ ) {
        const phoneItem = document.createElement('li');
        // Add the actual number, from the store object
        phoneItem.textContent = this.phoneNumbers[i];
        // Append that to the UL
        storeDataList.appendChild(phoneItem);
        }
    }
    }


    seattle.render();
    tokyo.render();

    Sales HTML
    <!DOCTYPE html>
    <html>
        <head>
            <title>Code Review</title>
            <link rel="stylesheet" href="css/reset.css" />
            <link rel="stylesheet" href="css/style.css" />
        </head>
        <body>

        <header>
            <h1>Pats Salmon Cookies</h1>
            <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="sales.html">Sales</a></li>
            </ul>
            </nav>
        </header>

        <main>
            <div id="root">
            </div>
        </main>

        <footer>
            &copy; 2023 John
        </footer>

        <script src="sales.js"></script>
        </body>
        </html>

    Sales JS
    // DOM: Document OBJECT Model
    // Objects:
    //   Key/Value Pairs
    //   properties: Nouns or "Has"
    //   methods: Verbs or "Can"

    // Create a store object
    // NOTE: seattle.phoneNumbers[0] is "main"
    // These stores can "render" themselves ... "component"

    let hours = ["6am", "7am", "8am"];

    const seattle = {
    name: "Seattle",
    phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averageCookies: 6.3,
    estimatedSales: [],
    render: function() {
        renderStore(this);
    },
    estimate: function() {
        this.estimatedSales = estimate(this);
    }
    }

    const tokyo = {
    name: "Tokyo",
    phoneNumbers: ["Main: 333-1212", "Fax: 333-6363"],
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    averageCookies: 1.2,
    estimatedSales: [],
    render: function() {
        renderStore(this);
    },
    estimate: function() {
        this.estimatedSales = estimate(this);
    }
    }


    function random(min,max) {
    return Math.floor( Math.random() * (max-min+1)) + min;
    }

    // Based on the min/max and average
    // return an array of estimated sales per hour
    function estimate(store) {
    let estimatedSales = [];
    // loop over the hours array
    // for each, do the math and add that to the estimated sales
    for( let i=0; i < hours.length; i++ ) {
        const numCustomers = random( store.minCustomersPerHour, store.maxCustomersPerHour);
        const hourlySales = Math.ceil(numCustomers * store.averageCookies);
        estimatedSales.push( hourlySales );
    }
    return estimatedSales;
    }

    function renderStore( store ) {

    console.log("In the renderStore(), store is: ", store);

    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");

    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    // Give it some content
    firstTitle.textContent = store.name;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(firstTitle);

    // Add a unordered list to show the address...
    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    // Put the estimates in the UL
    let total = 0;
    for( let i=0; i < hours.length; i++ ) {
        total += store.estimatedSales[i];
        const est = document.createElement('li');
        // Add the actual number, from the store object
        est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
        // Append that to the UL
        storeDataList.appendChild(est);
    }

    const totalElement = document.createElement('li');
    totalElement.textContent = `Total: ${total}`;
    storeDataList.appendChild(totalElement);

    }


    // Way #1
    seattle.estimate();
    seattle.render();

    tokyo.estimate();
    tokyo.render();

    // Way #2
    // Make an array of stores and loop them.

    // Call the render function with different objects
    // let stores = [ seattle, tokyo ];

    // // Loop over the stores
    // for( let i=0; i < stores.length; i++ ) {
    //   stores[i].estimate();
    //   stores[i].render();
    // }




Constructors In Class Demo

    Object={}="POJO" Plain old JS Object like john={hair:false, ....}

    (Object name is capitalized so developers can identify it is being used as a constructor)
    function Car(1,2,3,4){
    this.engine=1
    this.color=2
    this.interior=3
    this.power=4
    }
    let johnsCar=newCar (1.1,2.1,3.1,4.1)
    let cathyCar=newCar(1.2,2.2,3.2,4.2)

    HTML

    <!DOCTYPE html>
    <html>
        <head>
            <title>Code Review</title>
            <link rel="stylesheet" href="css/reset.css" />
            <link rel="stylesheet" href="css/style.css" />
        </head>
        <body>

      <header>
        <h1>John's Dogs</h1>
      </header>

      <main>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Is Good With People</th>
              <th>Is Good With Dogs</th>
              <th>Is Good With Cats</th>
            </tr>
          </thead>

          <tbody id="dogs">
            <!-- DOGS RENDER IN HERE .... -->
          </tbody>

          <tfoot>
          </tfoot>
        </table>

        <div id="root">
        </div>
      </main>

      <footer>
        &copy; 2023 John
      </footer>

      <script src="dogs.js"></script>
    </body>
    </html>

    JS
    let isGoodWithTitles = ["People", "Dogs", "Cats"];

    // Define a class called "Dog" using a constructor function
    function Dog( name, breed, isGoodWithPeople, isGoodWithDogs, isGoodWithCats ) {
    this.name = name;
    this.breed = breed;
    this.isGoodWith = [ isGoodWithPeople, isGoodWithDogs, isGoodWithCats ];
    }

    // Prototype method of the Dog Constructor
    // All instances can call it natively and "this" is in context
    Dog.prototype.walk = function() {
    console.log(`${this.name} is Jogging`);
    }

    Dog.prototype.render = function() {

    /*
    This used to draw the whole table ....
    But we don't need that, because we declared it in the markup

    let rootElement = document.getElementById("root");
    let dogContainer = document.createElement("section");
    dogContainer.classList.add('dog');
    rootElement.appendChild(dogContainer);

    let nameElement = document.createElement("h2");
    nameElement.textContent = this.name;
    dogContainer.appendChild(nameElement)

    let table = document.createElement("table");

    let header = document.createElement("thead")
    let headerRow = document.createElement("tr");
    header.appendChild(headerRow);

    headerName = document.createElement('th');
    headerName.textContent = "Name";
    headerRow.appendChild(headerName);

    headerBreed = document.createElement('th');
    headerBreed.textContent = "Breed";
    headerRow.appendChild(headerBreed);

    For each of the "is good with", and a header cell
    for( let i = 0; i < isGoodWithTitles.length; i++ ) {
        let cell = document.createElement("th");
        cell.textContent = isGoodWithTitles[i];
        headerRow.appendChild(cell);
    }
     let table = document.createElement("table");
    let body = document.createElement("tbody");

    dogContainer.appendChild(table);
    table.appendChild(header);
    table.appendChild(body);
    table.appendChild(footer);
    */

    let body = document.getElementById("dogs");
    let dogRow = document.createElement('tr');
    body.appendChild(dogRow);

    let nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    dogRow.appendChild(nameCell);

    let breedCell = document.createElement('td');
    breedCell.textContent = this.breed;
    dogRow.appendChild(breedCell);

    for( let i = 0; i < this.isGoodWith.length; i++ ) {
        let cell = document.createElement("td");
        cell.textContent = this.isGoodWith[i].toString(); (boolean wont render so need to turn into string)
        dogRow.appendChild(cell);
    }

    }

    let geno = new Dog("Geno", "Pit Bull", false, false, false);
    let rosie = new Dog("Rosie", "Lab", true, true, false);



    geno.render();
    rosie.render();

    // try rendering from that array instead of 1 by 1
    let alldogs = {
    dogs: [geno, rosie]
    }
    // How do I do the totals across the <tfoot> ???


    HTML Table <table>
    header <thead>
    header cells <th>
    body <tbody>
    row <tr> (table row)
    cell <td>
    footer <tfoot>

    <table>
    <thead>
    <tr>
    <th>name
    <th>age
    <tbody>
    <tr>
    <td>John

    <tr>
    <td>cathy
    <tfoot>
    <tr>
    <td> all of us
    <td>sum of age



    header {
      background: #111;
      color: salmon;
      text-align: center;
    }

    header h1 {
      font-size: 40px;
      font-weight: bold;
      padding: .5em 0;
    }

    header nav {
      background: salmon;
      padding: .25em;
      text-align: left;
    }

    header nav li {
      display:inline-block;
    }

    header nav li a {
      color: #111;
      text-decoration: none;
    }

    main {
      margin: 2em;
    }

    .hero img{
      max-width: 100%;
    }

    .location {
      margin: 1em 0;
    }

    h2 {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: .5em;
    }

    section li {
      margin-left: 1.5em;
    }

    footer {
      background: #ccc;
      padding: 1em;
      text-align: center;
    }


    table * {
      border: 1px solid #111;
      padding: .5em;
    }

    table thead {
      background: silver;
    }

    table tbody td {
      background: #111;
      color: ivory;
    }

    table tfoot {
      background: greenyellow;
    }


### Describe and Define

- Constructor functions
- JavaScript "prototypal inheritance"
- HTML `<table>` tag structure and usage


### Answer

1. What is a Constructor function?

2. How does the term `this` differ when reference an object literal versus a Constructor function?

3. What are some HTML elements that make up an HTML table?


## Read 7 - Object-Oriented Programming, HTML Tables

## Resources Link/Pages

Bookmark and Review: [HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)

### Domain Modeling

1. [Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)

### HTML Table Basics

1. [HTML Table Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

### Introducing Constructors

1. [Introducing Constructors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)

### Object Prototypes Using A Constructor

1. [Object Prototypes Using A Constructor](https://ui.dev/beginners-guide-to-javascript-prototype)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- Domain modeling analyzes a problem domain and creates a structure model that developers can work with. Tables are important to learn because they display data in a structural way. Constructors and prototypes are important concepts in JS that allow the creation of reusable code.

### Domain Modeling

1. Explain why we need domain modeling.
    - It details the problem domain by creating a structure that can be understood by non-technical people. This helps in effectively building that communication and tries to eliminate tech jargon. It also helps developers create reusable code that is easy to maintain and improve on later for future enhancements.

### HTML Table Basics

1. Why should tables not be used for page layouts?
    - They are not semantic and shouldn't be used to structure a visual layout. That is what CSS is for. Tables for layouts can decrease accessibility because it can confuse screen readers, they get too complicated and hard to maintain because changes require modification to multiple cells and rows, and tables do not adapt to different screen sizes.

2. List and describe 3 different semantic HTML elements used in an HTML `<table>`.
    - `th`: the element that defines a header in a table for columns or rows. They are bold and centered by default
    - `tbody`: the element that holds the content in a table.
    - `thead`: the element that holds header content in a table

### Introducing Constructors

1. What is a constructor and what are some advantages to using it?
    - A function that is called using the `key` keyword and it creates a new object, binds `this` to the new object so you can refer back to it. It create objects with shared methods and properties.
    - Advantages:
        - Multiple objects can be created using the same constructor so you don't need to write the same code again.
        - They help code organization by grouping relevant data and functions together.
        - It makes sure your objects start with the right values

2. How does the term `this` differ when used in an object literal versus when used in a constructor?
    - `Object literal this`: when used in the objects methods, `this` is referring to the object itself. It is saying `this object` or `the object you are working with right now`
    - `Constructor this`: in a constructor function `this` refers to the different kinds of objects the constructor is making.

### Object Prototypes Using A Constructor

1. Explain prototypes and inheritance via an analogy from your previous work experience.
    - NOTE: This is a very common front end developer interview question
    - I did have a receptionist training manual made, which would be the prototype. It had all the info and responsibilities a receptionist needed to do and how to do those steps. Inheritance would be a new hire using that manual to learn. They inherit the tasks in the manual.


    - `Prototype`: Objects in JS have a prototype, which is an object from which it inherits properties. Prototype inheritance allows objects to inherit properties and methods from other objects, creating a hierarchy of objects. Methods and properties that are meant to be shared are added to the constructor function's `prototype` property.

## Things I want to know more about

- About the bookmark and review reading, I just want to know how to start keeping accessibility in mind every time I write code, so it isn't an after thought and I need to go back to revise every time.

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

Motivation and goals are an important part of adult learning; so is adapting to and gaining insight from things you did not anticipate. What would you say is the most unexpected part of this experience, and how have you learned from it?

- The most unexpected part so far is that I was not prepared for the intensity of it. I knew though a few months to learn coding was already too short because there is just so much to learn, and I knew it was an intensive bootcamp, but I still was not ready for it. There is just so much homework that I don't have time for myself sometimes which is fine. I'm also surprised I can keep up with the pace so far. I'm liking the new concepts learned in week two so far.
