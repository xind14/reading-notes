# Class 6 - Guided Project 1

## Lab 6 - Ten Thousand - version 1

### Overview

Today you’ll begin working in pairs on a command line version of the dice game Ten Thousand by expanding your understanding of Python standard library.

- This will be a unique experience as you will be expected to use code from the internet (ai of choice)
  - This will enhance your ability to read and understand code written by others.
  - In addition to your README.md, you will create a prompt.md file. This file will include:
  - The prompt that you used to generate code
  - the actual code you got from the ai you used.
  - any subsequent prompts that you ask for changes.
  - NOTE: Failure to provide this file will result in your assignment not being graded and if not submitted on time will be late.

### Feature Tasks and Requirements

- Project named ten-thousand.
- Today is all about tackling the highest risk and/or highest priority features - scoring and dice rolling.
  - Define a GameLogic class in ten_thousand/game_logic.py file.
  - Handle calculating score for dice roll
    - Add calculate_score static method to GameLogic class.
    - The input to calculate_score is a tuple of integers that represent a dice roll.
    - The output from calculate_score is an integer representing the roll’s score according to rules of game.
  - Handle rolling dice
    - Add roll_dice static method to GameLogic class.
    - The input to roll_dice is an integer between 1 and 6.
    - The output of roll_dice is a tuple with random values between 1 and 6.
    - The length of tuple must match the argument given to roll_dice method.
- Using the parameters above, use ai to generate code blocks.
  - You must document every single line of code with a detailed description of what the code is doing.
- Run the provided tests against the code that you obtained from ai.
- The provided tests are the source of truth
- NOTE: ai does not always provide the correct code.
  - Be specific with your requests to ai.

### Implementation Notes

- Review [rules of game](https://en.wikipedia.org/wiki/Dice_10000)
- Play game [online](http://www.playonlinedicegames.com/farkle)

#### User Acceptance Tests

- Starter tests will be provided that cover cases listed below

  - All tests must pass as written
  - But additional tests are expected
  - Testing - Roll Dice
    - When rolling 1 to 6 dice ensure…
      - A sequence of correct length is returned
      - Each item in sequence is an integer with value between 1 and 6
  - Testing - Calculate Score

    - NOTE If there are differences between testing scores and online, the tests will be considered correct.

    - zilch - roll with no scoring dice should return 0
    - ones - rolls with various number of 1s should return correct score
    - twos - rolls with various number of 2s should return correct score
    - threes - rolls with various number of 3s should return correct score
    - fours - rolls with various number of 4s should return correct score
    - fives - rolls with various number of 5s should return correct score
    - sixes - rolls with various number of 6s should return correct score
    - straight - 1,2,3,4,5,6 should return correct score
    - three_pairs - 3 pairs should return correct score
    - two_trios - 2 sets of 3 should return correct score
    - leftover_ones - 1s not used in set of 3 (or greater) should return correct score
    - leftover_fives - 5s not used in set of 3 (or greater) should return correct score

#### Stretch Goals

- Research parametrized tests in PyTest
- Research Behavior Driven Development

## Code Challenge

- **Branch Name:** linked-list-insertions
- **Challenge Type:** Extending an Implementation

## Feature Tasks

### 1. Append

- **Arguments:** new value
- Adds a new node with the given value to the end of the list

### 2. Insert Before

- **Arguments:** value, new value
- Adds a new node with the given new value immediately before the first node that has the value specified

### 3. Insert After

- **Arguments:** value, new value
- Adds a new node with the given new value immediately after the first node that has the value specified

## Examples

### Append

| Initial List                   | Method Args | Resulting List                        |
| ------------------------------ | ----------- | ------------------------------------- |
| head -> {1} -> {3} -> {2} -> X | 5           | head -> {1} -> {3} -> {2} -> {5} -> X |
| head -> X                      | 1           | head -> {1} -> X                      |

### Insert Before

| Initial List                   | Method Args | Resulting List                        |
| ------------------------------ | ----------- | ------------------------------------- |
| head -> {1} -> {3} -> {2} -> X | 3, 5        | head -> {1} -> {5} -> {3} -> {2} -> X |
| head -> {1} -> {3} -> {2} -> X | 1, 5        | head -> {5} -> {1} -> {3} -> {2} -> X |
| head -> {1} -> {2} -> {2} -> X | 2, 5        | head -> {1} -> {5} -> {2} -> {2} -> X |
| head -> {1} -> {3} -> {2} -> X | 4, 5        | No change, method exception           |

### Insert After

| Initial List                   | Method Args | Resulting List                        |
| ------------------------------ | ----------- | ------------------------------------- |
| head -> {1} -> {3} -> {2} -> X | 3, 5        | head -> {1} -> {3} -> {5} -> {2} -> X |
| head -> {1} -> {3} -> {2} -> X | 2, 5        | head -> {1} -> {3} -> {2} -> {5} -> X |
| head -> {1} -> {2} -> {2} -> X | 2, 5        | head -> {1} -> {2} -> {5} -> {2} -> X |
| head -> {1} -> {3} -> {2} -> X | 4, 5        | No change, method exception           |

## Unit Tests

- Can successfully add a node to the end of the linked list
- Can successfully add multiple nodes to the end of a linked list
- Can successfully insert a node before a node located in the middle of a linked list
- Can successfully insert a node before the first node of a linked list
- Can successfully insert after a node in the middle of the linked list
- Can successfully insert a node after the last node of the linked list

**Unit tests must be passing before you submit your final solution code.**

## Stretch Goal

Once you’ve achieved a working solution, write an additional method to delete a node with the given value from the linked list.

## Written Class Notes


code challenge insert node of value of 5



## Read 6 - Ten Thousand Game 1

## Resources Link/Pages

- [How to use Random Module](https://www.pythonforbeginners.com/random/how-to-use-the-random-module-in-python)
- [What is Risk Analysis](https://www.edureka.co/blog/risk-analysis-in-software-testing/)
- [Test Coverage](https://martinfowler.com/bliki/TestCoverage.html)
- [Big O Notation](https://www.youtube.com/watch?v=v4cd1O4zkGw)

**Bookmark and Review**

- [Python Random](https://docs.python.org/3/library/random.html)
- [What is Dependency Injection](https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/) We won’t be covering this concept in depth until following class but it’s a big concept and needs some time to settle in.

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Random functions introduce variability and unpredictability enhancing simulation of real-world scenarios and generate diverse outcomes. Understanding risk analysis and test coverage ensure robust software development by systematically identifying potential risks, prioritizing them, and validating the effectiveness of test cases to achieve comprehensive code coverage, minimizing the chances of undetected errors.

## Reading Questions

1. How can the random module be utilized in Python to generate random numbers or make selections from a list, and what are some common functions available within the module?

The random module in Python is a powerful tool for generating random numbers and making selections from lists. Here are some key functions available in the random module:

1. **random():**

   - Generates random floating-point numbers between 0 and 1.
   - Example: `random.random()` produces a random value between 0 and 1.

2. **randint():**

   - Used to generate random integers within a specified range.
   - takes two argument as input(start of range, end of range)
   - gives an error if first argument is greater than second
   - Example: `random.randint(1, 10)` generates a random integer between 1 and 10.

3. **choice():**

   - Selects a random element from a collection (list, set, tuple, etc.).
   - Example: `random.choice(["red", "green", "blue"])` selects a random color from the list.

4. **choices():**

   - Selects multiple elements with replacement from a list.
   - Example: `random.choices(["red", "green", "blue"], k=3)` selects three values with replacement.

5. **shuffle():**

   - Shuffles the elements of a list in place.
   - Example: `random.shuffle(["red", "green", "blue"])` shuffles the order of elements in the list.

6. **randrange():**

   - Generates a randomly selected element from a given range with specified intervals.
   - takes three numbers (start, stop, step)
   - Example: `random.randrange(0, 100, 20)` selects a value from [0, 20, 40, 60, 80].

7. In the context of software development, what is risk analysis, and what are the key steps involved in conducting a risk analysis for a software project?

   - Risk analysis in software testing is a crucial process that involves identifying and prioritizing risks in applications or software projects. Highlight potential problem areas at the beginning of a project, Assist developers and managers in mitigating risks, Consider risks in the test plan, along with potential damage and solutions.

   - Certain risks are unavoidable, including:

     - Time allocated for testing.
     - Defect leakage due to complexity or size of the application.
     - Urgency from clients to deliver the project.
     - Incomplete requirements.
     - Tackling Unavoidable Risks:
       - Conduct Risk Assessment review meetings.
       - Allocate maximum resources to work on high-risk areas.
       - Create a Risk Assessment database for future use.
       - Identify and categorize risk magnitude indicators: high, medium, low.

   - Risk Magnitude Indicators:

     - High: Non-tolerable effect, may lead to significant losses.
     - Medium: Tolerable but not desirable, limited risk.
     - Low: Tolerable, little or no external exposure, no significant financial loss.

   - Risk Assessment:
     - Three perspectives of Risk Assessment: Effect, Cause, Likelihood.
       - Effect: Assess risk by determining the impact of conditions, events, or actions.
       - Cause: Assess risk by identifying the probable reason behind a problem.
       - Likelihood: Assess risk by stating the probability of a requirement not being satisfied.
     - Steps to Perform Risk Analysis:
       - Searching for risks.
       - Analyzing the impact of each individual risk.
       - Implementing measures for the identified risks.

8. What is test coverage and why is it an important (or potentially misleading) metric in software testing?

   - Test coverage, often referred to as code coverage, is a metric in software testing that measures the extent to which the source code of a program has been executed during testing. It helps identify the areas of code that have been tested and those that remain untested. Test coverage is expressed as a percentage, representing the ratio of tested code to the total codebase.

   - Potential Misinterpretations:
     - Test coverage is not a numeric representation of test quality. Merely aiming for a high coverage percentage can lead to misguided efforts, with a focus on quantity rather than the quality of tests.
     - Setting coverage percentages as rigid targets may encourage writing tests for the sake of reaching a number rather than thoughtful and meaningful testing.

9. What is Big O notation, and how is it used to describe the performance of an algorithm? Give an example of an everyday task (not software related) that demonstrates O(n) time complexity.

   - used to describe the performance or efficiency of an algorithm in terms of its input size, analyze, and compare the efficiency of different algorithms.

   - the example in the video that describes an everyday task that demonstrates O(n) time complexity is mowing a square plot of land. The runtime to mow the grass can be described as O(a) or O(s^2), where 'a' represents the amount of area in the plot and 's' represents the length of one side of the square. Both expressions essentially convey the same information about the algorithm's runtime scaling linearly with the input size.

## Things I want to know more about

- I still don't understand what risk analysis looks like when you're in the process of writing code

## Learning Journal

### Reflection

Write a brief reflection on your learning today, or use the prompt below to get started.

Consider the following quote from the article linked above:

> “What motivates adults to find time for their learning in their busy schedule? Mostly intrinsic motivators.”

In other words, adults are motivated by internal forces rather than by external expectations, and your learning journal provides an outlet for considering and noting those internal forces. Which of your internal forces for learning can you concretely identify?

- My primary motivation lies in career advancement, self-development, self-confidence, and better quality of life. I aim to transition into a more fulfilling and lucrative field, and acquiring web development skills is a strategic move to align my career with current market demands. I also feel like no matter what it is I'm learning there's always some self-confidence I can gain from it that makes me feel like 'hey I learned something that might be useful someday' and the act of knowing something is always a great self-development booster as well.
