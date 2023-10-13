# Class 6 - Activate Web Pages with JavaScript

![JS logo](https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png)

## Lab 6 - Activate Web Pages with JavaScript

### Requirements

1. Add at least 3 dynamic component to web page.Can be based on user unput ot other dynamic input
2. At least one dynamic component should be based on user input.
3. At least one dynamic component should use a conditional statement to determine the output.
4. Stretch goals: Try out the `confirm()` function, in addition to `prompt()`. When’s the right time to use this?

### Written Class Notes

- In HTML `<script></script>` is used for JS, always put after body somewhere. Nothing lives between head and body
- External Js is `script.js or app.js`
- **Variables**: container of info. There are 4.
  - `let`: means info can be changed later on
  - `const`: means constant, unchangable
  - `var and (none)`: **DO NOT USE**
- Three data types code 102 focuses on:
  - **String**: they are texts and use ' instead of "
  - **Boolean**: true or false
  - **Number**: no quotation marks
- The = is an assignment operator, it just gives something value, does not say they are equal
  - Two = evalutes if something is loosely true
  - Three = is strictly equivalent, data type must match
- `alert()`: add pop up content in between parenthesis
- `prompt()`: gets input from user, add content in between parenthesis that user can reply to
- `const userAnswer=prompt()`
- `console.log()`: add 'User typed: ' + useAnswers. This immediately shows answer in console when you right click on site and inspect
- `document.write()`: puts something on the page
- Conditional logic: if this is true execture this code
  - `if (this is true){execture this code}`
  - ex: if `(){document.write(this);} else if (){checks if (other condition is not met then execute this);} else {has no () condition}`
- Example ideas of dynamic components:
  - Prompt for user's name, and show it in a greeting.
  - Prompt for age or birthday, and show selective content based on age
  - Prompt for the user's city or state, and, for certain values, give specific info (Ranking? Weather guess?).

## Read 6 - Activate Web Pages with JavaScript Reflection and Discussion

### Resources Link/Pages

1. [JS Intro Paragraph](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [Introduction to Javascript - Basic Output](https://code-maven.com/introduction-to-javascript)
3. [Javascript Input with Prompt and Confirm](https://code-maven.com/javascript-input-with-prompt-and-confirm)
4. [Variables](https://www.w3schools.com/js/js_variables.asp)
5. [How Computers Work - Playlist](https://www.youtube.com/playlist?list=PLzdnOPI1iJNcsRwJhvksEo1tJqjIqWbN-)
   - They take `input`: what you tell computer to do
   - `Store it and process it`: takes from memory to maniplate or change through commands and it sends information back to stored memory and continues this process until information is ready to be sent to output.
   - `Output`: Depends on what the computer is designed to do. When connected to the internet, output from a computer is input to another
   - On/off state of a wire = bit, smallest piece of info a computer can store
   - `Binary`: 1 and 0 system used in computers
   - `Circuits`: electronic wires that move electricity and help operations in devices
   - `CPU`: Central Processing Unit, performs instructions
   - `Hardware`: physical parts of a computer
   - `Software`: Programs that give hardware instructions
   - `Operating System`: software that manages hardware and runs programs

### Answer

1. What are variables in JavaScript?
   - Containers for storing data
2. What does it mean to declare a variable?
   - Assigning a name to future values
3. What is an “assignment” operator, and what does it do?
   - Its = and it gives value to a variable
4. What is information received from the user called?
   - Input
