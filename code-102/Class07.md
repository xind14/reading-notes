# Class 7 - Programming with JavaScript

![JS Loop example](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUk0TD4doxWMN4FuPwRY6JyYznV_69mO8SjCwc0fPB9uTfYKdDBH0oomxfo7C_NBoCbZ0&usqp=CAU)

## Lab 7 - Programming with JavaScript

### Requirements

1. Use functions to improve the clarity and readability of your code.
2. Wrap related steps into a single function. Be sure you are properly defining the function, calling it, and getting the return value you expect.
3. Can you see how you might use just a single `<script>` tag with a `src` attribute to access your JS, and then specific function calls throughout the rest of your page?
4. Add a check to the user input you are getting, to see if the initial user input is an acceptable value. If not, present the user with an error message and a second chance to enter a proper value.

### Written Class Notes

- `function askName (){} let userName = prompt () console.log(userName)` in HTML use `<script> askName()</script>` This last part is invoking in HTML
- Whatever declared in one function only exists within that function. Add return (function name) and assign the function with let at the beginning.
- `function name (parameter){logic}`

## Read 7 - Programming with JavaScript Reflection and Discussion

### Resources Link/Pages

1. [MDN Control Flow](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)
2. [Functions](https://www.w3schools.com/js/js_functions.asp)
    - They are blocks of code that do specific tasks
    - **Invoke**: Executes code inside function
    - `return`: function stops executing
3. [Operators](https://www.w3schools.com/js/js_operators.asp)
    - Types of operators: Arithmetic Operators, Assignment Operators, Comparison Operators, String Operators, Logical Operators, Bitwise Operators, Ternary Operators, Type Operators
          - Arithmetic perform arithmetic on numnbers (+, -, *, /)
          - Assignment adds value to variable (+=)
          - Comparison (==, ===, !=)
          - Adding a number and a string will return a string and combine two value together (4+'2'='42')
4. [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
5. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### Answer

1. What is `control flow`?
    - The order in which computer execute a script, looking from start to finish but also how the script structure is as it can affect order of execution.
2. What is a JavaScript `function`?
    - Blocks of code that do specific tasks
3. What does it mean to `invoke` - or `call` - a function?
    - Calling the function will tell the code inside the function when to execute it.
4. What are the parenthesis `()` for when you define a function?
    - Its to specify the parameters that the function accepts 
