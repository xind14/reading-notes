# Class 4 - Object Oriented Programming

## Lab 4 - Modeling problem domain with classes

### Overview

Creating a Garage Band with Object-Oriented Programming.

#### Configuration

- Create a project named `pythonic-garage-band`.

#### Repository Set-up

- Create a new repository named `pythonic-garage-band`.
- Use feature branches for your work.

### Feature Tasks and Requirements

Use Python classes to model a Band made up of different kinds of musicians.

Start with Guitarist, Bassist, and Drummer.

Make use of a Musician base class to handle common functionality which particular kinds of musicians will inherit.

#### User Acceptance Tests

Unit tests will be supplied for this lab. Your job is to make them pass. Do NOT modify the supplied tests (except to enable for stretch goals).

#### Band Tests

- A Band instance should have a `name` attribute which is a string.
- A Band instance should have a `members` attribute which is a list of instances that inherit from Musician base (or super) class.
- A Band instance should have a `play_solos` method that asks each member musician to play a solo, in the order they were added to the band.
- A Band instance should have appropriate `__str__` and `__repr__` methods.
- A Band should have a class method `to_list` which returns a list of previously created Band instances.

#### Musician Subclass Tests

- Each kind of Musician instance should have appropriate `__str__` and `__repr__` methods.
- Each kind of Musician instance should have a `get_instrument` method that returns a string.
- Each kind of Musician instance should have a `play_solo` method that returns a string.


## Code Challenge - Optional Mock Interview

### Matrix Row Sum

- Given a matrix, find the sum of each row.

#### Specifications


Read all of the following instructions carefully.

- Act as an interviewer, giving a candidate a code challenge.
- Score the candidate according to the Whiteboard Rubric.
- You are free to offer suggestions or guidance (and see how they respond), but don’t solve the challenge for the candidate.

### Feature Tasks

Ask the candidate to write a function to add up the sum of each row in a matrix of arbitrary size and return an array with the appropriate values.

- Avoid utilizing any of the built-in methods available to your language.
- Don’t let the candidate get scared by the term “matrix”… It’s just an array of arrays.
- The matrix will always be full of integers.
- Negative values are possible.
- All nulls will be counted as zeros.

#### Structure

Familiarize yourself with the grading rubric so you know how to score the interview.

Look for effective problem-solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to at least convince you that their code works to solve the problem.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end and record the total at the bottom of the page.

#### Example

| Input                                        | Output          |
| -------------------------------------------- | --------------- |
| [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]         | [6, 15, 18]     |
| [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ]      | [6, 5, 20]      |

The candidate should draw the input and output as a square of integers.

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

“Adults need to know why to learn something; as soon as they answer this question, they are ready to start.”

The why applies to both large-scale (learning web development as a new profession) and small-scale (learning a particular tool or technique), and your learning journal is an excellent place to identify and contemplate those whys. They are important. So… what is your why?

- My primary motivation lies in career advancement. I aim to transition into a more fulfilling and lucrative field, and acquiring web development skills is a strategic move to align my career with current market demands. But also I wanted to go to the advanced fullstack Javascript route but it didn't match my schedule and I thought I'm not confident on the back end so I might as well.

## Career 4 - Career Coaching Workshop I Prep Resume Review







Algorithm:
Initialize an empty list to store the sum of each row.
Iterate through each row in the matrix.
Initialize a variable row_sum to 0 for the current row.
Iterate through each element in the row.
If the element is None, treat it as 0.
Add the element to row_sum.
Append row_sum to the result list.
Return the result list containing the sum of each row.


def row_sums(matrix):
    result = []
    for row in matrix:
        row_sum = 0
        for element in row:
            row_sum += element if element is not None else 0
        result.append(row_sum)
    return result

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matrix = [
    [-1, -2, -3],
    [-4, -5, -6],
    [-7, -8, -9]
]


matrix = [
    [1, 2, 3],
    [4, None, 6],
    [7, 8, 9]
]


Row Sums:
[1 + 2 + 3 = 6]
[4 + 0 + 6 = 10]
[7 + 8 + 9 = 24]

Walkthrough:
We initialize an empty list (result) to store the row sums.
For each row in the matrix, we initialize row_sum to 0.
We iterate through each element in the row, treating None as 0 and adding the values to row_sum.
After processing each row, we append the row_sum to the result list.
Finally, we return the list containing the row sums.

Time Complexity (Big O):
Let's denote the number of rows as m and the number of elements in each row as n. The time complexity is O(m * n) because we iterate through each element in the matrix once.

Space Complexity:
The space complexity is O(m), where m is the number of rows, as we only use a single list to store the row sums.

1. Code Challenge 4: [Linked List Kth]()
1. Code Challenge 4: [Linked List Zip]()
1. Code Challenge 4: [Queue]()
1. Code Challenge 4: [Stack]()
1. Code Challenge 4: [Stack Queue Pseduo]()
1. Code Challenge 4: [Stack Queue Animal Shelter]()
1. Code Challenge 4: [Stack Queue Brackets]()
1. Code Challenge 4: [Binary Tree]()
1. Code Challenge 4: [Binary Search Tree]()
1. Code Challenge 4: [Binary Tree Max]()
1. Code Challenge 4: [Tree Breadth First]()
1. Code Challenge 4: [Tree Fizz Buzz]()
1. Code Challenge 4: [Hashtable]()
1. Code Challenge 4: [Hashtable Repeated Word]()
1. Code Challenge 4: [Tree Intersection]()
1. Code Challenge 4: [Hastable Left Join Two Arrays]()
1. Code Challenge 4: [Graph]()
1. Code Challenge 4: [Three Odds DSA Practice]()
1. Code Challenge 4: [Computational Thinking Lab 36.1]()
1. Code Challenge 4: [Computational Thinking Lab 36.2]()
1. Code Challenge 4: [Peak Index]()
1. Code Challenge 4: [Construct BST]()
