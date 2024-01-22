# Class 8 - Guided Project 3

## Lab 8 - Ten Thousand 3: Handling cheaters and losers

### Overview

In this version, the Ten Thousand game is approaching a playable state for honest players. The core functionality is being strengthened by allowing users to set aside scoring dice and continue their turn. Additionally, the implementation addresses cases of cheating or typos and handles situations like rolling zilch.

### Feature Tasks and Requirements

- The application should incorporate features from both versions 1 and 2.
- Users can set aside scoring dice and continue their turn with the remaining dice.
- Handling cheating instances or typos, for example, when a user selects dice that didn't roll.
- Allowing the user to continue rolling with six new dice when all dice have scored in the current turn.
- Properly handling zilch scenarios where there are no points for the round, and the round is considered over.

### Implementation Notes

- Review the rules of the game, and play the game online to ensure accurate implementation.

### User Acceptance Tests

- Must pass the provided unit and simulation tests.
- Starter code contains simulation text files, e.g., tests/version_3/scorer.sim.txt.
- Additional simulations can be added, but passing all existing ones is mandatory.
- Simulations serve as official documentation of the features for this version.

### Stretch Goals

- Identify additional features to enhance the game and propose ideas to the client.
- Identify gaps in the current test suite and add tests to expose potential bugs.


## Code Challenge

- **Branch Name:** linked-list-zip
- **Challenge Type:** Code Challenge / Algorithm

## Feature Tasks

Write a function called `zipLists`

**Arguments:** 2 linked lists
**Return:** New Linked List, zipped as noted below

Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the zipped list. Try and keep additional space down to O(1). You have access to the `Node` class and all the properties on the Linked List class as well as the methods created in previous challenges.

### Example

```python
zipLists(list1, list2)
```

| Arg list1                             | Arg list2                             | Output                                             |
| --------------------------------------|---------------------------------------|----------------------------------------------------|
| {1} -> {3} -> {2} -> null              | {5} -> {9} -> {4} -> null              | {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null     |
| {1} -> {3} -> null                     | {5} -> {9} -> {4} -> null              | {1} -> {5} -> {3} -> {9} -> {4} -> null             |
| {1} -> {3} -> {2} -> null              | {5} -> {9} -> null                     | {1} -> {5} -> {3} -> {9} -> {2} -> null             |

## Unit Tests

Write tests for the following scenarios, and any other cases that help you ensure your code is working as expected.

- When both lists are empty
- When one list is empty and the other is not
- When both lists have different lengths
- When both lists have the same length
- When one list is longer than the other
- When both lists are the same

**Unit tests must be passing before you submit your final solution code.**

## Stretch Goal

Once you’ve achieved a working solution, implement another function that merges two sorted linked lists into a single sorted linked list.



## Written Class Notes


## Read 8 - List Comprehensions

## Resources Link/Pages

- [List Comprehensions](https://www.pythonforbeginners.com/basics/list-comprehensions-in-python)
- [Debugging with PySnooper](https://www.pythonpodcast.com/pysnooper-python-debugging-episode-241/) optional


**Bookmark and Review**


- [Primer on Decorators](https://realpython.com/primer-on-python-decorators/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

List comprehensions and decorators are crucial in Python learning, offering concise ways to create and manipulate lists, and providing a powerful tool for dynamically modifying functions to enhance code reusability and extensibility.

## Reading Questions

1. What is the basic syntax of Python list comprehension, and how does it differ from using a for loop to create a list? Provide an example of a list comprehension that squares the elements in a given list of integers.

    - The basic syntax of Python list comprehension is as follows:

      ```python
      new_list = [expression for item in iterable_object]
      ```

      In this syntax:
      - `iterable_object` represents an iterable such as a list, tuple, set, etc.
      - `item` represents an element of the iterable_object.
      - `expression` represents the operation performed on the item.

      The equivalent code using a for loop to create a list would be:

      ```python
      original_list = [1, 2, 3, 4, 5, 6]
      new_list = []
      for item in original_list:
          square = item ** 2
          new_list.append(square)
      ```

      The list comprehension version for squaring elements in a given list of integers is:

      ```python
      original_list = [1, 2, 3, 4, 5, 6]
      squared_list = [item ** 2 for item in original_list]
      ```

      This list comprehension is more concise and achieves the same result as the equivalent for loop. It squares each element in the original list and creates a new list with the squared values.

2. What is a decorator in Python?

    - applied using the "@" syntax and are essentially functions that take another function as an argument and return a new function with modified behavior.

3. Explain the concept of decorators in Python. How do they work, and what are some common use cases for them? Provide an example of a simple decorator function from the reading.

    - Decorators in Python work by taking a function as an input, creating a wrapper function that usually adds some functionality, and then returning this wrapper function. The wrapper function is typically used to extend or modify the behavior of the original function. Common use cases for decorators include logging, timing, debugging, access control etc

    - Here's an example of a simple decorator function from the reading:

      ```python
      import functools

      def debug(func):
          """Print the function signature and return value"""
          @functools.wraps(func)
          def wrapper_debug(*args, **kwargs):
              args_repr = [repr(a) for a in args]
              kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
              signature = ", ".join(args_repr + kwargs_repr)
              print(f"Calling {func.__name__}({signature})")
              value = func(*args, **kwargs)
              print(f"{func.__name__!r} returned {value!r}")
              return value
          return wrapper_debug

      @debug
      def make_greeting(name, age=None):
          if age is None:
              return f"Howdy {name}!"
          else:
              return f"Whoa {name}! {age} already, you are growing up!"
      ```

      In this example, the `debug` decorator is applied to the `make_greeting` function, and it prints information about the function calls, including the arguments and return values.

## Things I want to know more about

- How many of the decorators are we suppose to know for sure because theres a lot.

## Learning Journal

### Reflection

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.

- I recently learned to step away and figure things out the next day if I have been working on it for too long. I only got one feature task finished today and I'm submitting it as it is. Putting myself first. Last class I stayed up till 6 am most days figuring out labs but I don't want to do that now.
