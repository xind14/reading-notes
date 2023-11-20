# Learn Prompt Engineering Basics

## Prompt Engineering

Read through sections of the Prompt Engineering Guide starting with [Basics](https://www.promptingguide.ai/introduction/basics) and continuing through [Examples](https://www.promptingguide.ai/introduction/examples). Skim the [Generating Code](https://www.promptingguide.ai/applications/coding) section for anything you may find useful when generating code using ChatGPT.

Using ChatGPT, create a prompt or series of prompts that can produce the following code:

    function Store(name, minimumCustomers, maximumCustomers, avgCookiesPerCustomer) {
      this.name = name;
      this.minimumCustomers = minimumCustomers;
      this.maximumCustomers = maximumCustomers;
      this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    }

Stretch Goal: Have ChatGPT convert this into an ES6 class and ask it to explain any changes that were made.

Submit the prompts used and the responses provided by ChatGPT.

1. Input:

```Do not write any other lines of code except a constructor function called Store that has the four parameters of name, minimumCustomers, maximumCustomers, avgCookiesPerCustomer and create four properties of the object being created using the names of the four parameters.```

2. Output:

        Certainly! Here's a simple constructor function in JavaScript called `Store` with the specified parameters:

        function Store(name, minimumCustomers, maximumCustomers, avgCookiesPerCustomer) {
          this.name = name;
          this.minimumCustomers = minimumCustomers;
          this.maximumCustomers = maximumCustomers;
          this.avgCookiesPerCustomer = avgCookiesPerCustomer;
        }


        In this constructor function:

        - `name`, `minimumCustomers`, `maximumCustomers`, and `avgCookiesPerCustomer` are the four parameters.
        - `this.name`, `this.minimumCustomers`, `this.maximumCustomers`, and `this.avgCookiesPerCustomer` are the four properties of the object being created, assigned values based on the provided parameters.

3. Input:

```Convert the simple constructor function above into ES6 class and explain the changes that were made
```
4. Output:

        Certainly! The simple constructor function can be converted into an ES6 class. Here's the equivalent ES6 class:


        class Store {
          constructor(name, minimumCustomers, maximumCustomers, avgCookiesPerCustomer) {
            this.name = name;
            this.minimumCustomers = minimumCustomers;
            this.maximumCustomers = maximumCustomers;
            this.avgCookiesPerCustomer = avgCookiesPerCustomer;
          }
        }
        ```

        **Explanation of Changes:**

        1. **Class Declaration:**
          - In ES6, we use the `class` keyword to declare a class.

        2. **Constructor Method:**
          - The constructor function is replaced by a special method named `constructor` within the class.
          - Parameters are listed within the parentheses of the `constructor` method.

        3. **`this` Keyword:**
          - The `this` keyword is used to refer to the instance of the class.
          - Properties are assigned to the instance using `this.propertyName = parameterValue`.

        4. **No `function` Keyword:**
          - In the ES6 class syntax, you don't need the `function` keyword when defining methods, including the constructor.

        The conversion to an ES6 class primarily involves syntax changes to conform to the class and method structure introduced in ECMAScript 2015 (ES6). The functionality remains the same, but the syntax is more concise and aligns with the class-oriented paradigm introduced in modern JavaScript.





## Readings


A prompt contains any of the following elements:

1. Instruction - a specific task or instruction you want the model to perform
2. Context - external information or additional context that can steer the model to better responses
3. Input Data - the input or question that we are interested to find a response for
4. Output Indicator - the type or format of the output.

You do not need all the four elements for a prompt and the format depends on the task at hand. We will touch on more concrete examples in upcoming guides.
