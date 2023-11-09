# Class 13 - Introduction to Persistence with Local Storage

## Lab 13 - Odd Duck Products and Data Persistence

## Setup

1. As a user, I would like my data to persistently track totals between page refreshes, so that I can keep track of the aggregate number of votes.

    - Implement local storage into your current application

    - Make sure the data persists across both browser refreshes and resets

    - Hints:
        - Store the products array into local storage as a formatted JSON string

        - Retrieve the products array from local storage and then utilize the `JSON.Parse()` function. Remember, if your constructor utilizes `prototype` methods, you will have to send each item in the array back through the constructor function.

2. Run a Lighthouse Accessability report. Make necessary updates to your application based on the report to get your score above 80.

    - Add a screenshot of your score to your README.md file.

## Written Class Notes

Local Storage
- Persistance Store: "Store data forever"
- like a database
- store data forever
        - in the browser itself
        - safely
        only the website that stores data can access it
- Retrieve it for later

localStorage - 2 methods
- setItem ("key", value);
- getItem("key");
- "value" can only be a string
- objects are not strings so need to convert objects to strings
const header = document.getElementById("greeting");
const input = document.getElementById("nameInput");
const form = document.getElementById("nameForm");

form.addEventListener("submit", handleSubmit);
input.addEventListener("change", handleChange);

let state = {};

function init() {

  // let name = localStorage.getItem("personsName"); // could be a name or null or undefined
  // let changes = Number(localStorage.getItem("numChanges"));

  // let state = {
  //   name: localStorage.getItem("personsName"),
  //   changes: Number(localStorage.getItem("numChanges"))
  // };

  // Initially this is undefined

  // Reads from local storage as a string
  let stateString = localStorage.getItem("state") || "";

  // Converts to an object
  state = JSON.parse(stateString);

  // Confirms
  console.log("Read the state", state);

}


function handleSubmit(e) {
  e.preventDefault();
  e.target.reset();
}

function handleChange(e) {
  state.name = e.target.value;
  ++state.changes;

  // State is an object
  // Need to convert to a string so we can save it.
  console.log(state);
  console.log(JSON.stringify(state));
  localStorage.setItem("state", JSON.stringify(state));

  // One by one (old) way
  // localStorage.setItem("personsName", state.name);
  // localStorage.setItem("numChanges", ++state.changes);
  renderGreeting();
}

function renderGreeting() {
  if(state.name) { header.textContent = `Hello, ${state.name}` }
}

// What we type in doesn't survive a re-render
// All of the JS is in "memory" only for as long as the page is open


// Wouldn't it be cool if it said Hello to us on page load?
init();
renderGreeting();


const header = document.getElementById("greeting");
const input = document.getElementById("nameInput");
const form = document.getElementById("nameForm");

form.addEventListener("submit", handleSubmit);
input.addEventListener("change", handleChange);

let state = {};

function init() {

  // let name = localStorage.getItem("personsName"); // could be a name or null or undefined
  // let changes = Number(localStorage.getItem("numChanges"));

  // let state = {
  //   name: localStorage.getItem("personsName"),
  //   changes: Number(localStorage.getItem("numChanges"))
  // };

  // Initially this is undefined

  // Reads from local storage as a string
  let stateString = localStorage.getItem("state") || "";

  // Converts to an object
  state = JSON.parse(stateString);

  // Confirms
  console.log("Read the state", state);

}


function handleSubmit(e) {
  e.preventDefault();
  e.target.reset();
}

function handleChange(e) {
  state.name = e.target.value;
  ++state.changes;

  // State is an object
  // Need to convert to a string so we can save it.
  console.log(state);
  console.log(JSON.stringify(state));
  localStorage.setItem("state", JSON.stringify(state));

  // One by one (old) way
  // localStorage.setItem("personsName", state.name);
  // localStorage.setItem("numChanges", ++state.changes);
  renderGreeting();
}

function renderGreeting() {
  if(state.name) { header.textContent = `Hello, ${state.name}` }
}

// What we type in doesn't survive a re-render
// All of the JS is in "memory" only for as long as the page is open


// Wouldn't it be cool if it said Hello to us on page load?
init();
renderGreeting();









### Describe and Define

- JSON syntax, structure, rules
- Application state and why it is needed
- Data persistence using local storage

### Answer

1. What is JSON?

2. What is data persistence?

3. What is local storage?

4. Where is local storage stored?







## Read 13 - Local Storage

Bookmark and Review: [The Past, Present, and Future of Local Storage for Web Applications](https://diveinto.html5doctor.com/storage.html)

## Resources Link/Pages

### Local Storage and How To Use It On Websites

1. [Local Storage and How To Use It On Websites](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Local Storage offers a way to store and retrieve data without relying solely on server-side technologies so it can create a seamless use experience by allowing faster reload.

### Local Storage and How to Use it on Websites

1. Why would a developer use local storage for a web application?

- HTTP is stateless meaning that when you use an application and close it, it will be reset on the next open. Local storage maintains the application's state even after the user closes and reopens the application. So it's useful when developers don't want to force users to sign up for accounts to maintain their application preferences. Local storage allows developers to store data on the user's device, ensuring a seamless user experience across sessions.


2. What information should not be stored in local storage?

- Sensitive or personally identifiable information should not be stored in local storage and should be in server-side to prevent unauthorized access.

3. Local storage can store what type of data? How would you convert it to that type before storing?

- It stores only strings. If you want to store complex data types like objects or arrays, you need to convert them to strings before storing and parse them back into their original data types when retrieving them. Use `JSON.stringify()` method to convert objects or arrays to JSON strings before storing them in local storage. To convert the stored JSON string back to the original object or array, `the JSON.parse()` method is used.

## Things I want to know more about

I don't know if this is outside of our scope and more for the OPS people but do we have to take into consideration of the people who can exploit local storage data? 

## Career 13 - Stage Fright

> Here are two articles that will help you understand the science behind the fear and approaches to take when feeling anxious about presenting:

- [Conquering Stage Fright](https://adaa.org/understanding-anxiety/social-anxiety-disorder/treatment/conquering-stage-fright)

- Try these 10 tips to reduce your stage fright:

1. Shift the focus from yourself and your fear to your true purpose—contributing something of value to your audience.
2. Stop scaring yourself with thoughts about what might go wrong. Instead, focus your attention on thoughts and images that are calming and reassuring.
3. Refuse to think thoughts that create self-doubt and low confidence.
4. Practice ways to calm and relax your mind and body, such as deep breathing, relaxation exercises, yoga, and meditation.
5. Exercise, eat well, and practice other healthful lifestyle habits. Try to limit caffeine, sugar, and alcohol as much as possible.
6. Visualize your success: Always focus on your strength and ability to handle challenging situations.
7. Prepare your material in advance and read it aloud to hear your voice.
8. Make connections with your audience: Smile and greet people, thinking of them as friends rather than enemies.
9. Stand or sit in a self-assured, confident posture. Remain warm and open and make eye contact.
10. Give up trying to be perfect and know that it is OK to make mistakes. Be natural, be yourself.

- [The Science Behind Public Speaking](https://www.scienceofpeople.com/public-speaking-tips/)

1. **Use Charismatic Verbal Tactics:**
   - Incorporate metaphors, similes, and analogies to convey ideas effectively.
   - Organize your speech into 3-part lists for easy understanding and retention.
   - Use rhetorical questions to engage the audience mentally.

2. **Warm-Up Right:**
   - Develop a pre-performance ritual to beat performance anxiety before speaking.

3. **Use the Sparkline Structure:**
   - Start by explaining the current situation or problem ("what is").
   - Present the desired future state or solution ("what could be").

4. **Avoid Caveats and Apologies:**
   - Avoid apologizing or adding qualifiers to your speech.
   - Controversial speeches can evoke emotions and engage the audience effectively.

5. **Master Nonverbal Behavior:**
   - Be mindful of body language cues to appear confident and engaged.
   - Avoid self-touch gestures like wringing hands, touching face, or biting lips.

6. **Channel Your Fear:**
   - Channel nervous energy into passion for the topic.
   - Reframe nervousness as excitement.

7. **Work the Stage:**
   - Purposefully move instead of pacing to engage the audience effectively.

8. **Master Stage Presence:**
   - Learn key aspects of public speaking, including body language, voice modulation, and hand gestures.

9. **Include the Audience:**
   - Use inclusive language and collaborative words to involve the audience.
   - Conduct activities, Q/A sessions, or call-outs to engage the audience.

10. **Move People Emotionally:**
    - Use emotions like passion, vulnerability, awe, regret, excitement, and fear to spice up your speech.
    - Encourage audience participation before the end of the speech to prepare for a standing ovation.

11. **Solve a Problem:**
    - Frame your speech around a recognized problem and offer solutions.
    - Illustrate points with stories to make them relatable and memorable.

12. **Utilize Stories:**
    - Use stories to demonstrate problems and solutions effectively.

13. **Use an App:**
    - Leverage technology and apps to enhance your public speaking skills.

14. **Rehearse Thoroughly:**
    - Rehearse in phases, focusing on content, movements, and full dress rehearsal.

15. **Adopt a Laughing Mindset:**
    - Create an inside joke or act out aspects of your stories.
    - Smile and use expressions to engage the audience and inspire laughter.

16. **Learn from the Best:**
    - Watch and analyze speeches by talented public speakers to gain inspiration and insights.

1. Write about two things that you will implement to improve your anxiety when giving a presentation.

- I will prepare my material in advance and practice out loud but I should also realized that too much practice can still be harmful and give up trying to be perfect and know that what I have is enough and that it is ok to make mistakes.


## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

Sometimes, something is easier to learn than we expected it to be. Sometimes, something is more difficult to learn than we expected it to be. Briefly write about an experience with each extreme that you have had in this course.

- Today's local storage lesson got me confused and so little code was written but I didn't know where to apply it. I thought it was going to be easy because of how little we had to right but it was tricky figuring out where to use it. I thought the chart was still easy to learn just because there was a third party use. It's great we didn't have to create a chart from scratch. I thought I could be bold and do other things to my code for lab 13 but I ended up just spending all the time fixing my mistakes even though the assignment was done. 