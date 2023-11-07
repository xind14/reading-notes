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

    // Global Variables
    // elements, and counters, and state
    const goatsContainer = document.getElementById("goats");
    const reportContainer = document.getElementById("report");
    // querySelectorAll = list of elements
    // querySelector = 1 element
    const image1 = document.querySelector('#goats img:first-child');
    const image2 = document.querySelector('#goats img:nth-child(2)');

    const button = document.getElementById("showResults");

    // variable way:
    // let numClicksSoFAr = 0;
    // let numClicksAllowed = 5;
    // let allGoats = [];

    // The global "State" of the application
    let state = {
      numClicksSoFar: 0,
      numClicksAllowed: 5,
      allGoats: [],
    };


    // Constructor
    function Goat( name, image ) {
      this.name = name;
      this.imageFile = image;
      this.votes = 0;
      this.views = 0;
      state.allGoats.push(this);
    }


    // Helper Functions

    function renderGoats() {
      // pick 2 random goats from our array

      function pickRandomGoat() {
        return Math.floor( Math.random() * state.allGoats.length );
      }

      let goat1 = pickRandomGoat(); // 4
      let goat2 = pickRandomGoat(); // 6

      // If they are different to start with
      while( goat1 === goat2 ) {
        goat2 = pickRandomGoat();
      }

      // put the goats on screen
      // <img src="" alt="" />
      image1.src = state.allGoats[goat1].imageFile;
      image1.alt = state.allGoats[goat1].name;

      image2.src = state.allGoats[goat2].imageFile;
      image2.alt = state.allGoats[goat2].name;

      state.allGoats[goat1].views++;
      state.allGoats[goat2].views++;

    }

    function renderResultsButton() {
      button.style.display = "block";
    }

    function renderResults() {
      console.log("Showing the results");
    }

    function handleClick(event) {
    // Get the name from the alt tage of the image
    let goatName = event.target.alt;

    // Loop the array and find that goat, update the vote and stop
    for ( let i = 0; i < state.allGoats.length; i++ ) {
      if( goatName === state.allGoats[i].name ) {
        state.allGoats[i].votes++;
        break;
      }
    }

    state.numClicksSoFar++;

    if(state.numClicksSoFar >= state. numClicksAllowed) {
      // remove the event handler
      removeListener();
      // show the button which would let you render the results
      renderResultsButton();
    } else {
      renderGoats();
    }

    }

    function setupListeners() {
      // Old way = inline function
      // goatsContainer.addEventListener('click", function(event) { });

      // Better way: named callback
    goatsContainer.addEventListener("click", handleClick);
    button.addEventListener("click", renderResults)

    // Alternatively: have an event listener oneach images
    // image1.addEventListener("click", handleClick);
    // image2.addEventListener("click", handleClick);
    }

    function removeListener() {
    goatsContainer.removeEventListener("click", handleClick);
    }

    // Do I need to make these into variables????
    // If not (hint), how can I do it without making them variables?
    new Goat("Cruisin Goat", "images/cruisin-goat.jpg");
    new Goat("Float Your Goat", "images/float-your-goat.jpg");
    new Goat("Goat out of Hand", "images/goat-out-of-hand.jpg");
    new Goat("Kissing Goat", "images/kissing-goat.jpg");
    new Goat("Sassy!", "images/sassy-goat.jpg");
    new Goat("Smiling Goat", "images/smiling-goat.jpg");
    new Goat("Sweater Goat", "images/sweater-goat.jpg");

    renderGoats();
    setupListeners();a

    // debugger;


### Describe and Define

- Audio and Video implementations in semantic HTML.

  - Semantic HTML allows for the integration of audio and video elements seamlessly into web content. The `<audio>` and `<video>` elements are used to embed media files. Attributes such as `src` specify the source file, `controls` enable user interaction, and `autoplay` starts playback automatically.

- User stories in a development environment.
  - User stories are concise descriptions of a software feature told from the perspective of an end user. They follow the format: "As a `[user type]`, I want `[an action]` so that `[benefit/value].`" User stories help define the functionality from the user's perspective and guide development teams in creating features that meet users' needs.

### Answer

1. What is Object-Oriented Programming?

2. To use CSS Grid, the parent element (container) must have the `display` property set to what value?

   - `display: grid`

3. The Array method of `push()` adds one or more elements to the end of an array.

4. The Array method of `pop()` removes the **last** element from an array.

5. The Array method of `shift()` removes the **first** element from an array.

6. The Array method of `unshift()` adds one or more elements to the beginning of an array.

7. The Array method of `splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

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

- CSS Grid simplifies the process of creating complex layouts and with the incorporation of video and audio content increases cross browser capabilities and overall enhances user experience.

### Video and Audio Content

1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.

- Initially media content relied on something called `proprietary plugin-based` tech which is software owned by a company and not open source that allows developers to create plugins for it that adds functionality. But those had security and accessibility issues so now `video` and `<audio` elements are used in HTML.

2. Describe the use of the `src` and `controls` attributes in the `<video>` element.

- `src`: specifies the path to the embedded video file, similar to the `src` used in `<img>`
- `controls`: enables users to manage video and audio playback. It allows controls like play, pause, and volume adjustments, which is a useful accessibility issue.

3. Why is it important to have fallback content inside the `<video>` element?

- Some browsers do not support `<video>` so by using a `<p>` tag inside the `<video>`element it adds a direct link to the video file so the fallback is just an alternative way to access the video no matter the browser used.

4. Write a very short story where `<audio>` and `<video>` are characters.

There were two siblings who both grew up to have incredible artistic talent. Audi was a singer and vidi was a painter and filmmaker but honestly whatever she could image she could visually create. They both worked together on projects and artwork that created an immersive experience with imagery from vidi and sound from audi.

### A Complete Guide To Grid

1. How does Grid layout differ from Flex?

`Grid Layout`: you can create complex layouts by defining rows and columns, and placing items into specific grid cells versus...
`Flexbox`: a method to layout items in rows or columns by distributing space along an axis or in containers

-

2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.

- `Grid Container`: the parent element that holds all the grid items. Use `display: grid;` to an element, and it turns into a grid container. It creates a new grid formatting for its contents.
- `Grid Item`: the direct children of a `grid container`. They are the elements placed inside the grid cells. They can go across multiple rows and columns.
- `Grid Line`: the dividing lines that make up the structure of the grid. They separate the columns and rows and can be either horizontal (rows) or vertical (columns). Items can be placed on these grid lines or across multiple grid lines.

### Responsive Images

1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?

- It can improve user experience because responsive images can reduce page load times by taking into consideration the user's device capabilities like sending smaller images to smaller screens.

2. Define the following `<img>` attributes `srcset` and `sizes`. Write an example of how they are used.

- `srcset`: gives you the option to specify multiple images with their widths in pixels using the `w` unit instead of `px` and the browser uses that extra information to choose which image is more compatible based on the user's device.
- `sizes`:

3. How is `srcset` more helpful for responsive images than CSS or JavaScript?

- It gives the browser the chance to choose the appropriately sized image before the browsers rendering engine can interpret the code of the page written with CSS and JS. The browser can load faster before other languages are applied.

## Things I want to know more about

- I'm still not quite sure how responsive images or sites can take into consideration of every single browser and devices out there.

## Career 11 - Give Your 60 Second Professional Pitch

1. Use these resources to learn how to create your personal-professional pitch. Aim for your pitch to be 30 to 60 seconds. Submit a written version.

   - [Effective public speaking](https://www.youtube.com/watch?v=zZBJZ-dBVbE)

     - Rate of speech, strategic pauses
     - Body language : hands, pacing
     - Eye contact w/ audience
     - Practice
     - Don't write text but bullet points
     - Film yourself
     - Know who your audience is
     - Focus more on the topic and less on the aspect of your speech
     - Good first impression
     - Breathe, don't focus on perfection

   - How to create a professional pitch: [Guide I](https://www.idealist.org/en/careers/a-quick-guide-to-writing-your-elevator-pitch) and [Guide II](broken link)

     - **Summary:**

- **Elevator Pitch Basics:**

  - An elevator pitch should be 30 seconds or less.
  - Clearly state your skills or how you benefit a potential employer.
  - Have a clear goal or ask in your pitch.
  - The rest of the content is customizable.

- **Crafting Your Pitch:**

  - Define what you do well (skills) by focusing on your professional accomplishments or essential skill set.
  - Identify your greatest strength or the best compliment you've received about your skill (confidence).
  - Clearly state what you want to do, whether it's finding a job, learning a new skill, or seeking advice (goal).
  - Reflect on your motivation or the "why" behind your goal, emphasizing intrinsic motivators (motivation).

- **Putting It All Together:**

  - Customize your elevator pitch based on your skills, strengths, goals, and motivations.
  - Use concise language and specific examples to showcase your value.
  - Remember that your elevator pitch positions you as a solution and helps others understand how they can assist you.

- **Examples of Elevator Pitches:**

  - Example 1 (Martha, education student): Martha emphasizes her education background, practical teaching skills, and desire to work in a nonprofit to help students.
  - Example 2 (James, HR Manager): James highlights his expertise in considering multiple perspectives and aims to enhance his skills for creating ethical workplace cultures.
  - Example 3 (Katie, communications professional): Katie showcases her persuasive storytelling skills and seeks advice on transitioning to a role in production or videography for social impact start-ups.
  - Example 4 (Sonia, civil engineering and psychology professional): Sonia combines her skills in engineering and psychology, expressing her passion for social issues and desire to write about climate change for publications.

- **Key Takeaways:**
  - Elevator pitches are essential for networking and job hunting.
  - Customization, clarity, and confidence are crucial elements of a compelling elevator pitch.
  - Understanding your skills, strengths, goals, and motivations helps you craft an impactful pitch that resonates with your audience.

2. Be prepared to utilize your personal pitch on project demo day when introducing yourself. Use these questions to guide you as you write.

   - What were you doing before you decided to change careers?

     - Before deciding to change careers, I had graduated from college with a degree in environmental science. However, I realized that this field wasn't aligning with my long-term goals and aspirations. Feeling uncertain about my career path, I took the first job opportunity that came my way, working as a receptionist at a veterinary clinic. I quickly moved up the ranks to become the lead receptionist, and I've worked there for over two years. Despite the promotion, I felt stagnant and knew I needed a change to pursue a more fulfilling and stable career.

   - Why did you decide to learn Software Development?

     - I decided to learn software development because I recognized the growing demand for tech-related skills in the job market. Seeing the potential for stable career opportunities and financial growth, I chose to venture into the field of software development. I was drawn to the idea of working in a dynamic and ever-evolving industry, where creativity and problem-solving skills are highly valued.

   - Why did you pick this specific skill?
     - I specifically chose software development because of its versatility and the wide range of applications it offers. I was intrigued by the ability to create innovative solutions, whether it's developing user-friendly applications, designing impactful websites, or contributing to cutting-edge technology. The prospect of building something meaningful and tangible through coding appealed to my desire for creative expression and intellectual challenge.
   - Ideal environment you’d use this skill?

     - My ideal environment to apply my software development skills would be in a collaborative and innovative tech company. I envision working in a team-oriented setting where creativity is encouraged, and where I can contribute to projects that have a positive impact on society or the environment. I am particularly interested in roles that allow for continuous learning and growth, where I can collaborate with diverse professionals and contribute to the development of impactful software solutions.

   - Previous experiences that give a boost to your new career in tech?
     - My previous experiences as a lead receptionist have equipped me with valuable transferable skills that are highly applicable in the tech industry. Working in a fast-paced veterinary clinic honed my ability to multitask, solve problems on the spot, and communicate effectively, both with team members and clients. These skills are crucial in software development, where teamwork, adaptability, and clear communication are essential for project success. Additionally, my experience in a client-facing role has given me a unique perspective on user experience, which I believe will be valuable when creating user-friendly software applications.

3. Written Version

Hi there, I'm Xin Deng, and I'm starting an exciting journey from veterinary clinic team management to the forward-thinking world of software development. While working as a lead receptionist, I honed my multitasking and problem-solving skills. But, I felt stagnant and knew I needed a change to pursue a more fulfilling and stable career path that involved a lot more creativity and impact. I entered this field because it merges creativity with the potentials of technology. But what really motivates me is the opportunity to design user-friendly applications and be a part of pioneering innovations. I excel in environments where collaboration is central, and where progressive ideas come to life. My advantage lies in my background in client-facing roles, where I've come to understand the importance of seamless user interactions. I'm excited to apply this expertise in the tech industry. With strong problem-solving skills and effective communication abilities, I'm looking forward to making a valuable contribution to any software development team.

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

> There’s an old saying: “Experience is what you get when you didn’t get what you wanted.” What strategies do you use for learning from disappointments (both big and small) so that the net experience becomes productive and positive?

- This is something I need still learn to do often but I think acknowledging and accepting the failures and disappointments and reflect on the experience later on as well. I also want to learn to celebrate my wins, but I still focus on my failures more. When I do remember to do this, I find that I tell myself maybe next time I can do better and what can I do which I think is heading towards the right direction of becoming more positive.
