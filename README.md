# My Notes and Assignments for Code Fellows Code 102

## Class 1 - Markdown
![Markdown Icon](https://upload.wikimedia.org/wikipedia/commons/d/d9/Markdown.png)

#### Introduction
Hello everyone! My name is Xin Deng and here is the link to my [Github portfolio page!](https://github.com/xind14) The first assignment is to create my first project on Github and make a reading-notes repository after learning markdown for the first time. The different features I've used for this assignment are **heading, lists/nested list, styling: italics and bold, links, images, and emojis 😉** I plan on putting all assignment instructions on here to keep a record because I have a bad memory so it'll be nice to have everything here. 

### Lab 1 - Learning Markdown by creating a Github Pages website 

###### Resources Link/Pages: 
1. [Growth Mindset](https://www.atlassian.com/blog/inside-atlassian/growth-mindset)
2. [Markdown on Github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
3. [Creating a Github Pages Site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

###### Requirements 
1. Site URL format should say https://xind14.github.io/reading-notes
2. Source for my site should be a README.md file
    - _md stands for markdown_
3. Explain Growth mindset and include 3 reminders of how to keep myself in a growth mindest
4. Utilize at least 5 features of markdown
5. Introduce myself and include a link to my GitHub portfolio

#### What is a growth mind set and what are 3 reminders to myself to keep myself in a growth mindset?
A growth mindset is believing your intelligence and abilities can always improve and grow with an effort to learn and a determination to push through obstacles, which comes from running towards challenges as opportunities for growth. 
1. I do have a tendency to delay the start of something when I feel stuck, so I need to remind myself to walk away for a moment to calm the anxiety enough to feel motivated again to continue the task at hand.
2. I tend to also think the worst first and it overshadows the good, so I would like to start assessing aspects of my day or task I’m doing with what I did well on and what I can improve and learn from that criticism.
3. When I get overwhelmed I tend to start comparing myself to others who understand better than I do, but I need to remind myself that everyone started from somewhere and it’s not a race, but a journey of understanding that comes with failures and that's ok. 



### Read 1 - Learning Markdown Reflection and Discussion
###### Resources Link/Pages: 
1. [Getting Started](https://www.markdownguide.org/getting-started/)
2. [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)
3. [Mastering Markdown on Github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

#### Answer 
1. What is Markdown?
   - A lightweight markup language that allows you to add syntax to plaintext.
2. Why do we use Markdown?
   - Markdown can be used in everything like websites and books and can be found everywhere including big well known websites like reddit. It is useful because markdown files can be transferable and compatible across all operating systems and markdown applications and the format is readable without needing to preview the final product.
3. What symbol will create a heading in Markdown? How many do you need to create the largest heading? How many do you need to create the smallest heading?
   - The # is used to create headings. With 1 to create the largest and 6 to create the smallest.
4. When making text bold or italicized for emphasis, it is best practice to use which symbol?
   - It is best practice to use asterisks. Two for bold and one for italics. 
5. How do you create a link with Markdown?
   - You put the link text of what you want to be clicked on in brackets and then put the URL in parentheses right after. So use [] and () with no space in between. 
6. What are the three symbols you can use to create an unordered (bulleted) list with Markdown?
   - You can use a dash (-), a plus sign (+), or an asterisk (*).


## Class 2 - The Coder's Computer
![Visual Studio Code Icon](https://upload.wikimedia.org/wikipedia/commons/e/e5/Visual_studio_code_updated.png)

### Lab 2 - Set Up new terminal and VS Code 
[Computer Setup Guide](https://codefellows.github.io/setup-guide/)
1. Tree: Allow you to look at directory structure and files within a directory
2. Node.js: Helps you execute a program in javascript
3. ESLint: Find and fix problems in javascript 

### Read 1 - Learning Markdown Reflection and Discussion
###### Resources Link/Pages: 
1. [Choosing a Text Editor](https://codefellows.github.io/code-102-guide/curriculum/class-02/Choosing-A-Text-Editor--The-Older-Coder.pdf)
    - Most important Features to consider when choosing a text editor are code completion, syntax highlighting, variety of themes, and extensions to choose from. 
2. [The Command Line](https://ryanstutorials.net/linuxtutorial/commandline.php)
    - A command line or terminal is a text based interface where you can enter in commands that interact with your computer system. 
3. [Basic Navigation](https://ryanstutorials.net/linuxtutorial/navigation.php)
4. [About Files](https://ryanstutorials.net/linuxtutorial/aboutfiles.php)

#### Written Class Notes
   - Whatever is after the command is called the argument. There needs to be a space between the command and argument
   - **ls l** gives additional information. ls a shows hidden files as well
   - **Clear** clears the terminal but you can scroll up and whatever you entered is still there
   - **cd** hit tab or enter a few letteres will automate choices and directories for you
   - Hit enter after each command
   - **cd ..** is back one, . stay where you are, ... is back two directories
   - **code .** opens code editor. There is a space between code and .
   - When creating new directories do not use space either use no space or dashes ex: newFile or new-File. If you do mkdir my folder it will create two folders with those names
   - In VS Code: md should end with one line space, space after heading, emmet abbreviation are "universal" so by adding ! will give you choices and will automatically provide you the basic codes needed ex: !doctype gives you the code people almost always use in HTML

#### Answer 
1. What are four important features to look for in a text editor?
   - Code completion, syntax highlighting, variety of themes, and extensions to choose from. 
2. What do the following commands do?
   - **pwd:** Stands for Print Working Directory and tells you what directory you are currently working on.
   - **ls:** Stands for list and tells you what is in the directory.
   - **cd:** Stands for change directory to a different directory by adding a name as an argument after or leaving it blank will take you back home
   - **mkdir:** Stands for make directory
   - **touch:** Creates a new file where you need to name and add what kind of file it is ex.README.md is markdown file, README.html is an HTML file.
3. Can you explain what is happening in the following scenario if these commands and arguments are entered into the command line? (Arguments are extra instructions given to a command.)
   - **cd projects:** You change directory into the projects directory location.
   - **mkdir new-project:** You make a new directory titled new-project
   - **touch new-project/newfile.md:** You make a new markdown file within the new-project directory
   - **cd ..:** You change directory back to the previous directory you were working on
   - **ls projects/new-project:** You list the items in the new-project directory that is within the projects directory
