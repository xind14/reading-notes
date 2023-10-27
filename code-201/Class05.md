# Class 5 - Images, Color, Text, and More Work with Functions

## Lab 5 - a: Fun with Functions, b: Finish the About Me project, c: CSS Selector Practice

## Setup

### 5a

> You are being given starter code for today, in the index.html and app.js files inside of this directory. The success of your code will be determined by whether it passes tests that are in the tests.js file. You do not need to do anything with tests.js, though you should take a look at it to see how it works.

- Steps to create your repo using the template:

  - Click the green Use this template button

  - Name your repo

  - Click the green Create repository from template button

- Here are a couple of things to keep in mind:

  - Create a new branch for each code problem, and merge each branch into main on GitHub (and then pull back into main on your laptop!) when the problem is completed. Do the problems in order. Don’t forget to pull the updated main branch from GitHub into your local main branch each time you merge a pull request, then make a new branch from main for the next problem.

  - Place no function calls in your code, unless inside of another function. Everything should be run by hand from the console. This is to give you additional practice using the console and practice efficient app-switching processes.

### 5b

> Deploy your app to GitHub Pages and add any additional final touches to your CSS. Run a Lighthouse report making sure your site scores between the 50-65 range and add a screenshot of your score to your README.md. Make sure your app is complete and meets all of the requirements from the prior labs. Remove any commented out code or console logs including any commented out console logs that were used in the questionnaire.

### 5c

> Complete all 32 levels of the [CSS Diner](https://flukeout.github.io/) tutorial. Reference [MDN CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

1. [CSS Diner Completed Notes](CSS-Diner.md)

## Written Class Notes

### Describe and Define

- Image formats (JPG, GIF, PNG) and the strengths/weaknesses of each format.
- The importance of GitHub and branches.

### Answer

1. The `<img>` tag has what 2 required attributes?

2. What is the difference between Serif and Sans-serif fonts?

3. What is the purpose of branching?

4. Fill in the blank: To create a new branch in the terminal, use `git checkout ____ <branch name>`.

5. What is a PR or pull request?

## Read - Images, Color, Text

## Resources Link/Pages

### HTML Media

1. [HTML Media](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding)
2. [Using Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
3. [Common Image Types](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
4. [Choosing Image Formats](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#choosing_an_image_format)

### Learn CSS

1. [Learn CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
2. [Using Color in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
3. [Styling HTML Text Elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- Knowing how images work in HTML is important because it adds to the visual look of a webpage and it can show information better than what is written or even enhance what is written. Understanding how to use colors helps in creating a more unified design of a webpage which can improve accessibility.

### HTML Media

1. What is a real world use case for the `alt` attribute being used in a website?

   - You can use to provide a simple text description of a picture. It is accessibility friendly because for people who need a screen reader, they can hear a description of the image.

2. How can you improve accessibility of images in an HTML document?

   - Use the `alt` attribute for every image and including a concise and accurate description of what the image is.
   - If the image is important try to add more details in the body of text
   - If the image is for decoration add an empty `alt` so that a screen reader doesn't waste time on it.

3. Provide an example of when the `figure` element would be useful in an HTML document.

   - The `figure` element is a semantic container for figures and its caption. Captions are useful for even people who can see an image, but `alt` is useful for people who can't see, so they shouldn't say the same thing.
   - `Figure`element is useful when you want to group content with a caption. You can use it for tables, images, videos, audios anything you would like an additional description to go along with it.

4. Describe the difference between a `gif` image and an `svg` image, pretend you are explaining to an elder in your community.

   - GIFs are a type of image that move like a flip book or a mini video is playing inside an image. They are good for short loops of animation and are small in size, so the quality is lower vs SVG whose quality doesn't diminish when you change the size. Instead of animations, SVGS are often used for things like logos where it's important quality isn't lost when changing it.
   - `GIF`: Graphics Interchcange Format, ideal for simple images and animation
     ![Example of a GIF, moving picture](https://upload.wikimedia.org/wikipedia/commons/d/d6/Wikipedia_Giphy_stickers_2019_Example_2.gif?20190826160353)
   - `SVG`: Scalable Vector Graphics, ideal for user interface elements like diagrams, icons, need to be drawn accurately in all sizes.

5. What image type would you use to display a screenshot on your website and why?
   - Depending on what the image is and if a loss in quality isn't important, JPEG and PNG can be used, but PNG is the better option if the screenshot has important text since text can be unclear when compressed under JPEG
   - `JPEG`: joint photographic experts group, good for compression of still images
   - `PNG`: portable network graphics, PNG preferred over JPEG for better copy of course image.

### Learn CSS

1. Describe the difference between foreground and background colors of an HTML element, pretend you are talking to someone with no technical knowledge.

   - If you understand the word foreground and background, it is pretty self-explanatory. If you ever written a word document or read a book. Foreground color would be the whatever color ink the text of a book is written and the foreground would be the page color.

2. Your friend asks you to give his colorless blog website a touch up. How would you use color to give his blog some character?

   - I would start with a background color and select any color besides solid white or black since it can strain people's eyes. Whatever background color is chosen, I would use a color palette picker and work with colors that best match the background. I like lighter colors of bright colors so a lighter orange or pastel yellows. Foreground colors need to be darker if you're choosing a lighter background. Black is my default for paragraph texts and for things like headings, I like darker shades of fun colors that can still contrast against the lighter background.

3. What should you consider when choosing fonts for an HTML document?

   - It depends on what the content is and also how easy it is to read it. Fonts should be clear and legible. For body texts select a professional looking font vs really funky ones. Try not to use heavily colored fonts for texts that are important.For headers or titles consider the font size to highlight importance.

4. What do `font-size`, `font-weight`, and `font-style` do to HTML text elements?

   - `font-size`: changes the size of the text
   - `font-weight`: changes the boldness or thickness of the text
   - `font-style`: changes the italics of text

5. Describe two ways you could add spacing around the characters displayed in an `h1` element.
   - `letter-spacing`: changes the horizontal spread between characters. It causes characters to spread apart when positive value or brings letters closer when negative value.
   - `word-spacing`: changes the space between words and similar to `letter-spacing` words spread apart when positive value and come closer together when negative.

## Things I want to know more about

- I find that when I use a color picker, the colors I choose might not be pleasing to others. Is there a universal color scheme that equates to better accessability?

## Career 5 - Partner Power Hour: Report 1

> If there is no live presentation on campus in this module, select the appropriate presentation from the list below. All presenters are open to connections and invite you to reach out to them, so that you can to learn more about them, their company, and the industry.

[Web Accessibility 101 - Dezireé Teague](https://www.youtube.com/watch?v=JW0K87kaDng)

[CSS 101: Transitions & Animations - Brian Nations](https://www.youtube.com/watch?v=sqc-5AFKwxM)

[Dealing with Workplace Ambiguity - Amanda Iverson](https://www.youtube.com/watch?v=mndjhcnChGI)

`Web Accessibility 101 - Dezireé Teague`

1. Share one or two ways the speaker’s information will change your approach to your career transition.

   - She gave a good advice near the end of her talk and mentioned that especially for someone just starting out, go for a company that matches something you're interested in or related to your background and then if you can contact then and if they're not hiring, ask for a position they don't have on their site.
   - When we think about user stories in the future tried to think about one person who has a disability and that will change how you design and structure your website.

2. List a few key take-aways from this presentation.

   - The benefits of making webpages accessible:
     - improves the user experience for everyone
     - avoid legal issues
     - reach wider audiences
     - economic gain
   - Identify any transferable kills that make you resourceful and adaptable
   - ADA title three said no discrimination against someone with a disability in any place of public use and the web is public

3. Share a screenshot of your LinkedIn connection request, including a nicely worded note, sent to the speaker or someone else at their company.

![Linkedin Connection Message to Dezireé Teague](img/deziree-teague.png)

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

> “Adults need to know why to learn something; as soon as they answer this question, they are ready to start.”

The **why** applies to both large-scale (learning web development as a new profession) and small-scale (learning a particular tool or technique), and your learning journal is an excellent place to identify and contemplate those **whys**. They are important. So… what is your **why**?

- I think my why is personal growth. Yes I want money, but I want what follows that, which is a stable future that includes growth in many aspect of my life as I age. While super hard and stressful right now, when I do understand a concept, I have started to become excited about it. I see gaining these new understanding of tools, techniques, and web development overall is giving me a sense of accomplishment and a little bit of confidence.
