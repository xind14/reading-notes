# JS Tutorial for Beginners: Leanr JS in 1 hr
[JS Tutorial for Beginners - Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk)

 a parameter is a variable that is used in the definition of a function. It's a way for a function to receive inputs or data that it can then operate on. When you define a function, you specify its parameters, and when you call or invoke the function, you provide actual values or arguments for those parameters.



Certainly! Here's a list of common coding terminology and where you might encounter them in code:

1. **Variable:**
   - **Definition:** A named storage location for data in a program.
   - **Example in Code:**
     ```javascript
     let age = 25;
     ```
   - `let:` Variables declared with let are mutable, which means their values can be reassigned.
   - `const`: Variables declared with const are immutable, meaning their values cannot be reassigned after they are initially set.


2. **Function:**
   - **Definition:** A block of reusable code that performs a specific task.
   - **Example in Code:**
     ```javascript
     function greet(name) {
       console.log(`Hello, ${name}!`);
     }
     ```

3. **Parameter:**
   - **Definition:** A variable in a function definition. It represents an input that the function can accept.
   - **Example in Code:**
     ```javascript
     function addNumbers(a, b) {
       return a + b;
     }
     ```

4. **Argument:**
   - **Definition:** A value or expression passed to a function when it is called. It provides actual data for the parameters.
   - **Example in Code:**
     ```javascript
     let result = addNumbers(3, 5);
     ```

5. **Array:**
   - **Definition:** A data structure that stores a collection of elements, each identified by an index or a key.
   - **Example in Code:**
     ```javascript
     let numbers = [1, 2, 3, 4, 5];
     ```
   -

6. **Object:**
   - **Definition:** A collection of key-value pairs. Objects represent real-world entities and their properties.
   - **Example in Code:**
     ```javascript
     let person = { name: 'John', age: 30, city: 'New York' };
     ```
   - Dot notation: person.name = john

7. **Conditional Statements:**
   - **Definition:** Statements that control the flow of a program based on a specified condition.
   - **Example in Code:**
     ```javascript
     if (age >= 18) {
       console.log('You are an adult.');
     } else {
       console.log('You are a minor.');
     }
     ```

8. **Loop:**
   - **Definition:** A control flow statement that allows code to be executed repeatedly based on a condition.
   - **Example in Code:**
     ```javascript
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }
     ```

9. **String:**
   - **Definition:** A sequence of characters used to represent text.
   - **Example in Code:**
     ```javascript
     let message = 'Hello, World!';
     ```

10. **Boolean:**
    - **Definition:** A data type that represents either `true` or `false`.
    - **Example in Code:**
      ```javascript
      let isLogged = true;
      ```

11. **Event:**
    - **Definition:** An occurrence, usually initiated by the user, that triggers a response in a program.
    - **Example in Code:**
      ```javascript
      button.addEventListener('click', function() {
        console.log('Button clicked!');
      });
      ```

12. **DOM (Document Object Model):**
    - **Definition:** A programming interface for web documents. It represents the structure of a document as a tree of objects.
    - **Example in Code:**
      ```javascript
      document.getElementById('myElement').innerHTML = 'Hello, DOM!';
      ```

13. **Module:**
    - **Definition:** A way to organize code into separate files or units. Modules help in maintaining and structuring large codebases.
    - **Example in Code:**
      ```javascript
      // In one file (module1.js)
      export function sayHello() {
        console.log('Hello!');
      }

      // In another file
      import { sayHello } from './module1.js';
      sayHello();
      ```


- Primitive/Value Types: string, number, boolean, undefined, null
- Reference types: function, object, array
- Types of functions: perform a task, calculate a value,
- React:
  - Use PascalCasing naming components and functions so MessWow instead of camel casing which would be messWow
  - Cannot return more than one element so wrap with fragment which is <></>
  - When using map method, needs a unique key
  - Use braces to render anything dynamically so ternary operator: {condition ? <expression if true> : <expression if false>}
    - Or another way to write it is with logical AND {if this condition is true && the results=return this} if condition is false the result of entire expression is false and nothing will render so :null is not needed
    - handleTypeofEvent
    - Need to tell react we have a component that will change over time: use useState (in the arr we need a state variable and updater function) convention is to use [variable name, setVariableName]=useState
    - Handling events:
      - function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onClick="shoot()".

