# Setup Your Laptop for Code 301

## MongoDB Database

MongoDB is a NoSQL Database (Document Store) server that we will be using throughout Code 301. In this step, we’ll be installing MongoDB on your system and preparing it for use.

MongoDB comes in 2 parts, a client and a server … the server runs constantly, waiting for clients to connect to it so that they can store and retrieve data. The server does the actual management of the data. You’ll get much deeper into the inner workings of these during your coursework.

## Installation

The installation steps are slightly different if you’re running a Mac or Windows/Linux. Please follow the appropriate directions below.

### Mac Users

Open your terminal, and run the following commands to install the MongoDB client and server.

This will take a short time to complete. Once it does, you’ll need to “start” the mongo database server so that we can make sure clients can connect.

`brew tap mongodb/brew
brew install mongodb-community`

After installation completes, run the following command to start the MongoDB Server:

`brew services start mongodb-community`

## Validate that clients can connect

Now, let’s make sure we can connect to the MongoDB server. Run this command:

`mongosh`
You should see something similar to the following:

`Current Mongosh Log ID: 63604c9f419a468d5c5fd283
Connecting to:  mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4
Using MongoDB:  6.0.0
Using Mongosh:  1.5.4

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

>`

The `>` at the bottom is what you’re really looking for. It’s a prompt that lets you know you are connected with the **mongosh client** to your running **MongoDB server**

Take a screen shot of your terminal when you type in `mongosh`. You will submit this screen shot along with your other computer set-up screen shots for this assignment.

Type `exit` to return to your bash shell. MongoDB is successfully installed.

![Screenshot of Mongosh](img/mongosh.png)

## Data Structures and Algorithms

As part of your daily routine in 301, you will be executing a code challenge. To do so properly requires a specific repository, properly setup. In this repository, you will complete your daily work.

Please follow these steps:

1. [Click Here](https://github.com/codefellows/data-structures-and-algorithms/generate) to create a new repository, based on the official DS&A template.
    - Name this repository exactly: `data-structures-and-algorithms`.
    - The description should be “Practice with Data Structures and Algorithms”.
    - **Do not check the box labeled** “Include All Branches”.
2. Clone your newly-created repository to your machine, in your projects folder.
3. `cd` into the new repo in your terminal.
4. Enter these commands, in sequence
    - `cd javascript` - to enter the javascript folder.
    - `npm install` - which will install some libraries that we’ll use to help you test out your code challenges.
    - `npm test`- which will do a trial run.
    - You should see a message like the following, indicating that things are setup properly and tests are passing:

            PASS  code-challenges/proof-of-life.test.js
              proof of life
              ✓ lives (2 ms)

            ----------|---------|----------|---------|---------|-------------------
            File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
            ----------|---------|----------|---------|---------|-------------------
            All files |       0 |        0 |       0 |       0 |
            ----------|---------|----------|---------|---------|-------------------
            Test Suites: 1 passed, 1 total
            Tests:       1 passed, 1 total
            Snapshots:   0 total
            Time:        0.892 s

5. Complete an “ACP”
    - `git add -f package-lock.json`
      - The `-f `flag is a one-time setup step for this file.
    - `git commit -m "Initialized JavaScript Challenges"`
    - `git push origin main`
6. Return to GitHub and refresh the view of your data-structures-and-algorithms repository, where you should see what you pushed
7. Go to the “Actions” tab
8. You should see a green check mark on your most recent commit, showing that your tests are passing just as they were when you ran them from the terminal

Once this process completes, you will have a freshly setup “DS&A” folder structure on your system, and sync’d to GitHub.

    What are those tests? We will cover that in lecture as well as how to use this repository on a daily basis. At this point, our goal is prove that it’s properly setup.

## ESLINT Configuration for React

When building an application with React, an `eslint` configuration file is included. To avoid conflicting linter rules, let’s remove the configuration file that you created previously.

`rm ~/.eslintrc.json`
