# Learn ES6 Arrow Functions in JavaScript

## ES6 Arrow Functions

This assignment is designed to introduce you to some features in [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/), otherwise known as ES6. From this point on, you are expected to use these features.

## Overview: Arrow Functions

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [caniuse.com](https://caniuse.com/#search=arrow%20functions)

By now you should be comfortable writing [function expressions](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function) and [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function). Arrow functions are a shorter, more concise way to write a JavaScript function. The syntax might seem strange at first, so try to use arrow functions wherever you can and they will become second nature in no time.

There are a few caveats with arrow functions, though. Most importantly, the `this` context is not reset within an arrow function. The value of `this` is therefore the same as the `this` of the enclosing scope (the surrounding non-arrow function). If there isn’t a non-arrow function scope surrounding, the `this` context will be, in the browser, the global window object.

Why does this happen? It happens because arrow functions retain the `this` value of the enclosing functional scope. Therefore, you will want to avoid using an arrow function in a constructor (where we need the contextual `this` to be the object we are building) or any method that needs to use `this` to behave properly.

## Assignment Tasks

1. Create a new repo in your GitHub account called `arrow-functions`. Clone the empty repo to your dev environment.
2. Download and unzip [the starter code](https://codefellows.github.io/code-301-guide/curriculum/prework/arrow-functions/starter-code.zip) onto your computer.
3. Once you have unzipped the file, copy the contents of the folder named `starter-code` into your newly-created repo. Make an initial commit with the unchanged starter code.
4. Proceed to work on a well-named branch. As you work, remember to add, commit, and push regularly.
5. The `app.js` file contains examples of function expressions, as you are accustomed to seeing. Work through steps 1-9, reading the notes and reviewing the refactored samples.
6. For each of these steps, uncomment the console.log line. Open the `index.html` file in the browser and verify the correct output in the developer console.
7. To complete step 10, refactor the function expressions one at a time. Uncomment the console.log line and use it to check that the output is the same after you have completed the refactoring process.
8. To complete step 11, uncomment the two console.log lines and observe the output in the developer console in the browser. Answer the corresponding questions.

## Additional resources

[“JavaScript Arrow Functions” by Wes Bos](https://wesbos.com/arrow-functions/)

## Submission Instructions

1. When finished, make a PR from your branch to main, and merge it.
2. Submit a link to your PR. You can link to a pull request even if the pull request is already merged or closed.
3. Add a comment in your Canvas assignment which includes the following:
    - A question within the context of this lab assignment
    - An observation about the lab assignment, or related ‘Ah-hah!’ moment
    - How long you spent working on this assignment


## Readings

Arrow Function Basics:

An arrow function is a more concise way to write functions in JavaScript. It's like a shorthand version of the traditional function expression, but with some differences.

Here are the key points:

1. Compact Syntax:
    - Arrow functions are a shorter way to write functions.
    - They are useful for short, simple functions.
2. No `this` Binding:
    - Arrow functions don't have their own `this` binding.
    - This means they don't create their own context; they inherit `this` from the surrounding code.
3. No `arguments` Binding:
    - Arrow functions also don't have their own `arguments` object.
    - Instead, they inherit the `arguments` from the enclosing (surrounding) function or scope.
4. Not for Object Methods:
    - Arrow functions are not suitable for methods in objects. Regular functions are better for that.
5. Not for Constructors:
    - You can't use arrow functions as constructors (functions that create objects using `new`).

In JavaScript, the keyword `this` is a special keyword that refers to the current object. However, arrow functions behave a bit differently when it comes to `this`.
`this` in Arrow Functions:

1. When you use `this` inside an arrow function, it doesn't get its own `this` context. Instead, it uses the `this`value from the surrounding (enclosing) scope—the function or block that contains the arrow function.
2. Global Object Issue:
    - If there's no non-arrow function surrounding the arrow function (like in the global scope), this in the arrow function will refer to the global object (which is `window` in browsers).
3. Constructor and Methods Consideration:
    - The problem arises when you use arrow functions in certain situations, like constructors (functions used to create objects) or methods (functions associated with objects). In these cases, you often want `this` to refer to the object being created or the object the method is called on.
4. Why It Happens:
    - Arrow functions were designed to keep things concise and to avoid some of the complexities related to the `this` keyword in regular functions. However, in certain cases, like constructors and methods where you depend on a specific `this` context, arrow functions might not behave as expected.
5. Avoiding Arrow Functions in Constructors and Methods:
    - In the explanation, it suggests that you should avoid using arrow functions in constructors or methods where you rely on `this` to behave correctly. Instead, stick to regular functions for these situations to ensure the right `this `context is maintained.


### Using `this` in Arrow Functions

In regular functions, `this` is dynamic and depends on how a function is called. But with arrow functions, it doesn't get its own `this`. Instead, it "borrows" the `this` from the surrounding scope, meaning the function or block that contains the arrow function.

**Example:**

    function regularFunction() {
      console.log(this); // 'this' here depends on how the function is called
    }

    const arrowFunction = () => {
      console.log(this); // 'this' here comes from the surrounding scope
    };

    regularFunction(); // 'this' is determined by the function call
    arrowFunction();   // 'this' is borrowed from the surrounding scope


### Global Object Issue

When an arrow function is used in the global scope (outside of any other function), there's no surrounding non-arrow function to provide a `this`. In this case, `this` in the arrow function will refer to the global object, which is `window` in a browser environment.

**Example:**

    const globalArrowFunction = () => {
      console.log(this); // 'this' here refers to the global object (e.g., window in browsers)
    };

    globalArrowFunction(); // 'this' is the global object


This behavior can be problematic when you expect `this` to refer to a specific object but it ends up pointing to the global object.

