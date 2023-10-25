# Class 11 - Audio and Video in HTML; Domain Modeling Revisited

## Lab 11 - Odd Duck Products Pt. 1

## Setup

1. As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

    - Create a constructor function that creates an object associated with each product, and has the following properties:

      - Name of the product
      - File path of image
      - Times the image has been shown
    - Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
    - For each of the three images, increment its property of times it has been shown by one.
    - Attach an event listener to the section of the HTML page where the images are going to be displayed.
    - Once the users ‘clicks’ a product, generate three new products for the user to pick from.

2. As a user, I would like to track the selections made by viewers so that I can determine which products to begin production on.

    - In the constructor function define a property to hold the number of times a product has been clicked.

    - After every selection by the viewer, update the newly added property to reflect if it was clicked.

3. As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.

    - By default, the user should be presented with 25 rounds of voting before ending the session.

    - Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

4. As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.

    - Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

    - After voting rounds have been completed, remove the event listeners on the product.

    - Add a button with the text `View Results`, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: `banana had 3 votes, and was seen 5 times`.

      - NOTE: Displayed product names should match the file name for the product. Example: the product represented with `dog-duck.jpg` should be displayed to the user as exactly “dog-duck” when the results are shown.

5. Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

    - In this module, try for a score higher than 80. Make necessary adjustments based on the report to achieve that score.

    - Add a screenshot of your score to your README.md file.

6. Developer Style Guide

    - Create a new repo for this multi-lab project called odd-duck.

    - Scaffold your repo with the usual README, CSS, JS, and HTML files, plus a img/ directory.

    - Include in your repository a .eslintrc.json file whose contents are copied from the eslintrc.json file in the class repository.

    - Retrieve the assets from the assets/ directory and place them in your image directory.

    - Do today’s work on a branch called lab11.

> This is an individual assignment today, but you are free to collaborate with classmates if you want. Just be sure that if you do, be sure to make note of that collaboration in your README file.



## Written Class Notes

### Describe and Define

- Audio and Video implementations in semantic HTML.
- User stories in a development environment.

### Answer

1. What is Object-Oriented Programming?

2. To use CSS Grid, the parent element (container) must have the `display` property set to what value?

3. The Array method of `_______` adds one or more elements to the end of an array.

4. The Array method of `_______` removes the **last** element from an array.

5. The Array method of `_______` removes the **first** element from an array.

6. The Array method of `_______` adds one or more elements to the beginning of an array.

7. The Array method of `_______` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.













## Read 11 - Audio, Video, Images

## Resources Link/Pages

Bookmark and Review: [Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) and [Other Embedding Technologies](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)

### Video and Audio Content

1. [Video and Audio Content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

### A Complete Guide To Grid

1. [A Complete Guide To Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Responsive Images

1. [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

### Video and Audio Content

1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.


2. Describe the use of the `src` and `controls` attributes in the `<video>` element.


3. Why is it important to have fallback content inside the `<video>` element?


4. Write a very short story where `<audio>` and `<video>` are characters.

### A Complete Guide To Grid

1. How does Grid layout differ from Flex?


2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.

### Responsive Images

1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?


2. Define the following `<img>` attributes `srcset` and `sizes`. Write an example of how they are used.


3. How is `srcset` more helpful for responsive images than CSS or JavaScript?

## Things I want to know more about

If you utilize any content directly from the reading sources, be sure to identify what you are quoting, and cite the source.

## Career 11 - Give Your 60 Second Professional Pitch

1. Use these resources to learn how to create your personal-professional pitch. Aim for your pitch to be 30 to 60 seconds. Submit a written version.

    - [Effective public speaking](https://www.youtube.com/watch?v=zZBJZ-dBVbE)

    - How to create a professional pitch: [Guide I](https://www.idealist.org/en/careers/a-quick-guide-to-writing-your-elevator-pitch) and [Guide II](broken link)

2. Be prepared to utilize your personal pitch on project demo day when introducing yourself. Use these questions to guide you as you write.

    - What were you doing before you decided to change careers?

    - Why did you decide to learn Software Development?
    - Why did you pick this specific skill?
    - Ideal environment you’d use this skill?
    - Previous experiences that give a boost to your new career in tech?

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

> There’s an old saying: “Experience is what you get when you didn’t get what you wanted.” What strategies do you use for learning from disappointments (both big and small) so that the net experience becomes productive and positive?

