# Class 11 - MongoDB, Mongoose and Data Modeling

## Lab 11 - Can of Books App, Building CRUD apps with MongoDB

## Setup

Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. Throughout this module, you’ll create a small app to track what books have impacted you, and what’s recommended to read next.

Web applications essentially all work by managing data related to “resources”. The resources that an app cares about can be just about anything: a product for sale, an uploaded photo, a review, a bit of weather data… whatever it is that gets stored in a database. When the app provides the interface to create, read, update, and delete a resource, we refer to that as a CRUD app. Over the next few labs, you will build an app that has books as a resource.

For this assignment, you will READ book data by connecting your front-end React app to a back-end Express server. Your Express server will connect to a MongoDB database. You will need to make a “schema” in your back-end code to model how you want your data to look. You will then populate your database with “seed” data—some of your favorite books. When the front end makes a request to your server, your server will query the database and respond with all of the results from the database. Your front end will display these results.

**Resources**

[Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)

**Process**

When working with a partner, take at least 30 minutes to make a team agreement before starting on the assignment. This is an essential step to ensure a peaceful and productive module. You MUST answer the following questions in your agreement and include it in your README’s “Collaboration” section:

**Logistical**

1. What hours will you be available to communicate?
1. What platform will you use to communicate (ie. Slack, phone …)?
1. How often will you take breaks?
1. What is your plan if you start to fall behind?

**Cooperative**

1. Make a list of each parson’s strengths.
1. How can you best utilize these strengths in the development of your application?
1. In what areas do you each want to develop greater strength?
1. Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?

**Conflict Resolution**

1. What will your team do if one person is pulling all the weight while the other person is not contributing?
1. What will your team do if one person is taking over the project and not letting the other member contribute?
1. How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?
1. Feature Tasks — READ of CRUD

   - Tasks for this lab are tracked in user stories on a Trello board.

1. Your instructor will supply you with a link to the Trello board for you to copy (see instructions below).

**Workflow**

1. We will be using the Trello project management tool for the duration of this project.
2. After signing in to your account, go to the [Can of Books Trello board](https://trello.com/b/ns9ZCHQL/module-3-can-of-books)
   Open the “… Show Menu” link, click the “… More” link, and then click “Copy Board”.
3. Before you create it, be sure to “Change” from Private to “Public” (and click “Yes, Make Board Public”) so your instructional team can see your work. Now, click “Create” to add a copy to your personal account.
4. This Trello board contains all of the features required to complete this lab assignment.
5. Review the user stories and analyze the feature requests and requirements in the lab.
   Within each story, note the acceptance criteria (“Given … When … Then…”) and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
6. Throughout the lab time, check off tasks as you complete them, and move the story cards through the workflow.

**Documentation**

Your README.md must include:

# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

**Time Estimates**

For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Name of feature: **************\_\_\_\_**************

Estimate of time needed to complete: **\_**

Start time: **\_**

Finish time: **\_**

Actual time needed to complete: **\_**

Add this information to your README.

**Submission Instructions**

1. Complete your Feature Tasks for the lab, according to the Trello cards.

1. Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
1. Create a PR back to the main branch of your repository, showing ALL your work, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
   - A link to the deployed version of your latest code.
   - A link to your public Trello board.
   - A question within the context of this lab assignment.
   - An observation about the lab assignment, or related ‘Ah-hah!’ moment.
   - How long you spent working on this assignment.

## Code Challenge - Includes, Every, Substring, charAt

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-11/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-11/challenges/DEMO.html)

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called strings
   git checkout -b strings

2. Retrieve the code challenge from the system
   npm run get-challenge 11

3. In your terminal, from the javascript folder, run npm test 11 to execute the tests in this file for this challenge.

4. At this point you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.

5. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!

6. Write code to make the tests pass, one at a time. Let the error messages guide you.

7. Once the test is passing, refactor as needed, then move on to the next challenge.

8. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress

Submission
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

Compass MongoDB

local host 27017
connect do db, create schema,

in terminal type use pets to switch to database db.dogs.find({hair:'white'})

1. connect to db mongo
2. create a schema
   - mongoose
   - api to let us crud in mono
3. seed the db
   - adding some da ta
4. create a server
5. create an app/react

6. Backend

   - env
     - MONGODB_URL: mongodb://localhost:27017
     - PORT = 3000
   - npm install express dotenv cors mongoose
   - package json in script start: "node index.js"
   - in models/dogs.js
     - const mongoose = require("mongoose");
     - const dogSchema = new mongoose.Schema ({
       hair: String,
       tail: Boolean,
       breed: String,
       name: String,
       });
   - in MONGODB_URL: mongodb://localhost:27017 add /name of db
   - seed need to connect to DB and use the schema
     - //This dogs ends up being a constructor/class based on that schema
       - const Dog = mongoose.model('Dog, dogSchema')
       - export dogs.js into seed.js
     - node seed.js
   - inside compass at the bottom mongosh terminal:
     - use pets enter
     - db.pets.find();
     - db.dogs.find();
     - db.dogs.find({hair:"white"})
     - db.books.find({title:"Book 1"})
   - create server that fetches data from db
     - in server.js: get access to dogs schema, to get dogs: app.get('./dogs, handleGetDogs), async function handleGetDogs
     - in index: const require dotenv, const mongoose, server = require ('./server.js); server.start(process.enb.PORT||3000)
     - seed file brought in Dogs to save and server bring in dogs to get
     - use localhost:300/dogs to check
   - review:
     - index.js is entry point, require: dotenv, mongoose (talks to db), require server.js, connect to db, start server app

7. front end
   - nom create vite#latest front-end, npm install axios
     = env.local: VITE_APP_SERVER http://localhost:3000 or render.com url
   - create repo on GH empty
   - git init, git remote add origin, git add . git commit,
   - ise key={dob.\_id}
   - new components folder with Dogs.jsx, import it in App.jsx
   - go to render.com: get compass link, new webservie on render, env var = mongodb_url paste compass link
   - get render.com link got to netlifiy, import from GH, key = VITE_SERVER and the link

## Read 11 - Readings Overview

## Resources Link/Pages

**Bookmark and Review**

- [mongoose api](<https://mongoosejs.com/docs/api/model.html#Model()>)

- [React Router](https://reactrouter.com/en/6.20.0/web/api/BrowserRouter)

### nosql vs sql

1. [nosql vs sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

### sql vs nosql (Video)

1. [sql vs nosql (Video)](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Databases provide a structured way to store and organize data and as your application grows, the amount of data it handles also increases.

### nosql vs sql

1. Fill in the chart below with five differences between SQL and NoSQL databases:

| SQL                            | NoSQL                                                                   |
| ------------------------------ | ----------------------------------------------------------------------- |
| Primarily Relational Databases | Primarily non-relational or distributed databases                       |
| Defining and manipulating data | Queries focused on collections of documents                             |
| Table-based databases          | Document-based, key-value pairs, graph databases, or wide-column stores |
| Vertically scalable            | Horizontally scalable                                                   |
| Predefined schema              | Dynamic schema for unstructured data                                    |

1. What kind of data is a good fit for an SQL database?
   - Structured and well-defined data, like financial data, customer information, and inventory data.
1. Give a real world example.
   - Maybe like online stores for storing and managing customer information, including contact details, purchase history, and support interactions in a structured manner.
1. What kind of data is a good fit a NoSQL database?
   - Unstructured or semi-structured data, hierarchical data, and scenarios requiring horizontal scalability. Like social media data, sensor data, and user-generated content.
1. Give a real world example.
   - Maybe newspaper outlets for storing and managing diverse content types (articles, images, videos) in a flexible document-oriented format.
1. Which type of database is best for hierarchical data storage?
   - NoSQL due to their flexible and dynamic schema.
1. Which type of database is best for scalability?
   - NoSQL for horizontal scalability, where you can add more servers to handle increased load.

### sql vs nosql (Video)

1. What does SQL stand for?
   - Structured Query Language.
1. What is a relational database?
   - Type of database that organizes data into tables with rows and columns. It establishes relationships between these tables based on common fields.
1. What type of structure does a relational database work with?
   - Tabular format where data is organized into tables with predefined columns and data types.
1. What is a ‘schema’?
   - Blueprint or structure that defines the organization of data in a database, including tables, fields, and relationships.
1. What is a NoSQL database?
   - Type of database management system that does not rely on the traditional relational database model. It is designed to handle unstructured or semi-structured data.
1. How does it work?
   - For example: MongoDB, a NoSQL database, data is organized into collections rather than tables. Collections contain documents, which are similar to JSON-like objects.
1. What is inside of a MongoDB database?
   - Collections that store documents. Each document is a set of key-value pairs and may have a different structure from other documents in the same collection.
1. Which is more flexible - SQL or MongoDB? and why.
   - NoSQL considered more flexible than SQL because it is schema-less. This means that different documents in the same collection can have different structures, allowing for greater flexibility in handling diverse data.
1. What is the disadvantage of a NoSQL database?
   - It lacks the structured querying capabilities and relationships found in SQL databases. This can make complex queries or data retrieval involving multiple collections more challenging in a NoSQL environment.

## Things I want to know more about

- From what I understand of Cache, what if you just set the time stamp to a really long time will that sorta be the same as databases?

## Retrospective

Retrospectives are a critical part of Agile, and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
2. What did I learn today?
3. What should I do differently next time?
4. What still puzzles me, or what do I need to learn more about?
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
   - Do not get bogged down in written analysis; instead, focus on capturing the moment with an eye toward how your observations can guide you toward future productivity.
