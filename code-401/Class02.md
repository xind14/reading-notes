# Class 2 - Modules and Testing

## Lab 2 - Test Driven Development


### Overview

The Fibonacci Series is a numeric series starting with the integers 0 and 1. In this series, the next integer is determined by summing the previous two. This gives us:

```
0, 1, 1, 2, 3, 5, 8, 13, ...
```

**Note:** When asking for the nth number in the series, presume starting at zero.

- `fibonacci(0) == 0`
- `fibonacci(1) == 1`
- `fibonacci(2) == 1`, etc.

The Lucas Numbers are a related series of integers that start with the values 2 and 1 rather than 0 and 1. The resulting series looks like this:

```
2, 1, 3, 4, 7, 11, 18, 29, ...
```

#### Configuration

- Create a local git repo with the root folder named `math-series`.
- Create a new repository named `math-series`.
- Link your local and remote repositories.

### Feature Tasks and Requirements

1. Create a module `series.py`.
2. Add a file `test_series.py` to your repository. Use Test-Driven Development (TDD) practices. Write tests first, then implement code. Make small changes with many cycles of Red-Green-Refactor.
3. Create a function called `fibonacci`. The function should have one parameter `n`. Return the nth value in the Fibonacci series. You may implement the function using recursion or iteration. If you are feeling particularly frisky, do both as separate functions. Ensure that your function(s) have well-formed docstrings.
4. In your `series.py` module, add a new function `lucas` that returns the nth value in the Lucas numbers. Again, you may use recursion or iteration, or both. Ensure that your function has a well-formed docstring.
5. Both the Fibonacci series and the Lucas numbers are based on an identical formula. Add a third function called `sum_series` with one required parameter and two optional parameters. The required parameter will determine which element in the series to print. The two optional parameters will have default values of 0 and 1 and will determine the first two values for the series to be produced. Calling this function with no optional parameters will produce numbers from the Fibonacci series. Calling it with the optional arguments 2 and 1 will produce values from the Lucas numbers. Other values for the optional parameters will produce other series. Ensure that your function has a well-formed docstring.
6. Add your `series.py` and `test_series.py` modules to your repository and commit frequently while working on your implementation. Include good commit messages that explain concisely both what you are doing and why.


## Setup

[Python Setup guide](https://codefellows.github.io/code-401-python-guide/reference/submission-instructions/labs/)

### Creating Project

```bash
mkdir example-lab
cd example-lab
touch README.md
```

### Create virtual environment

```bash
python3 -m venv .venv
```

**NOTE:** Replace `python3` with a more specific version as needed.

#### Activate virtual environment

**Mac/Linux:**

```bash
source .venv/bin/activate
```

**Windows:**

```bash
source .venv/Scripts/activate
```

### Create modules and scripts

```bash
mkdir example_lab
touch example_lab/example_script.py
```

_Note the underscore vs hyphen_

### Install packages

For example:

```bash
pip install favorite-library
```

### Record package dependencies

```bash
pip freeze > requirements.txt
```

Should result in this file tree:

```
└── example-lab
    ├── README.md
    ├── requirements.txt
    └── example_lab
        └── example_script.py
```

### Tests

Many labs will require automated testing. If your lab requires it, then install pytest or pytest-watch.

```bash
pip install pytest # or pytest-watch
pip freeze > requirements.txt
touch tests/__init__.py # (Note: 2 underscores on both sides.)
touch tests/test_example.py
```

Should result in a file tree like this:

```
└── example-lab
    ├── README.md
    ├── requirements.txt
    ├── example_lab
    │   └── example_script.py
    └── tests
        ├── __init__.py
        └── test_example.py
```

### README

Your project’s README.md should match the structure of the template README.

### Git

#### On Local System

```bash
git init
touch .gitignore
```

Add `.venv` folder to `.gitignore`

```bash
git add .
git commit -m "first commit"
```

#### On Github site

Create an EMPTY repository `example-lab` on Github. **DO NOT initialize with README, license, or gitignore.**
Those will be added soon.

The next screen will have a “Quick Setup” section with a URL available to copy. Copy it ;)

#### On local system (again)

```bash
git remote add origin the_url_you_copied_that_ends_with_git
git push -u origin main
```

Now everything is wired up between the local machine and Github.

### Canvas Submission

Submit a link to the `README.md` from your assignment branch in Canvas.

#### Resubmits

Any commits made to the submission branch will be updated in the PR.

In the event of assignment resubmission, submit the submission branch PR on canvas.

### Github Actions

This step is optional early in the course. The instructor will inform you when it is required.

Setup “Github Actions” so that your code can be properly tested in Github as you make new pushes to your branches and pull requests to master.

Include the following YAML code:

```yaml
name: Run Python Tests

on:
  push:
    branches:
      - main
    paths:
      - "python/**"
  pull_request:
    branches:
      - main
    paths:
      - "python/**"

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python 3.9
        uses: actions/setup-python@v2
        with:
          python-version: 3.9
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
        working-directory: ./python
      - name: Test with pytest
        run: pytest -vv
        working-directory: ./python
```
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





## Code Challenge

### Insert Shift Array

- Insert and Shift an Array in the Middle at Index

#### Specifications

Read all of the following instructions carefully.

- Name things exactly as described.
- Do all your work in a public repository called `data-structures-and-algorithms`.
- Create a new branch in your repo called `array-insert-shift`.
- Make a directory for this challenge, named according to your language’s conventions, containing a `README.md` file.
- Update the “Table of Contents” - in the `README` at the root of the repository - with a link to this challenge’s `README` file.

**NOTE:** This challenge is whiteboard only. Write out code as part of your whiteboard process, but don’t worry about creating external program files.

### Feature Tasks

Write a function called `insertShiftArray` which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

#### Example

| Input           | Output             |
| --------------- | ------------------ |
| [2,4,6,-8], 5   | [2,4,5,6,-8]       |
| [42,8,15,23,42], 16 | [42,8,15,16,23,42] |



## Read 2 - Testing and Modules

## Resources Link/Pages

- [In Tests We Trust - TDD with Python](https://code.likeagirl.io/in-tests-we-trust-tdd-with-python-af69f47e6932)
- [If name equals main](https://www.geeksforgeeks.org/what-does-the-if-__name__-__main__-do/)
- [Recursion](https://www.geeksforgeeks.org/recursion/)
- [What on Earth is Recursion](https://www.youtube.com/watch?v=Mv9NEXX1VHc)
- [Python Modules and Packages Companion Video](https://realpython.com/courses/python-modules-packages/)

**Bookmark and Review**

- [Google for Education: Python Lists](https://developers.google.com/edu/python/lists)
- [Google for Education: Python Strings](https://developers.google.com/edu/python/strings)
- [Python Modules and Packages](https://realpython.com/python-modules-packages/)
- [Pytest Documentation](https://docs.pytest.org/en/latest/)
- [PyTest Tutorial](https://www.guru99.com/pytest-tutorial.html) Up to section Running tests in parallel

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Embracing test-driven development builds a solid foundation for understanding Python by reinforcing good coding practices, the conditional execution structure enhances script versatility, and recursion demonstrates a fundamental problem-solving technique

## Reading Questions

1. What are the key principles of Test-Driven Development (TDD) in Python, and how do they contribute to the overall quality of code?

   - **Write Tests First:**

     - Start by writing tests for the functionality you want to implement.
     - These tests should fail initially since the code to fulfill them hasn't been written yet.

   - **Write Minimal Code:**

     - Write the minimum amount of code necessary to pass the tests.
     - This ensures that the code is focused on the required functionality.

   - **Refactor Code:**
     - After passing the tests, refactor the code while keeping it functional.
     - Refactoring aims to improve the code structure without changing its behavior.

- TDD contributes to the overall quality of code by ensuring that the code meets requirements, is maintainable, and reduces the likelihood of introducing bugs.

2. Explain the purpose of the `if __name__ == '__main__':` statement in Python scripts. What are some use cases for including this conditional in your code?

    - The `if __name__ == '__main__':` statement in Python is used to determine whether the Python script is being run as the main program or if it is being imported as a module into another script.
    - Use case: script execution, testing, initialization

3. Describe the concept of recursion in Python.

    - where a function calls itself to solve a problem. Key concepts of recursion include:
      - Every recursive function must have a base case, which is the simplest scenario where the function stops calling itself. It prevents infinite recursion and provides a termination condition.
    - Recursive functions break down a problem into smaller subproblems.
    - Recursion uses the call stack, and each recursive call adds a new frame to the stack.

    ```
    example
    python
    Copy code
    def factorial(n):
        if n == 0 or n == 1:
            return 1
        else:
            return n * factorial(n - 1)

    ```

4. What is the difference between Python modules and packages? Explain how to create, import, and use them in your Python programs.

    - Module: a file containing Python definitions and statements. It allows organizing code logically into reusable files.
          - Create:

        ````# module.py

          def greet(name):
          print(f"Hello, {name}!")```

          - Import:
          ```
          # main.py

        import module

        module.greet("John")
          ```
    - Packages: a way of organizing related modules into a single directory hierarchy. It includes a special file called `__init__.py`

        - Create:
        ````

        mypackage/
        ├── **init**.py
        ├── module1.py
        └── module2.py

        ```
        - Import:
        ```

        # main.py

        from mypackage import module1

        module1.function()

        ```

## Things I want to know more about

I got really confused reading the different types of recursion like tail, implicit, etc so I need to know more about that

## Learning Journal

### Today I Learned

One of the most effective tools in adult learning is reflection. By writing coherent summaries of lessons learned, we cement that learning and deepen our understanding of a subject. It also helps us to measure our progress.

### Reflection

Write a brief reflection on your learning today, or use the prompt below to get started.


[“For adult learners, their experience becomes the main resource of both their learning and the personal identity they have developed, as the richer and more diverse their experience, the more the diversity they can bring to their own learning.”](https://elearningindustry.com/pedagogy-vs-andragogy-in-elearning-can-you-tell-the-difference)


In other words, your life experience in learning the things you did before learning code will make this new experience more meaningful for you, and reflection on all of your experiences is essential in maximizing what you can gain from your study at Code Fellows. How do you think your prior life and professional experience will help you in this new endeavor?


- This is only class 2 and I'm already stressed because I feel like I'm already expected to know a lot by self-teaching with the prework prep. But I have trouble staying focused when I try to learn new things so I don't remember anything from the prep work. I had to watch a 4 hour learn python for beginners on Youtube to catch up. My past experience has thought me patience. I think if I wasn't patient I would be way more stressed then I am now. My past jobs have also thought me how to be accountable and reliable so I do have good documentation habits.

## Career 2 - Identify Your Accountability Partners

