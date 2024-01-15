# Class 7 - Guided Project 2

## Lab 7 - Ten Thousand 2

### Overview

Extend Ten Thousand game started in previous class to get the game in playable state.

### Feature Tasks and Requirements

- Application should implement all features from previous version
- Application should allow user to set aside dice each roll
- Application should allow “banking” current score or rolling again.
- Application should keep track of total score
- Application should keep track of current round

### Implementation Notes

- Review [rules of game](https://en.wikipedia.org/wiki/Dice_10000)
- Play game [online](http://www.playonlinedicegames.com/farkle)

#### User Acceptance Tests

- Starter code contains “simulation” text files.
  - E.g. tests/version_2/quitter.sim.txt
- NOTE: Feel free to add more simuations, but you are required to pass all existing ones.
- The simuations are the official documentation of the features for the day.

#### Stretch Goals

- Application should have automated tests to ensure proper operation

## Code Challenge

- **Branch Name:** linked-list-kth
- **Challenge Type:** Extending an Implementation

## Feature Tasks

### 1. Kth from End

- **Argument:** a number, k, as a parameter.
- Return the node’s value that is k places from the tail of the linked list.

## Example

`ll.kthFromEnd(k)
`
Input ll | Arg k | Output
------------------------------------------|-------|-------
head -> {1} -> {3} -> {8} -> {2} -> X | 0 | 2
head -> {1} -> {3} -> {8} -> {2} -> X | 2 | 3
head -> {1} -> {3} -> {8} -> {2} -> X | 6 | Exception

## Unit Tests

Write tests for the following scenarios, and any other cases that help you ensure your code is working as expected.

- Where k is greater than the length of the linked list
- Where k and the length of the list are the same
- Where k is not a positive integer
- Where the linked list is of size 1
- “Happy Path” where k is not at the end but somewhere in the middle of the linked list

**Unit tests must be passing before you submit your final solution code.**

## Stretch Goal

Once you’ve achieved a working solution, implement a method that finds the node at the middle of the Linked List.

## Written Class Notes

## Read 7 - Ten Thousand 2

## Resources Link/Pages

- [Python Scope](https://realpython.com/python-scope-legb-rule/) NOTE This is a long reading. The portion to make sure you cover is on `global` and `nonlocal` keywords. You can skim the rest.
- [Big O notation is simpler than you might think](https://www.youtube.com/watch?v=dNorFNlDbX0)


**Bookmark and Review**

- [Rolling Dice Examples](https://web.archive.org/web/20220608035657/https://artofproblemsolving.com/wiki/index.php/Basic_Programming_With_Python#Random)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Learning the global and nonlocal keywords in Python is important because they are crucial for understanding and controlling variable scope

## Reading Questions

1. Explain the concept of variable scope in Python and describe the difference between local and global scope. Provide an example illustrating the usage of both.

   - Variable scope in Python defines the regions of code where a particular variable can be accessed or modified.
   - There are two main scopes: local scope and global scope.
      - **Local Scope:** Variables defined within a function have local scope and are accessible only within that function.
      - **Global Scope:** Variables defined outside any function have global scope and can be accessed from any part of the code.

   **Example:**
   ```python
   # Global Scope
   global_var = 10

   def example_function():
       # Local Scope
       local_var = 5
       print("Local Variable:", local_var)
       print("Global Variable:", global_var)

   example_function()
   ```

   Output:
   ```
   Local Variable: 5
   Global Variable: 10
   ```
   In this example, `global_var` has global scope and can be accessed inside the function, while `local_var` has local scope limited to the function.


2. How do the global and nonlocal keywords work in Python, and in what situations might you use them?

   - **Global Keyword:** Used to modify global names within functions. It maps a local variable to the corresponding global variable.
     - Example:
       ```python
       global counter
       counter = 0

       def update_counter():
           global counter
           counter += 1

       update_counter()
       print(counter)  # Output: 1
       ```

   - **Nonlocal Keyword:** Used to modify nonlocal names within nested functions. It allows a nested function to access and modify a variable in its enclosing function's scope.
     - Example:
       ```python
       def outer_function():
           var = 100

           def inner_function():
               nonlocal var
               var += 50

           inner_function()
           print(var)  # Output: 150

       outer_function()
       ```

   **When to Use:**
   - **Global:** Use when you need to modify a global variable within a function. However, it's generally considered better practice to avoid excessive use of global variables.
   - **Nonlocal:** Use when dealing with nested functions and you want to modify a variable in the enclosing (nonlocal) scope.


3. In your own words, describe the purpose and importance of Big O notation in the context of algorithm analysis.

    - Big O notation is the assessment of an algorithm's efficiency by expressing its upper bound or worst-case performance concerning input size. It allows for the comparison of algorithms, aiding in the selection of the most suitable approach for specific scenarios.

4. Based on the Rolling Dice Example, explain how you would simulate a dice roll using Python. Describe how you would use code to calculate the probability of rolling a specific number (e.g., the probability of rolling a 6) over a large number of trials.

    - To simulate a dice roll in Python, you can use the `random` package to generate a random number between 1 and 6. The first program example demonstrates this:

      ```python
      import random
      print(random.randint(1, 6))
      ```

    - This generates and prints a random integer between 1 and 6.

    - For simulating multiple dice rolls and calculating the probability of rolling a specific number, like 6, you can create a function to roll a single die, then use a loop to roll the dice a specified number of times (e.g., 1000) and count how many times the desired outcome occurs. The second program example illustrates this:

        ```python
        import random
        count = 0

        def roll():
            return random.randint(1, 6)

        for i in range(1, 1001):
            if roll() == 6:
                count += 1

        print(count)
        ```

    - In this example, the `roll()` function returns a random number between 1 and 6. The loop runs 1000 times, and each time the outcome is 6, the `count` variable is incremented. Finally, the program prints the count, representing the number of times 6 was rolled in 1000 attempts.

    - To calculate the probability, you divide the count of successful outcomes (rolling a 6) by the total number of trials (1000 in this case). The probability can be expressed as a fraction or percentage. For example:

      ```python
      probability = count / 1000
      print(f"The probability of rolling a 6 is: {probability}")
      ```



## Things I want to know more about

- What exactly determines whether you use global or nonlocal scope?

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
