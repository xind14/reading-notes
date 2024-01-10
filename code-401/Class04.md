# Class 4 - Object Oriented Programming

## Lab 4 - Modeling problem domain with classes

### Overview

Today you’ll begin working on a command line utility which will mimic the functionality of a point of sale restaurant system using your basic Python tools and understanding of the basics of the language.

### Feature Tasks and Requirements

- When run, the program should print an intro message and the menu for the restaurant
- The restaurant’s menu should include appetizers, entrees, desserts, and beverages.
- The program should prompt the user for an order
- When a user enters an item, the program should print an acknowledgment of their input
- The program should tell the user how to exit
- The program’s content should match included sample exactly
- Actually, there’s one tiny spot that should be different - see if you can spot it.
- The `>` character represents user input line and should be printed out with a trailing space.

```bash
$ python snakes_cafe.py
**************************************
**    Welcome to the Snakes Cafe!   **
**    Please see our menu below.    **
**
** To quit at any time, type "quit" **
**************************************

Appetizers
----------
Wings
Cookies
Spring Rolls

Entrees
-------
Salmon
Steak
Meat Tornado
A Literal Garden

Desserts
--------
Ice Cream
Cake
Pie

Drinks
------
Coffee
Tea
Unicorn Tears

***********************************
** What would you like to order? **
***********************************
>
```

#### Entering an order

```bash
***********************************
** What would you like to order? **
***********************************
> Cake

** 1 order of Cake has been added to your meal **

> Cake

** 2 orders of Cake have been added to your meal **
```

#### Exiting

```bash
> quit
```

### Stretch Goals

- Print out a summary of the complete order.
- Only allow ordering items on the menu.
- Allow ordering items not on the menu but give a custom reply.

### Configuration

Create a project named `snakes-cafe`.

Create a `snakes_cafe.py` file inside the project folder. Note the hyphen vs. underscore

Your file structure should look like this.

```
├── snakes-cafe
│   ├── README.md
│   └── snakes_cafe.py
```

### Repository set-up

Create a repository on Github with the exact name of `snakes-cafe`.
See the Github section of Lab Submission Instructions for additional details.

### Submission Instructions

Refer to the Lab Submission Instructions for the complete lab submission process and expectations.
You may have noticed many references to Lab Submission Instructions. That’s on purpose. Getting the steps exactly right is crucial. So make sure you follow them closely.

## Code Challenge

### Reverse an Array

#### Specifications

- Read all of the following instructions carefully.
- Name things exactly as described.
- Do all your work in a public repository called data-structures-and-algorithms.
- Create a new branch in your repo called array-reverse.
- Make a directory for this challenge, named according to your language’s conventions, containing a README.md file.
- Update the “Table of Contents” - in the README at the root of the repository - with a link to this challenge’s README file.

**NOTE:** This challenge is whiteboard only. Write out code as part of your whiteboard process, but don’t worry about creating external program files.

#### Feature Tasks

Write a function called `reverseArray` which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

##### Example

| Input                                         | Output                                    |
| --------------------------------------------- | ----------------------------------------- |
| [1, 2, 3, 4, 5, 6]                            | [6, 5, 4, 3, 2, 1]                        |
| [89, 2354, 3546, 23, 10, -923, 823, -12]      | [-12, 823, -923, 10, 23, 3546, 2354, 89]  |
| [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...] | [199, 197, 193, 191, 181, ... 7, 5, 3, 2] |

#### Structure and Testing

- Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

#### Stretch Goal

Once you’ve achieved a working solution, implement the same feature with a different methodology. (Hint: what different techniques do you have when working with arrays? Recursion, loops, indexes, modifying the array input directly…) In other words, use a different algorithm & pseudocode to solve the same problem. Then compare approaches for efficiency, readability, flexibility, etc.

#### Submission Instructions

- Work within the proper folder structure for your language, and as dictated by the challenge instructions.
- Create a new README for this challenge, using the README TEMPLATE provided.
- Embed an image of your completed whiteboard, matching the example whiteboard layout.
- In addition to whiteboard drawing, optionally complete the code written on your whiteboard, along with a proper suite of tests.
- Try giving your algorithm to a chatbot and see if it can produce working code and tests.
- Create a pull request from your branch to the main branch.
- In your open pull request, comment with the following checklist of tasks:

  - [ ] Top-level README “Table of Contents” is updated.
  - [ ] README for this challenge is complete.
    - [ ] Summary, Description, Approach & Efficiency, Solution.
    - [ ] Picture of whiteboard.
    - [ ] Link to code.
  - [ ] Feature tasks for this challenge are completed.
  - [ ] Unit tests written and passing.
    - [ ] “Happy Path” - Expected outcome.
    - [ ] Expected failure.
    - [ ] Edge Case (if applicable/obvious).

- Submit your completed work:
  - Copy the link to your open pull request and paste it into the assignment submission field.
  - Leave a description of how long this assignment took you in the comments box.
  - Add any additional comments to your grader about your process or any difficulties you may have had with the assignment.
- Merge your branch into main, and delete your branch (don’t worry, the PR link will still work).

## Written Class Notes

## Read 4 - Object Oriented Programming

## Resources Link/Pages

- [Classes and Objects](https://www.learnpython.org/en/Classes_and_Objects)
- [Thinking Recursively](https://realpython.com/python-thinking-recursively/) Optional: Naive Recursion is Naive section and beyond
- [Pytest Fixtures and Coverage](https://www.linuxjournal.com/content/python-testing-pytest-fixtures-and-coverage)

**Bookmark and Review**

- [Pytest Fixtures](https://docs.pytest.org/en/latest/fixture.html)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:


Classes and objects are used for structuring code and managing data effectively, while recursion introduces a problem-solving approach. Combining this with an understanding of fixtures and coverage in testing enhances code organization and maintainability.

## Reading Questions

1. What are the key differences between classes and objects in Python, and how are they used to create and manage instances of a class?

   - `classes`: a template or blueprint that has attributes (variables) and methods (functions). They define the structure and behavior of objects.
   - `objects`: instances of classes, created from these templates. They encapsulate variables and functions into a single entity, embodying the characteristics defined by the class.
   - Creating and managing instances of a class
     - Objects are created by instantiating a class, forming individual instances. Example:` myobjectx = MyClass()`
     - Object notation (`myobjectx.myvariable`) is used to access variables within an object. Functions within an object are invoked similarly `(myobjectx.myfunction())`.
     - Multiple objects can be created from the same class, allowing the instantiation of multiple instances. Each object maintains independent copies of class variables.

2. Explain the concept of recursion and provide an example of how it can be used to solve a problem in Python. What are some best practices to follow when implementing a recursive function?

   - Recursion involves a function calling itself during its execution. It offers an elegant solution for solving complex problems by breaking them down into simpler instances.
   - Example from reading:

     ```
     def factorial_recursive(n):
     if n == 1:
         return 1
     else:
         return n * factorial_recursive(n-1)
     ```

   - Best practices:
     - Include a base case in recursive functions to establish a termination condition and prevent infinite recursion.
     - Thread the state through recursive calls or use global scope to maintain context.

3. What is the purpose of pytest fixtures and code coverage in testing Python code? Explain how they can be used together to improve the quality and maintainability of a project.

   - `fixtures`: objects or setups shared across multiple tests, enhancing test setup flexibility.
     - Mentioned in a test's parameter list, providing a consistent setup for each test.
   - `coverage`: assesses the thoroughness of testing by identifying which parts of the code are executed during tests.

     - use `pytest-cov` package to integrate code coverage into pytest.- Run tests with the `--cov` option, specifying the program to be tested.

   - Use together to improve the quality and maintainability of a project:
     - Fixtures offer consistent setups for code coverage analysis. Code coverage ensures comprehensive testing, contributing to the overall quality and maintainability of a Python project.

## Things I want to know more about

I'm confused about maintaining state during recursion it seems familiar to JS but I can't quite picture it.

## Learning Journal


### Reflection

Write a brief reflection on your learning today, or use the prompt below to get started.

Consider the following quote from the article linked above:

“[Adult learners] are deeply involved not only in planning but also in evaluating their learning, as they know what knowledge they want to acquire.”

In other words, you should continuously evaluate your learning, and your learning journal is an excellent way to keep track of that. How do you see yourself planning and evaluating your learning? What details will you record and/or measure? How often will you evaluate what you want to learn?

- I like the way I am detailing my learning now. I think my notes and how much I put into them already kind of shows a learning plan where I list resources that I can use throughout my learning that I can always come back to. The way my notes are organized also details topics I do not understand and I can always refer back to those in that future. I think I need to start making goals to evaluate my learning and then for each learning journal reflection assignment I can assess whether I've met them or need more improvement. For now, I really want to understand the topics introduced in python first like different syntax.

## Career 4 - Career Coaching Workshop I Prep Resume Review
