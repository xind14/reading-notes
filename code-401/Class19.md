# Class 19 - Automation

## Lab 19 - Getting machine to handle the boring stuff

### Overview - Chess Board

Today we’ll be constructing chess boards like it’s 1980.

No prebuilt images, just the power of arrays and pixel art.

### Feature Tasks and Requirements

1. Your job is to render out chess boards with red and blue queens on them.

2. We’re keeping it really basic here so the only pieces are queens and each queen is represented by a blue or red square.

3. Chess board is an 8 by 8 grid of alternating black and white squares. The queens are red and blue squares.

4. Each board will have one red and one blue queen at different coordinates. In addition to displaying the board you’ll need to identify if the queens are “under attack” based on their coordinates.

### Implementation Notes

- Define a ChessBoard class

- Should contain an 8x8 grid.

  - Each cell in the grid should have a color represented in RGB format.
    - Black: (0, 0, 0)
    - White: (1, 1, 1)
    - Blue: (0, 1, 1)
    - Red: (1, 0.2, 0)

- Should have an `add_red` method that accepts a row and column as input which colors the corresponding cell.
- Should have an `add_blue` method that accepts a row and column as input which colors the corresponding cell.
- Should have a `render` method that displays the chess board on the screen with red and blue shown in correct locations.
- Should have an `is_under_attack` method that returns a boolean if red is under attack by a blue piece horizontally, vertically, or diagonally.
- Diagonal attacks can come from four directions. Make sure to handle all of them.

- Render your board for each `is_under_attack` scenario:

  1. Horizontal (aka same row).
  2. Vertical (aka same column).
  3. Four Diagonals.
  4. A "Not Under Attack" scenario.

### User Acceptance Tests

There are no acceptance tests required. The notebook should clearly show that the various `is_under_attack` scenarios have been handled.

## Code Challenge

- **Branch Name:** stack-queue-pseudo
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

Implement a Queue using two Stacks.

1. Create a new class called pseudo queue.
2. Do not use an existing Queue.
3. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
4. Internally, utilize 2 Stack instances to create and manage the queue

- `enqueue`

  - **Arguments:** value
  - Inserts a value into the PseudoQueue, using a first-in, first-out approach.

- `dequeue`
  - **Arguments:** none
  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

**NOTE:** The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

### Example

```python
# Example
queue = PseudoQueue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
value = queue.dequeue() # Output: 5
```

#### Enqueue

| Input            | Args | Internal State        |
| ---------------- | ---- | --------------------- |
| [10]->[15]->[20] | 5    | [5]->[10]->[15]->[20] |
|                  | 5    | [5]                   |

#### Dequeue

| Input                 | Output | Internal State  |
| --------------------- | ------ | --------------- |
| [5]->[10]->[15]->[20] | 20     | [5]->[10]->[15] |
| [5]->[10]->[15]       | 15     | [5]->[10]       |

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
