# Class 3 - File IO & Exceptions

## Lab 3 - Interacting with file system and handling when things go wrong

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

| Input | Output |
|-------|--------|
| [1, 2, 3, 4, 5, 6] | [6, 5, 4, 3, 2, 1] |
| [89, 2354, 3546, 23, 10, -923, 823, -12] | [-12, 823, -923, 10, 23, 3546, 2354, 89] |
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


## Read 3 - File IO & Exceptions

## Resources Link/Pages


- [Read & Write Files in Python](https://realpython.com/read-write-files-python/)
- [Exceptions in Python](https://realpython.com/python-exceptions/)
- [File Objects - Reading and Writing to Files](https://www.youtube.com/watch?v=Uh2ebFW8OYM)


**Bookmark and Review**

- [Reading and Writing Files in Python Quiz](https://realpython.com/quizzes/read-write-files-python/)



## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:


Knowing how to use 'with' for managing resources, reading files with 'read' and 'readline,' and handling exceptions in Python is vital for writing code that's clean, handles files effectively, and gracefully deals with errors in your programs.

## Reading Questions


1. What is the purpose of the `‘with’` statement when opening a file in Python, and how does it help manage resources while reading and writing files?

    - When you open a file, you have to close it. The `with` statement automatically takes care of closing the file once it leaves the with block, even in cases of error. Use the `with` statement as much as possible, as it allows for cleaner code and makes handling any unexpected errors easier. By using 'with,' you don't need to explicitly close the file; the 'with' statement takes care of it automatically, preventing resource leaks and promoting cleaner and more Pythonic code.


2. Explain the difference between the ‘read()’ and ‘readline()’ methods for file objects in Python. Provide examples of when to use each method.

    - `read():` 	This reads from the file based on the number of size bytes. If no argument is passed or None or -1 is passed, then the entire file is read. This method is suitable when you want to read the entire file at once.
    - `readline():` This method reads a single line from the file. If the size parameter is provided, it reads up to that number of characters or until the end of the line. It returns a string containing the line read. This method is useful when you want to read the file line by line.

3. Briefly describe the concept of exception handling in Python. How can the ‘try’, ‘except’, and ‘finally’ blocks be used to handle exceptions and ensure proper execution of code? Provide a simple example.

    - Exception handling in Python involves the use of 'try', 'except', and 'finally' blocks. The 'try' block contains the code that might raise an exception, the 'except' block handles the exception if it occurs, and the 'finally' block ensures that code within it is executed whether an exception occurs or not.
        - `try`: This block contains the code that might raise an exception.
        - `except`: If an exception occurs in the try block, the code in the except block is executed to handle the exception.
        - `finally`: This block is always executed, regardless of whether an exception occurred or not. It is often used for cleanup operations.

          ```
          try:
            a = 5//0
            print(a)

          except ZeroDivisionError:
            print("Can't divide by zero")

          finally:
            print('This is always executed')

            ```

## Things I want to know more about

I watched the video and I want to know what you use to decide in how many increments you would breakdown large datasets when using loops to process. 

## Learning Journal


### Reflection


Write a brief reflection on your learning today, or use the prompt below to get started.

> “[Adult learners] demand that their learning is relevant to their real life issues, problems, and tasks, and that their education will boost their performance levels and help them live their lives in a better, and more satisfying way.”

In other words, understanding your motivation for learning contributes to the effectiveness of your learning, and your learning journal is a place to explore those thoughts. What are your motivations for learning?

- If I am completely honest my motivations are money. I am gambling on the chance that I can make a decent income because the average for this industry is on the higher end. But I recognize that is a short-term motivator to have because it might not be a strong driver later. I guess other motivations would be to advance my career or at least start one. I feel like I haven't had an adult job and I need to start building connections that'll give my future more stability. Along with money, I do like problem solving so I hope that becomes a better driving force for me later. I feel like I haven't had the time to sit down and reflect on how to stay motivated in my learning because of how fast pace this program is. I understand these assignments are time set side for those reflections but because I feel so slammed, the journal reflections feel like a chore rather than an opportunity to think. I do recognize it might be too early in the class for me to feel appreciative yet and it will get easier as I practice more the further into this class we go.

## Career 3 - Networking Gameplan

It is time to evaluate who you already know. Who are these people and what do they do professionally? There are lots of tech roles in all industries, so find out who in your network can connect you to an opportunity.


1. Scheduling time to connect with your current base. You never want your connections to go cold.
2. Diversify and continue to expand your network.

Now, take the time to identify who in your current network would be great for a 1:1 informational coffee. Also, find 3 different local meetups that you want to target to grow your network.

- Assignment
Submit the names of who you’d like to reach out to for 1:1 meetings, and the events you want to attend.

- Johnny Jones
- Eleanor Lewis

1. **Empowering Women in Tech: UX Skills & Networking with a Google Sr UX Designer**
   - [Event Link](https://www.meetup.com/be82bf6c-883e-4e52-a156-5fbf4ce0e29a/events/298244120/)
   - Date and Time: Friday, January 19, 2024, 9:00 AM to 10:30 AM PST

2. **Empowering Women in Tech: Job Hunting & Networking with a Tech Recruiter**
   - [Event Link](https://www.meetup.com/be82bf6c-883e-4e52-a156-5fbf4ce0e29a/events/298378926/)
   - Date and Time: Friday, February 9, 2024 at 9:00 AM to Friday, February 9, 2024 at 10:30 AM PST

3. **How to Get Hired as a Software Engineer in 2024 (Remote Only)**
   - [Event Link](https://www.meetup.com/build-with-code-west-coast/events/298365635/)
   - Date and Time: Wednesday, January 10, 2024 at 4:00 PM to Wednesday, January 10, 2024 at 5:00 PM PST

