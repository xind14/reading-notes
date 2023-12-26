# Cheatsheet Notes

## Terminal Commands

| Command Line Code | Meaning                          |
| ----------------- | -------------------------------- |
|`pwd`              | print working directory          |
|`tree`             | shows the file tree of your directory |
|`ls`               |  list all the files and folders located in your current directory |
|`ls -a`            |  list all the files and folders located in your current directory including hidden files in short form|
|`ls -la`           |  list all the files and folders located in your current directory including hidden files in a more detailed form|
|`cd`               | change directory|
|`cd ..`            |  change directory to previous one|
|`mkdir`            |  make directory|
|`touch`            |  create a new file|
|`code <filename>`  |  open up this file in VSCode|
|`code .`|  open the current directory in VSCode|
|`mv`|  move a file|
|`rm <filename>`|  remove a file permanently. Warning: there is no recovery!|
|`cp <source> <destination>`|  copy a file|
|`cat fileName`|  shows content of file|
|`git clone GH HTTPS link`|  clones file from GH to local|
|`git pull origin main`|  pull files from GH|
|`cd ../..`|  add two dots and slash to move further previous file|
|`git init`|  initializes new repository in existing project folder|

## Git Commands

Go here for more [in depth GIT](Gitpreworknotes.md)



| Command Line Code | Meaning                          |
| ----------------- | -------------------------------- |
| Initializing a Repo                       |
|`git clone GH HTTPS link`|  clones file from GH to local|
|`git init`|  initializes new repository in existing project folder|
| Inspecting Change                     |
|`git status`            |  shows the status of changes as untracked, modified, or staged|
| Staging and Committing                      |
|`git add file name`              | stage changes for commit.|
|`git add .`            |  stage all changes|
|`git commit -m "commit message`           |  commit staged changes with a message|
| Branching                     |
|`git checkout branchName`  |  switch to an existing branch|
|`git checkout -b newBranchName`|  makes new branch and check it out|
|`git merge branchName`|merge changes from one branch into the current branch|
| Remote Repo                    |
|`git push origin branchName`|  push changes to remote repo|
|`git pull origin branchName`| pull changes from remote repo|



## VS Code

| Editing Shortcuts |                                  |
| ----------------- | -------------------------------- |
|⌘B|open/close explorer bar|
|Ctrl + `|open/close terminal|
|opt + ↑ / ↓|Move line up/down.|
|⌘X|delete line|
|⇧⌥↓ / ⇧⌥↑|Copy line down/up|
|⌘Enter|Insert line below/above|
|⇧⌘``\``|Jump to matching bracket|
|⌘F2|Select all occurrences of current word|
|⌥⌘F|replace|



## Markdown

| Basic Syntax|                                  |
| ----------------- | -------------------------------- |
|**Headings** |Add number signs (#), six levels|
|**Bold**|Add two asterisks|
| **Italic**|Add one asterisk|
|**Bold and Italic**|Add three asterisks|
|**Blockquote** |Add a > in front
|**Multiple paragraphs Blockquote**|add extra > on blank lines
|**Nested Blockquote**| add >> on nested
|**Images**|`![What it is](img path link)`
|**Subscript**|`<sub>`
|**Superscript**|`<sup>`
|**Task Lists**|`[x] whatever task`
| **Emoji**|`:EMOJICODE:name of emoji`
|**Alerts**|`[!NOTE]`, `[IMPORTANT]`, `[!WARNING]`



## HTML

### Basic Template

    <!DOCTYPE html>
    <html>
    <head>
        <title></title>
        <link rel="stylesheet" href="styles/reset.css" />
        <link rel="stylesheet" href="styles/style.css" />
        <script src="js/app.js"> </script>
    </head>
    <body>
        <header>
          <h1>

          </h1>
        </header>
        <main>

        </main>

        <footer>

        </footer>
    </body>
    </html>

### Table

HTML Table <table>
header <thead>
header cells <th>
body <tbody>
row <tr> (table row)
cell <td>
footer <tfoot>




### Forms:

**Fields** = `<input type ="text"/>` or

1. **Text:** `<input type="text">` - Allows users to enter a single-line text input.

2. **Checkbox:** `<input type="checkbox">` - Represents a checkbox that users can toggle on or off. (Used for multiple selections.)

3. **Radio:** `<input type="radio">` - Represents a radio button, allowing users to select one option from a group of options. ( Used for single selection within a group of options.)

4. **Password:** `<input type="password">` - Similar to the text input, but the characters are masked for security.

5. **Email:** `<input type="email">` - Specifically designed for email addresses, with built-in validation for correct email format.

6. **Number:** `<input type="number">` - Allows users to enter numerical values. Up and down arrows are provided for easier input.

7. **Date:** `<input type="date">` - Provides a date picker interface for selecting dates.

8. **Time:** `<input type="time">` - Offers a time picker for selecting time values.

9. **File:** `<input type="file">` - Enables users to upload files from their device.

10. **Submit:** `<input type="submit">` - Used within forms to submit data to a server.

11. **Reset:** `<input type="reset">` - Resets the form fields to their default values.

12. **Hidden:** `<input type="hidden">` - Allows developers to store data that will not be displayed to users but can be submitted with a form.


### Dropdown

**Dropdown** = `<select>` used to create a dropdown menu, allowing users to choose one or more options from a list.

1. **Multiple Selection**: users can select multiple options by holding down the Ctrl key (or Command key on Mac) while clicking the options.

        `<select multiple>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>`

### Buttons

**Button**: with the type attribute specifies the type of action to be performed when the button is clicked. In HTML, the `<button>` element with the `type` attribute specifies the type of action to be performed when the button is clicked. Besides the `type="submit"`, which is used for form submission, there are a few other commonly used `type` values for the `<button>` element:

1. **Submit Button:** `<button type="submit">Submit</button>`

- This type is used inside `<form>` elements to submit form data to a server when clicked.

2. **Reset Button:** `<button type="reset">Reset</button>`

- Resets all form controls to their initial values. This is typically used inside `<form>` elements to clear the form fields.

3. **Button (Default):** `<button>Click me</button>` or `<button type="button">Click me</button>`

- If the `type` attribute is not specified or set to `"button"`, the button acts as a regular button control and does not have any specific behavior associated with it. JavaScript can be used to define custom actions when this button is clicked.

4. **Button (Hyperlink Style):** `<button type="button" onclick="window.location.href='https://example.com'">Go to Example</button>`

- JavaScript can be used to navigate to a specified URL when this button is clicked, simulating a hyperlink behavior.

5. **Button (JavaScript Function):** `<button type="button" onclick="myFunction()">Click me</button>`

- JavaScript functions can be triggered when this button is clicked. The function can perform custom actions defined by the developer.

6. **Button (Image):** `<button type="button"><img src="button-icon.png" alt="Button Icon"></button>`

- An image can be used inside a button to create a button with a graphical icon. JavaScript functions or other actions can be associated with this button as needed.

<label for="name">name:</label>
<input id="name" type="text" placeholder="please enter your name"/>








## CSS

Margin:
            TOP, RIGHT, BOTTOM, LEFT
            TOP &  BOTTOM, LEFT & RIGHT
            ALL THE SAME

width % is 100% of parent
- at top of css *{ box-sizing:border-box;}

.length = index/position in array, each thing in array are called elements, every array index starts at 0

str="John" str.charat(0), str.substring (0,1) both equal J 0=first element of array, 1=produce that many letters. start at 0 go that many. 0, 2 would give Jo

- When a user enters information through the prompt() function in JavaScript, the input is always treated as a string, even if the user enters a number. The Number() function is often used to convert that string representation of a number into an actual numeric value.

  - margin 0 auto (can't auto without width)
  - max-width 80vw (should be 960px)
  - font-size 1.25 em, changes with view


- `Block-level`: these elements can already have existing properties in them like width, height, padding etc. Examples are `h1`, `<p>` and they start on new lines and fill up the full width of space available inside the parent element.
   - `Inline`: these elements do not have existing properties and do not start on new lines and do not take up all the space, but only as much width as necessary. Examples are `<a>`, `<strong>`

- `Absolute Positioning`: the element is positioned to the nearest parent element, it moves with the content when the user scrolls.



   - `font-size`: changes the size of the text
   - `font-weight`: changes the boldness or thickness of the text
   - `font-style`: changes the italics of text



### Flexbox

display: flex;
  flex-direction: row;
  justify-content: space-between;
flex: 1;
  <!--  used when you want certain flex items to share available space equally. It's especially useful in scenarios where you want flex items to expand and fill the container evenly without specifying fixed widths for each item. -->


## JavaScript

1. **Variables**: container of info.
    - `let`: means info can be changed later on
    - `const`: means constant, unchangable
1. `alert()`: add pop up content in between parenthesis
1. `prompt()`: gets input from user, add content in between
1. `document.write()`: puts something on the page


### Functions

1. `function name (parameter){logic/code block}`
1. **Invoke**: Executes code inside function
1. `return`: function stops executing
1. Conditional -- if this, then that, or if this, then that, otherwise ...
1. Variable `let` only works in that function and not anywhere else, best practice put into function

### Operators

1. Arithmetic perform arithmetic on numnbers (+, -, *, /)
1. Assignment adds value to variable (+=)
1. Comparison (==, ===, !=)
1. Adding a number and a string will return a string and combine two value together (4+'2'='42')

### Loops

1. While loop runs when true. `while (test expression){console.log(); x+3}`
1. `||` is logical OR
1. `&&` is logical AND
1. `!` is logical NOT
1. `!==` not strictly
1. `!=` not loosely
1. `for (declare){}` inside declare ex: `let i=0;`=initial value `i <10;`condition we are checking `i ++` increment



### Objects

 - Properties = value, any valid datatype, arrays "has"
 - Methods = action, verbs, what you can do, function "can"
 - Define using {}
 - Access properties and methods with `dot notation`
    - `object.property/method`

 1. Define an object with {}
      2. Define properties with :
      3. Use comma after each property
        - Key/value pairs -  Key:value
      4. methods are also properties/keys but the value is a function
      5. 'this' refers to the instance, from WITHIN the instance


                    render: function() {
                            // Looks for any element with an id="root", i.e.
                            // <section id="root">
                            const rootElement = document.getElementById("root");

                            // Create a new, empty section for a store
                            const storeSection = document.createElement("section");
                            storeSection.classList.add("location")
                            rootElement.appendChild(storeSection);
                    const firstTitle = document.createElement("h2");
                            // Give it some content
                            firstTitle.textContent = this.name;
                            // Add it to the page, as a child of rootElement
                            storeSection.appendChild(firstTitle);
                    }


### Constructors

(Object name is capitalized so developers can identify it is being used as a constructor)


### Forms

**Properties**:

- `Id`:unique
- `Name`: names the field uniquely
- `Type`: text/radio/checkbox/email/phone
- `Placeholder`: preview text
- `Value`: real value (actual text)
- `Disabled` = dims it out and you can't type into it

**Forms**: When you submit the data to the server it reloads the page from the server by default but with JS, we can intercept that, process the form data in JS and redraw in real time

**Syntax for adding an event listener to an element:**

    `element.addEventListener('event', function(event) {
    // inside brackets is the Code to be executed when the event occurs
    });`

`event.target.name` = retrieves the name attribute of the HTML element that triggered the event. Example the name here would be breed: `<input type="text" id="name"name="breed">`

`event.target.value` = retrieves the current value entered, For input fields, this property contains the



JS order

- global variables first
- finding elements (getElement byID)
- array of hours
- declare classes and constructors and prototypes
- then declare all my functions
- run meaningful code
- things down here probably need the globals, functions and classes
