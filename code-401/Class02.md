# Class 2 - Modules and Testing

## Lab 2 - Test Driven Development

## Setup

## Code Challenge

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/DEMO.html)

Challenges

1. Navigate to the javascript folder within your data-structures-and-algorithms repository.
2. Create a new branch for this challenge called for-each
   git checkout -b for-each
3. Retrieve the code challenge from the system
   npm run get-challenge 01
4. In your terminal, from the javascript folder, run npm test 01 to execute the tests in this file for this challenge.
5. At this point you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.
6. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!
7. Write code to make the tests pass, one at a time. Let the error messages guide you.
8. Once the test is passing, refactor as needed, then move on to the next challenge.
9. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress

Submission
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

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

## Career 1 - Identify Your Accountability Partners

