# Class 3 - Lists, The Box Model, and Loops

## Lab 3 - Extend the About Me project

## Setup

> Continue to build off of your lab 02 by adding additional functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

1. As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
    - Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
   
    - Convert your work experience and education summary into an unordered list using HTML

2. As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
    - Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
    
    - Indicates through an alert if the guess is “too high” or “too low”.

    - It should give the user exactly four opportunities to get the correct answer.

    - After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

3. As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
    - Add a 7th question that has multiple possible correct answers that are stored in an array.

    - Give the user 6 attempts to guess the correct answer.

    - The guesses will end once the user guesses a correct answer or they run out of attempts.

    - Display all the possible correct answers to the user.

    - Consider using a loop of some sort for this question.

4. As a user, I would like to know my final score so that I can know how well I did.
    - Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

5. Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.
    - Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
    - Add a screenshot of your score to your README.md file.

> In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add additional CSS to style your HTML page. Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as `.includes()` and `.join()`.



## Written Class Notes

### Describe and Define

- Arrays
- Looping in JavaScript (`for`, `while`)
- Conditional Logic using `if`
- The CSS box model

### Answer

1. Every item in an array is assigned a specific `_________` or location within the array.

2. All conditionals evaluate as `_________` or `_________`.

3. What is control flow in JavaScript?

4. What is a loop? What is an iteration?

## Read 3 - HTML Lists, Control Flow with JS, and the CSS Box Model

## Resources Link/Pages

### Learn HTML

1. [Learn HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [Ordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
3. [Unordered Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

### Learn CSS

1. [Learn CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
2. [The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)


### Learn JS

1. [Learn JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
2. [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
3. [Operators and Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
4. [Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
5. [Loops](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- Understanding the box model can help with layout design, helping with structuring amongst a lot of elements used, Arrays, operators, and expressions can help with data manipulation. Conditional and loops help create a dynamic webpage and combining all these together creates a well developed webpage.

### Learn HTML

1. When should you use an `unordered list` in your HTML document?
    - `Unordered lists <ul>` are used when the order of whatever content you are writing does not matter. If everything can be read in equal importance like notes or writing down a grocery list you can use an `unordered list` vs step-by-step instructions that probably need an ordered list because following directions from start to finish would make the final thing. 

2. How do you change the `bullet style` of unordered list items?
    - In a CSS file you can use the `list-style-type` property for example 

                ul {
            list-style-type: square or circle etc;
                }
3. When should you use an `ordered list` vs an `unordered list` in your HTML document?
    - You should use an `ordered list <ol>` when the content you're listing only makes sense when it needs to be written in a specific order. You should use `unordered lists <ul>` when the sequence of the content does not matter. `<ol` are usually listed as numbers vs `<ul>` which are bullet points. 

4. Describe two ways you can change the numbers on `list items` provided by an `ordered list`?
    1. You can use the `start` attribute to change the starting number you want the list to start with. For example: 

            <ol start="3">
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
            Would start the list as
             3. Item 1
             4. Item 2
    2. You can use the `type` attribute to change the numbering style type. You can have `a = lowercase` or `A uppercase` etc. For example: 

            <ol type="A">
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
            Would list it as
            A. Item 1
            B. Item 2

### Learn CSS

1. Describe the CSS properties of `margin` and `padding` as characters in a story. What is their role in a story titled: “The Box Model”?
    - Marg and Paddy both work together to protect the content within their space. Paddy is the closest to content and always embraced things with his padding. Marg is very protective and wraps Paddy and content inside from others like Marg. She just creates extra spaces and walls so others don't intrude. 

2. List and describe the four parts of an HTML elements box as referred to by the `box model`.
    - In order from the inside to the outside of the box:
    1. `Content Box`: the place when your content is written
    2. `Padding Box`: the white space around the contents box and it gives extra space between the content and border. 
    3. `Border Box`: the box that wraps around the padding and content.
    4. `Margin Box`: the white space that wraps around the other three boxes and separates it from other elements. 

### Learn JS

1. What `data types` can you store inside of an `Array`?
    - An `array` is a way to store a list of items inside a variable. You use square brackets `[ ]` and list items inside with quotes if they are `string` separated by a comma. You can store many types of data like `strings, numbers, objects etc`
        - `const trees = ["oak", "maple", "fir"];`
        - `const numbers = [1, 2, 3];`

2. Is the `people` array a valid JavaScript array? If so, how can I access the values stored? If not, why?

        `const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];`
    
    - I believe this should be a valid JS array because it's a `multidimentionsal array` with data of three people. You can access values stored inside other arrays by combining two sets of square brackets together. For example:

            people[0][0]; the first bracket would access the first inner array which is pete's information. The second bracket would access the first value of that inner array which would be the name pete


3. List five shorthand operators for assignment in javascript and describe what they do.
    - `Assignment`: `=` assigns the value on right to a variable on the left. For example: `let x = 10;`
    - `Addition Assignment`: `+=` adds the value on the right to the variable on the left and assigns result back to variable on the left. For example: `let num=2; num += 1` `num` would now be 3
    - `Subtraction Assignment`: `-=` subtracts the value on the right to the variable on the left and assigns result back to variable on the left. For example: `let num=2; num -= 1` `num` would now be 1
    - `Multiplication Assignment`: `*=` multiplies the value on the right to the variable on the left and assigns result back to variable on the left. For example: `let num=2; num *= 1` `num` would now be 2
    - `Division Assignment`: `/=` divides the value on the right to the variable on the left and assigns result back to variable on the left. For example: `let num=4; num /= 2` `num` would now be 2


4. Read the code below and evaluate the last `expression` and explain what the result would be and why.

        let a = 10;
        let b = 'dog';
        let c = false;

        // evaluate this
        (a + c) + b;

    - `a` is a number and `c` is false but is a `0` since it is in numbers context
    - `(a + c)` is evaluated first which is `10` now it becomes `10+b`
    - `b` is a string and when `+` is used with a number it will turn the number into a string so the final result would be the string `'10dog'`

5. Describe a real world example of when a conditional statement should be used in a JavaScript program.
    - In user authentication, conditional statements would be able to check the users input of user name and password and compare it to what is saved in the records. If they match, then a person can log in, but if it doesn't match you can make it display an error message or ask the user to try again.

6. Give an example of when a `Loop` is useful in JavaScript.
    - Like the example above a loop is useful in asking a user for multiple inputs until they enter a valid or correct answer. Or do something simple like print a certain amount of something.

## Things I want to know more about

- I really just want to know more about how to use JS in general in using conditionals and loops because I was struggling with it already when it was introduced in 102.

## Career 3 - Talk to your Network

Read: [How many jobs are found through networking really?](https://www.payscale.com/career-advice/many-jobs-found-networking/)

1. Arrange a 1:1 informational meeting with someone already in your network. 

2. Submit a discussion with a short summary of:
    - who you met with

    - how you are connected to them

    - what you learned about that person and their work

    - and how you can help them.

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started. 

> “For adult learners, their experience becomes the main resource of both their learning and the personal identity they have developed, as the richer and more diverse their experience, the more the diversity they can bring to their own learning.” 

In other words, your life experience in learning the things you did before learning code will make this new experience more meaningful for you, and reflection on all of your experiences is essential in maximizing what you can gain from your study at Code Fellows. How do you think your prior life and professional experience will help you in this new endeavor?

- This is only class 3 and I'm already stressed. My past experience has thought me patience. I think if I wasn't patient I would be way more stressed then I am now. My past jobs have also thought me how to be accountable, so knock-on-wood, but I haven't submitted late work ever in my life and don't intend to for this program. 