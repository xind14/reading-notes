# Class 9 - Forms and Events

## Lab 9 - Salmon Cookies Pt. 4

## Setup

> Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

1. Create a new HTML form to accept the information for a new cookie stand. Be sure to utilize the `<fieldset>` tag to help you style it.

2. Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

3. Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

4. If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

    - HINT: The document.querySelectorAll() method might be useful when re-rendering your footer row [Document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).

5. Run your Lighthouse Accessibility report looking for a score between 65-80. Make adjustments as needed. Add a screenshot of your score to your README.md.

6. Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that’s when you want to consider refactoring.

7. Validate your html through [HTML5 validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).

8. Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.

## Written Class Notes

### Describe and Define

- JavaScript's `addEventListener()`.
- Anonymous functions and callbacks.
- Syntax and operations of an HTML `<form>`.
- Form structure, using semantic tags, including `<input>`, `<label>`, and `<fieldset>`.


### Answer


1. What is a JavaScript Event?

2. What 2 arguments do we need to pass into the `addEventListener()` method for it to run correctly?

3. What is a callback function?

4. An HTML form is used to collect `________` input.

5. An `<input>` element can be displayed in many ways, depending on the `_______` attribute.

5. What does `event.preventDefault()` do?











## Read 9 - Forms and JS Events

Bookmark and Review: [HTML5 Input Types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types) and [Event Reference and Listings](https://developer.mozilla.org/en-US/docs/Web/Events)

## Resources Link/Pages

### HTML Forms

1. [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
2. [Your First Web Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
3. [How to Structure a Web Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)

### Learn JS

1. [Learn JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
2. [Introduction To Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

### HTML Forms

1. Why are forms so important in web development?


2. When designing a form, what are some key things to keep in mind when it comes to user experience?


3. List 5 form elements and explain their importance.

### Learn JS

1. How would you describe events to a non-technical friend?


2. When using the `addEventListener()` method, what 2 arguments will you need to provide?


3. Describe the event object. Why is the target within the event object useful?


4. What is the difference between event bubbling and event capturing?

## Things I want to know more about

If you utilize any content directly from the reading sources, be sure to identify what you are quoting, and cite the source.

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

Consider the “learning pyramid as shown in the image below. Do you find that matches the way that you learn, or would you weight the activities differently? If so, how?

![Learning Pyramid Retention Rates](https://codefellows.github.io/common_curriculum/readings_and_reflections/learning-pyramid.jpg)

