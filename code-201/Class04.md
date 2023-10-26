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

1. A function definition may also be referred to as a function `declaration` or a function `statement`.

2. Function `invoke` is used to execute the code within the function.

3. What are some popular values for the position property?
    - `Static`
    - `Relative`
    - `Absolute`
    - `Fixed`
    - `Sticky`

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

- Knowing CSS positioning is important as it helps with layout precision of elements and ensures formatting is consistent across all devices. Knowing how functions work in JS adds to the interactive aspect of web pages. It allows intake of user input, processing, and creating something responsive. Understanding how to do all these together creates an overall well-designed website.

### Learn HTML

1. To create a basic link, we wrap text or other content inside what element?
    - To wrap text in a link we use `<a>` element.
    - For example: `<a href="link">Whatever text you want the link to be clickable</a>.`

2. The `href` attribute contains what information?
    - The `href` links the web address you are connecting to.

3. What are some ways we can ensure links on our pages are accessible to all readers?
    - `Use clear link wording`: make sure to create concise but still descriptive link texts
    - `Keep link text short`: short and to the point words allow visual users to skim the page
    - `Avoid generic phrase`: still add description to link text. Avoid things like `click-here` or `link`

### CSS Layout

1. What is meant by “normal flow”?
    - It is the default position elements are laid out on a webpage when no CSS is used. The default display properties follow the two definitions in the next questions. 

2. What are a few differences between `block-level` and `inline` elements?
    - `Block-level`: these elements can already have existing properties in them like width, height, padding etc. Examples are `h1`, `<p>` and they start on new lines and fill up the full width of space available inside the parent element.
    - `Inline`: these elements do not have existing properties and do not start on new lines and do not take up all the space, but only as much width as necessary. Examples are `<a>`, `<strong>`

3. `Static` positioning is the default for every html element.

4. Name a few advantages to using absolute positioning on an element.
    - `Overlap`: it allows elements to overlap on top of other elements 
    - `Precise Position`: using the `top`, `bottom`, `left`, and `right` properties you can change values around to precisely place the element where you want it.
    - `Isolation`: it allows the element to be in its own "layer" so it doesn't mess with the layout of other elements. 

5. What is a key difference between fixed positioning and absolute positioning?
    - `Fixed Positioning`: the element is positioned relative to the view of the browser window, it doesn't move and stays fixed where it is when a user scrolls. Fixed is useful for elements like a navigation bar that you want always at the top.
    - `Absolute Positioning`: the element is positioned to the nearest parent element, it moves with the content when the user scrolls.


### Learn JS

1. Describe the difference between a function declaration and a function invocation.
    - `Function`: something in JS that allows you to store code that does one task and you can call the code when needed instead of typing out the same code over and over.
    - `Declaration`: when you define a function in JS. Use `function` follow by name of function, parameters in parentheses, and your code in curly brackets. For example:

            function name (parameters) {
                function code
            }

    - `Invoking`: this is the process of calling or executing the function. You use the function name and the an argument in parenthesis. `name (argument);`

2. What is the difference between a parameter and an argument?
    - `Parameter`: it's the variable listed in the function declaration, whereas an
    - `Argument`: is the actual variable the function uses when invoked.

### Miscellaneous

1. Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.
    - Greater Efficiency: I need to learn this because I take too much time now and it's bleeding into other aspects of my life. If I can learn to be efficient, I wouldn't need to spend so much time debugging as well. I think working with someone else to help each other detect mistakes could help me see how others work efficiently and I might learn something new at how to look for bugs.
    - Social skills: I like the long-term career impacts the article listed. I want to work on a skill that makes me seem like I work well with others. I feel like I've lost some of that skill from being at home all the time now. 

## Things I want to know more about

- It said at the bottom of the positioning article that positioning isn't an ideal method to use for entire layouts, so what other ways are there that are more efficient? 

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

> “[Adult learners] demand that their learning is relevant to their real life issues, problems, and tasks, and that their education will boost their performance levels and help them live their lives in a better, and more satisfying way.”

In other words, understanding your motivation for learning contributes to the effectiveness of your learning, and your learning journal is a place to explore those thoughts. What are your motivations for learning?

- If I am completely honest my motivations are money. I am gambling on the chance that I can make a decent income because the average for this industry is on the higher end. But I recognize that is a short-term motivator to have because it might not be a strong driver later. I guess other motivations would be to advance my career or at least start one. I feel like I haven't had an adult job and I need to start building connections that'll give my future more stability. Along with money, I do like problem solving so I hope that becomes a better driving force for me later. I feel like I haven't had the time to sit down and reflect on how to stay motivated in my learning because of how fast pace this program is. I understand these assignments are time set side for those reflections but because I feel so slammed, the journal reflections feel like a chore rather than an opportunity to think. I do recognize it might be too early in the class for me to feel appreciative yet.