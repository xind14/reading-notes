# Class 19 - Automation

## Lab 19 - Getting machine to handle the boring stuff

### Overview - Automation

Your team is working on a project to improve the organization and automation of various tasks. This includes handling user data, sorting files, parsing logs, and other miscellaneous tasks. You’ll be writing Python scripts to automate these tasks and make your team’s work more
efficient.

### Feature Tasks and Requirements

1. Automate the creation of a folder.

   - Write a Python script to create a new folder with a specified name.

2. Handle a deleted user.

   - `user2` is a deleted user and needs to move their documents from their user folder to a temporary folder.
   - Your script will create the temporary folder, effectively deleting the user from the system while still maintaining a record of their documents.

3. Sort documents into appropriate folders.

   - Go through a given folder and sort the documents into additional folders based on their file type.
   - Move log files into a `logs` folder. If a `logs` folder doesn’t exist, your script should create one.
   - Move email files into a `mail` folder. If a `mail` folder doesn’t exist, your script should create one.

4. Parse a log file for errors and warnings.

   - From the previous task, you’ve moved a log file into the `logs` folder.
   - Now, parse the log file for errors and warnings and create two separate log files in a target directory:
     - `errors.log`: Contains all error messages.
     - `warnings.log`: Contains all warning messages.

5. Create a menu-driven application.
   - Give the user a list of automation tasks (1-4) and let them choose one to execute.
   - Customize your application by incorporating an additional automation task, choose one:
     - Counting the number of specific file types in a directory.
     - Renaming files based on a specific pattern.
     - Automatically backing up specific folders.

### User Acceptance Tests

1. Write tests that assert your CLI application is working.

### Configuration

1. Create a project named automation.
2. Copy the folders and files from lab/assets/user-docs.
3. Create the necessary folders and files to demonstrate and test your automation tasks according to the Feature Tasks and Requirements.

## Code Challenge - Mock Interview

## Written Class Notes

## Read 19 - Automation

## Resources Link/Pages

- [Python Regular Expressions Tutorial](https://www.datacamp.com/community/tutorials/python-regular-expression-tutorial)
- [shutil](https://pymotw.com/3/shutil/)
- [os](https://pymotw.com/3/os/)
- [Automation Ideas](https://www.youtube.com/watch?v=qbW6FRbaSl0&t=69s)
- [Optional: Automating Your Browser and Desktop Apps](https://www.youtube.com/watch?v=dZLyfbSQPXI)

**Bookmark and Review**

- [Watchdog](https://pythonhosted.org/watchdog/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Regex, shutil, and os are important modules in Python because they provide functionalities that are crucial for various tasks, ranging from text manipulation and pattern matching to file and directory operations.

## Reading Questions

1. How can you use regular expressions in Python to search for specific patterns in a string, and what is the primary module to work with them?

   - use the `re` module to work with regular expressions.

2. What is the purpose of the shutil module in Python, and provide an example of a common use case for file or directory management with this module?

   - high-level file operations such as copying and archiving. to simplify file and directory management tasks.
   - A common use case is copying files or entire directories. Here's an example:

     ```python
       import shutil

       source_file = 'source_folder/source_file.txt'
       destination_folder = 'destination_folder/'

       shutil.copy(source_file, destination_folder)
     ```

3. Compare and contrast the os and shutil modules. When would you choose to use one over the other?

   - `os` Module:

     - provides a lower-level interface for interacting with the operating system. It includes functions for basic file and directory operations, such as file deletion (`os.remove`) and directory creation (`os.mkdir`).

   - `shutil` Module:

     - The `shutil` module builds on top of `os` and provides higher-level file operations. It includes functions like file copying (`shutil.copy`), moving (`shutil.move`), and archiving (`shutil.make_archive`).

   - When to Use Each:
     - Use `os` for simple, low-level file operations.
     - Use `shutil` for higher-level file and directory operations, especially when dealing with tasks like copying, moving, or archiving multiple files.

## Things I want to know more about

- Why are copying, moving, and archiving considered high level file operations?

## Learning Journal

### Reflection

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.

- Today I learned that automation is definitely a handy thing to learn. We only scratched the surface today but if someone is knowledgeable about this I bet it can make so many aspects of coding much easier. Definitely something I will learn more about and a skill I should be proficient at just because it'll be so helpful.
