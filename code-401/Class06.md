# Class 6 - Guided Project 1

## Lab 6 - Assessing risk and prioritizing features

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


## Read 6 -  Ten Thousand Game 1

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



2. In the context of software development, what is risk analysis, and what are the key steps involved in conducting a risk analysis for a software project?

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

3. What is test coverage and why is it an important (or potentially misleading) metric in software testing?

    - Test coverage, often referred to as code coverage, is a metric in software testing that measures the extent to which the source code of a program has been executed during testing. It helps identify the areas of code that have been tested and those that remain untested. Test coverage is expressed as a percentage, representing the ratio of tested code to the total codebase.

    - Potential Misinterpretations:
      - Test coverage is not a numeric representation of test quality. Merely aiming for a high coverage percentage can lead to misguided efforts, with a focus on quantity rather than the quality of tests.
      - Setting coverage percentages as rigid targets may encourage writing tests for the sake of reaching a number rather than thoughtful and meaningful testing.


4. What is Big O notation, and how is it used to describe the performance of an algorithm? Give an example of an everyday task (not software related) that demonstrates O(n) time complexity.

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
