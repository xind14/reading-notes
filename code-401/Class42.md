# Class 42 - Pythonisms

## Lab 42 - Generators, Iterators and Magic Methods

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

## Read 42 - Pythonisms

## Resources Link/Pages

- chatgpt
- [Dunder Methods](https://dbader.org/blog/python-dunder-methods)
- [Iterators](https://dbader.org/blog/python-iterators)
- [Generators](https://dbader.org/blog/python-generators)

**Bookmark and Review**

- [(Optional): What are Generators](https://realpython.com/lessons/what-are-python-generators/)
- [Decorators](https://realpython.com/primer-on-python-decorators/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Dunder methods, iterators, generators, and decorators, allows for customizing and enhancing the behavior of classes and functions.

## Reading Questions

1. What are dunder methods in Python, and how do they allow for the customization of built-in behavior in classes? Provide an example of a common dunder method and its purpose.

   - special methods in Python that begin and end with double underscores (e.g., `__init__`, `__str__`, `__add__`). These methods allow classes to define and customize various built-in behaviors.
   - **Example**:

     ```python
     class Point:
        def __init__(self, x, y):
           self.x = x
           self.y = y

        def __str__(self):
           return f"({self.x}, {self.y})"

        def __add__(self, other):
           return Point(self.x + other.x, self.y + other.y)
     ```

     - `__init__(self, x, y)`: This is the constructor method, called when an object is created. It initializes the object's attributes.
     - `__str__(self)`: This method defines the string representation of the object when `str()` is called on it.
     - `__add__(self, other)`: This method allows objects of the class to use the `+` operator, defining how two objects should be added together.

2. Explain the concept of an iterator in Python. How do you create a custom iterator using the iter() and next() methods, and why are they important for enabling iteration in a class?

   - An iterator is an object that implements the iterator protocol, consisting of the `__iter__()` and `__next__()` methods.
   - `__iter__()` returns the iterator object itself and is used in initializing the iteration.
   - `__next__()` returns the next item in the sequence. When there are no more items, it raises the `StopIteration` exception.

   - Creating a Custom Iterator:

     ```python
     class Squares:
        def __init__(self, n):
           self.n = n
           self.i = 0

        def __iter__(self):
           return self

        def __next__(self):
           if self.i >= self.n:
                 raise StopIteration
           result = self.i ** 2
           self.i += 1
           return result

     # Using the custom iterator
     sq = Squares(5)
     it = iter(sq)
     print(next(it))  # 0
     print(next(it))  # 1
     print(next(it))  # 4
     ```

     - `Squares` is a class that implements the iterator protocol.
     - `__iter__` returns the iterator object itself.
     - `__next__` computes and returns the next square value until `n`.

3. What is a generator in Python, and how does it differ from a regular function? Illustrate your answer with an example of a generator function using the ‘yield’ keyword.

   - Generators are functions that use the `yield` keyword to return values one at a time, pausing and resuming execution as needed. They differ from regular functions in that they don't return a single value and then exit; instead, they can yield multiple values over time.

   - Example of a Generator Function:

      ```python
      def fibonacci_generator(n):
         a, b = 0, 1
         count = 0
         while count < n:
            yield a
            a, b = b, a + b
            count += 1

      # Using the generator
      fib = fibonacci_generator(5)
      for num in fib:
         print(num)
      ```

   - In this example, `fibonacci_generator` is a generator function that yields Fibonacci numbers up to `n`.
   - The `yield` keyword pauses the function, saving its state, and returns the value. It then resumes execution from where it left off when called again.

4. Define decorators in Python and explain their primary use case. How can you create and apply a custom decorator to a function or method? Provide a simple example to demonstrate this concept.

   - Decorators are functions that modify the behavior of another function or method. They are commonly used for adding functionality to existing functions without modifying their structure.

   - Creating and Applying a Custom Decorator:

     ```python
     def my_decorator(func):
        def wrapper():
           print("Something is happening before the function is called.")
           func()
           print("Something is happening after the function is called.")
        return wrapper

     @my_decorator
     def say_hello():
        print("Hello!")

     # Using the decorated function
     say_hello()
     ```

     - `my_decorator` is a custom decorator that defines a `wrapper` function around the original `func`.
     - The `@my_decorator` syntax is used to apply the decorator to the `say_hello` function.
     - When `say_hello` is called, it executes the `wrapper` function, which adds extra behavior before and after calling `say_hello`.

## Things I want to know more about

- What is the Big O for using all of these methods?

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
