# Class 30 - Hash Tables, Behavioral Interviewing

## Lab 30 - Hash Tables Implementation

## Setup

## Code Challenge

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/DEMO.html)

Challenges

1. Navigate to the javascript folder within your data-structures-and-algorithms repository.
2. Create a new branch for this challenge called for-each
   git checkout -b for-each
3. Retrieve the code challenge from the system
   npm run get-challenge 01
4. In your terminal, from the javascript folder, run npm test 01 to execute the tests in this file for this challenge.
5. At this point you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.
6. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!
7. Write code to make the tests pass, one at a time. Let the error messages guide you.
8. Once the test is passing, refactor as needed, then move on to the next challenge.
9. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress

Submission
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

## Read 30 - Hash Table Implementation

## Resources Link/Pages

- [Intro to Hash Tables](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html)
- [What is a hash table](https://www.youtube.com/watch?v=MfhjkfocRR0)
- [Basics of hash tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
- [Hash table wiki](https://en.wikipedia.org/wiki/Hash_table)

## Answer

To turn in your reading “Reply” to this discussion by teaching something that you learned. Then review what one of your classmates learned, and leave a comment.

Some ideas for how you might want to teach:

- Use an analogy
- Explain a detail in depth
- Use WHY, WHAT, HOW structure
- Tutorial / walk through an example
- Write a quiz
- Create a vocabulary/definition list
- Write a cheat sheet
- Create a diagram / visualization / cartoon of a topic
- Anthropomorphize the concepts, and write a conversation between them
- Build a map of the information
- Construct a fill-in-the-blank worksheet for the topic

### Vocabulary/Definition List for Hashtables

1. **Hashtable:**

   - **Definition:** A data structure that uses a hash function to map keys to indexes in an array, allowing for efficient retrieval of values associated with those keys.
   - **Analogy:** Think of a library where books are organized based on a unique code assigned to each book, making it easy to locate a book quickly.

2. **Buckets:**

   - **Definition:** Containers within the hashtable array, each holding key/value pairs. An index in the array corresponds to a bucket.
   - **Analogy:** Visualize each shelf in a library representing a bucket, with books (key/value pairs) placed on the shelf based on their assigned codes.

3. **Collisions:**

   - **Definition:** Occurs when two or more keys hash to the same index in the array, requiring a mechanism to handle and store multiple key/value pairs at that index.
   - **Analogy:** In our library, if two books have the same code, a librarian needs to manage both books on the same shelf.

4. **Hash Function:**

   - **Definition:** An algorithm that takes a key and returns a hash, ensuring deterministic output based on the input and allowing for efficient indexing.
   - **Analogy:** Think of a magical formula that converts a person's name into a unique code consistently.

5. **Load Factor:**

   - **Definition:** The ratio of the number of stored key/value pairs to the total number of buckets in the hashtable, indicating how full or sparse the hashtable is.
   - **Analogy:** Like determining how full a suitcase is concerning its total capacity.

6. **Method:**

   - **Definition:** A function or routine associated with the hashtable, such as set(), get(), has(), and keys().
   - **Analogy:** Think of actions you can perform in a library, like borrowing a book, returning a book, or checking if a book is available.

7. **Linked List:**

   - **Definition:** A data structure that can be used to handle collisions by creating a chain of nodes within a bucket.
   - **Analogy:** If a shelf in the library is full, a linked list acts like an additional shelf, accommodating more books.

8. **set():**

   - **Definition:** Adds a new key/value pair to the hashtable, utilizing the hash function to determine the appropriate index.
   - **Analogy:** Like placing a new book on the library shelf, ensuring it's in the right location based on its code.

9. **get():**

   - **Definition:** Retrieves the value associated with a given key by calculating the hash and navigating to the corresponding index.
   - **Analogy:** Similar to finding a specific book on the library shelf using its assigned code.

10. **has():**

    - **Definition:** Checks if a key exists in the hashtable by using the hash function and verifying the presence of the key at the calculated index.
    - **Analogy:** Performing a quick check in the library catalog to see if a particular book is available.

11. **keys():**

    - **Definition:** Returns a collection of unique keys in the hashtable, allowing for a comprehensive view of all stored keys.
    - **Analogy:** Imagine a list of all the unique codes assigned to books in the library, providing an overview of available items.

12. **hash():**

    - **Definition:** Accepts a key, applies the hash function, and returns the index where the key/value pair should be placed in the array.
    - **Analogy:** Similar to the process of generating a unique code for a book based on its title.

## Learning Journal

### Reflection

Take 10-15 minutes at the end of lab to respond to the following questions, adapted from the article:

1. What went well, that I might forget if I don’t write down?
   - I liked learning the career stuff today, but I forgot to write most of it down so will rewatch recording later to take notes again.
2. What did I learn today?
   - No matter the skills you have most of your chances of getting hired is through networking, which I don't know how to do well so that's going to be such a challenge.
3. What should I do differently next time?
   - Take screenshots of the slides.
4. What still puzzles me, or what do I need to learn more about?
   - I'm not understanding trees like I did stacks and queues so I will look at it more.
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
     - Assignments are complete. Will work on readings for next week.

## Career 30 - Partner Power Hour - Report #6

> If there is no live presentation on campus in this module, select the appropriate presentation from the list below. All presenters are open to connections and invite you to reach out to them, so that you can to learn more about them, their company, and the industry.
> You may find it difficult or challenging to connect with industry professionals and gain an inside look at how the tech world operates. We’ve drawn on our network to bring you speakers and topics relevant to this stage of your career transition. These presentations may serve to educate, enlighten, and motivate you along your journey. Take advantage of this opportunity, and make the most of the insights these presentations provide… you never know where a connection will lead.

[Breaking Down the Tech Interview w/Rover - Rover Engineering Team](https://youtu.be/_6Fi8FFvdQs)
[Whiteboarding Tips & Strategies - Roger Huba](https://youtu.be/aDL3403Q6xY)
[Automate Yourself Out of a Job - Adam Eivy](https://youtu.be/2VJV-zNCtF8)
[Communication Under Stress - Eve Denison](https://youtu.be/K0fnB3ygcm4)
[Deep dive - Dev Tools - David Souther](https://youtu.be/nGNQCisfj8Q)
[CI/CD History Lesson - Kat Cosgrove](https://youtu.be/_Md_NTWNgOE)
[The 7 C’s of Cybersecurity & Coding - Courtney Hans](https://youtu.be/GqRDGi4ta5U)
[Your Net Worth - John Cokos](https://youtu.be/Qu-_1b3xYGQ)

> Deep dive - Dev Tools - David Souther

1. Share one or two ways the speaker’s information will change your approach to your career transition.

   - Avoid Manual Updates: Manual updates of servers can lead to catastrophic failures. Definitely will try to avoid if possible.
   - Catastrophic failures in tech are often the result of process failures, not individual mistakes. May come in handy to remember in the future.

1. List a few key take-aways from this presentation.

   - Continuous Integration and Continuous Deployment (CI/CD):

     - CI/CD is a methodology and toolset designed to increase development speed and efficiency.
     - Automates tasks like building, testing, and deploying software.

   - Avoid Manual Updates:

     - Manual updates of servers can lead to catastrophic failures.
     - Example: Knight Capital lost $440 million and went out of business due to a bad manual update.

   - Blame the Process, Not the Individual:

     - Catastrophic failures in tech are often the result of process failures, not individual mistakes.
     - Engineers should not be blamed for systemic issues.

   - Security and CI/CD:

     - CI/CD facilitates quick responses to security issues.
     - Fast updates and patches reduce vulnerability to security breaches.

   - Handling Flaky Integration Tests:

     - Flakes are a reality; sometimes, re-running is the solution.
     - Disable or investigate consistently failing tests.

   - Getting into Developer Advocacy:
     - No need to be an expert; even newbies can contribute valuable perspectives.
     - Start by talking at conferences or meetups; it's a great way to network and gain visibility.
     - Some conferences cover travel and accommodation costs for speakers.

1. Share a screenshot of your LinkedIn connection request, including a nicely worded note, sent to the speaker or someone else at their company.
   ![Kat Cosgrove](./img/kat-cosgrove.png)

## Career 30 - Workshop #4: Mock Interviews
