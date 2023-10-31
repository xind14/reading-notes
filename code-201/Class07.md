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