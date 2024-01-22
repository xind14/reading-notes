# Class 3 - File IO & Exceptions

## Lab 3 - Interacting with file system and handling when things go wrong

### Overview

In this lab assignment, you will be creating a command line application that takes advantage of Python’s built-in capabilities for reading and writing files.

#### Resources

- A starter test script is supplied and should be moved to your application’s tests folder.
- **NOTE:** All included tests must pass as written, though you can add more tests if you like.
- [Python String `format()` Method](https://docs.python.org/3/library/stdtypes.html#str.format)
- [Unpacking Arrays](https://docs.python.org/3/tutorial/controlflow.html#tut-unpacking-arguments)

#### Configuration

- Create a project named `madlib-cli`.

#### Repository Set-up

- Create a repository on Github with the name `madlib-cli`.

### Feature Tasks and Requirements

- Create a file called `madlib.py` at the root of the `madlib_cli` folder, which will contain all of the Python code that you will write relating to your Madlib game.
- Keeping in mind the concept of Single Responsibility Principle, build a command-line tool which will perform the following:
  - Print a welcome message to the user, explaining the Madlib process and command line interactions.
  - Read a template Madlib file (Example), and parse that file into usable parts.
  - Prompt the user to submit a series of words to fit each of the required components of the Madlib template.
  - With the collected user inputs, populate the template such that each provided input is placed into the correct position within the template.
  - After the resulting Madlib has been completed, provide the completed response back to the user in the command line.
  - Write the completed text (Example) to a new file on your file system (in the repo).
    - **Note:** A smaller example file is included as well, which can be handy when developing/testing.

#### Testing Details

- You are NOT required to test terminal input/output, AKA print and input functions.
- However, you ARE expected to have meaningful tests for your application.

#### How to Skip Testing Print and Output Functionality

The resolution to that dilemma is to break down your code so that it is more easily testable.

1. Create and test a `read_template` function that takes in a path to a text file and returns a stripped string of the file’s contents.
   - `read_template` should raise a `FileNotFoundError` if the path is invalid.

2. Create and test a `parse_template` function that takes in a template string and returns a string with language parts removed and a separate tuple of those language parts.

3. Create and test a `merge` function that takes in a “bare” template and a list of user-entered language parts, and returns a string with the language parts inserted into the template.


## Code Challenge

### Array Binary Search


- Binary Search in a Sorted 1D Array

#### Specifications

Read all of the following instructions carefully.

- Name things exactly as described.
- Do all your work in a public repository called `data-structures-and-algorithms`.
- Create a new branch in your repo called `array-binary-search`.
- Make a directory for this challenge, named according to your language’s conventions, containing a `README.md` file.
- Update the “Table of Contents” - in the `README` at the root of the repository - with a link to this challenge’s `README` file.

**NOTE:** This challenge is whiteboard only. Write out code as part of your whiteboard process, but don’t worry about creating external program files.

### Feature Tasks

Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

**NOTE:** The search algorithm used in your function should be a binary search. Check the [Resources section](#resources) for details.

#### Example

| Input                                  | Output |
| -------------------------------------- | ------ |
| [4, 8, 15, 16, 23, 42], 15              | 2      |
| [-131, -82, 0, 27, 42, 68, 179], 42     | 4      |
| [11, 22, 33, 44, 55, 66, 77], 90        | -1     |
| [1, 2, 3, 5, 6, 7], 4                   | -1     |

#### Resources

- [Binary Search Algorithm](https://www.geeksforgeeks.org/binary-search/)


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


- Right now I want to learn out of embarrassment. I don't feel like I'm learning anything and I want to move away from this frustration of not knowing. I also want to move away from being a copy and paste coder which I get is normal when first learning, like getting ideas and sample solutions and I just feel like I rely on external resources so much that I'm not understanding what I'm doing

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

