# Class 4 - Links, Layouts, and Functions

## Lab 4 - Pair Programming and Functions

## Setup

1. How To Get Code Ready For Work
    - Note: Before starting these steps, make sure that both of your repositories are ‘clean’: in other words, everything is committed and pushed so that both the remote and local versions of your projects are in sync. This will prevent potential problems later.

    - Decide whose code you will work on first. The owner of that code (who will be the Navigator) provides the link to their GitHub repo to the other member of the pair (who will be the Driver). You can send this link over Slack.

    - The Driver follows the link to that repo and creates a fork of the repo in GitHub like we did in class.

    - The Driver then goes to their fork of the repo (the URL should have the Driver’s GitHub name in it) and copies the link to that repo (the link have the Driver’s GitHub name in it and should end in `.git`).

    - Inside of the Driver’s main work directory on their laptop, make a directory with your partner’s name and then navigate (`cd`) into it. From there, enter the command `git clone the-link-you-copied`. That will create a local version of the forked repo on the Driver’s laptop.

    - `cd` into that directory and enter `code .` in the terminal to open all of the files in VSCode.

    - Start working on the code!

2. Extend and Refine
    - You’ll be making some edits to each other’s sites. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (a-c-p) to place the code on GitHub and preserve a versioned history of your work.

    - Move the logic for all questions into functions: In this class we learned about functions, and now we’ll move the logic for the individual questions into separate functions, and call those functions to run the game.

    - In its most basic sense, this is pretty simple and straightforward: ‘wrap’ the logic and variables for a given question with `function someFuncNameYouChoose() {` at the beginning, and add a closing curly brace `}` at the end. To make the function execute, just call it afterwards: `someFuncNameYouChoose();` After completing this step the game should behave exactly as it did before. a-c-p

    - Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. a-c-p

3. Push to GitHub; Make a Pull Request
    - Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it’s time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a Pull Request, which we generally refer to as a PR.

    - From the Driver’s repo that is a fork of the Navigator’s repo, hit the green button that says ‘Create pull request’.

    - Follow the remaining steps as described onscreen and as shown here: [https://help.GitHub.com/articles/using-pull-requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).

    - The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the same directory, enter the command ‘git pull origin main’ to retrieve the modified code from GitHub.

    - When everything is finished for one person’s project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.

4. Pair Programming Basics
    - In pair programming, there are two developers working on a single body of code on a single computer.

    - One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The Driver will be working on the Navigator’s code by way of forking and cloning the Navigator’s repository.

    - The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.

    - The Navigator does not touch the keyboard, nor does the Navigator work on their laptop “on the side”. The Navigator is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the Navigator uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.

    - Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they’re working on together.

    - The lab time should be divided into two sections of approximately two hours each. At the halfway mark, you should swap roles and work on the other person’s code. Remember to watch the clock and determine the best point to swap roles.

    - In the case of an odd number of students, one group will have three members and you should rotate through three roles: Driver, Navigator, Observer. Each person should take on each role one time. You will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects.



## Written Class Notes

### Describe and Define

- The use and purpose of functions with JavaScript.
- The role of both a driver and a navigator in a pair programming session.
- The importance of positioning within CSS.

### Answer

1. A function definition may also be referred to as a function `__________` or a function `___________`.

2. Function `__________` is used to execute the code within the function.

3. What are some popular values for the position property?

### Resources Link/Pages

1. [Learn Layout](http://learnlayout.com) intro to layout
1. [CSS Zen Garden](http://www.csszengarden.com/) practice CSS styling
1. [Centering in CSS](https://css-tricks.com/centering-css-complete-guide/) tips for centering content horizontally and vertically.
1. [Floats in CSS](https://medium.freecodecamp.org/css-floats-explained-by-riding-an-escalator-57fa55232333)

## Read 4 - HTML Links, JS Functions, and Intro to CSS Layout

## Resources Link/Pages



### Learn HTML

1. [Learn HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
2. [Creating Hyperlinks](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

### CSS Layout

1. [CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
2. [Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
3. [Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)

### Learn JS

1. [Learn JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
2. [Functions - Reusable Blocks of Code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

### Miscellaneous

1. [6 Reasons for Pair Programming](https://www.codefellows.org/blog/6-reasons-for-pair-programming/)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

### Learn HTML

1. To create a basic link, we wrap text or other content inside what element?


2. The `href` attribute contains what information?


3. What are some ways we can ensure links on our pages are accessible to all readers?

### CSS Layout

1. What is meant by “normal flow”?


2. What are a few differences between `block-level` and `inline` elements?


3. ___ positioning is the default for every html element.


4. Name a few advantages to using absolute positioning on an element.


5. What is a key difference between fixed positioning and absolute positioning?

### Learn JS

1. Describe the difference between a function declaration and a function invocation.


2. What is the difference between a parameter and an argument?

### Miscellaneous

1. Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.



## Things I want to know more about


If you utilize any content directly from the reading sources, be sure to identify what you are quoting, and cite the source.

## Learning Journal 4 

Write a brief reflection on your learning today, or use the prompt below to get started.

> “[Adult learners] demand that their learning is relevant to their real life issues, problems, and tasks, and that their education will boost their performance levels and help them live their lives in a better, and more satisfying way.”

In other words, understanding your motivation for learning contributes to the effectiveness of your learning, and your learning journal is a place to explore those thoughts. What are your motivations for learning?