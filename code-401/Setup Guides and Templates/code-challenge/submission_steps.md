# Code Challenge Steps Example

1. Create a new branch in your repo called array-reverse.
2. Make directory for challenge so inside docs: mkdir array-reverse
3. Add readme. Here is the template:

        # Reverse Array

        Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

        ## Whiteboard Process

        <!-- Embedded whiteboard image -->

        ![Whiteboard Image](whiteboard1.png)

        ## Approach & Efficiency

        1. Write out problem statement
        2. Then wrote a function that would that array as argument
        3. Initialize two variables start and end
        4. While loop that runs as long as start is less than end
        5. Return array
        6. The Big O time is O(N) and space is O(1)

        ## Solution

        ![Solution Image](solution1.png)

        [Link to code](https://replit.com/@XinDeng/code-challenges-401)

4. Whiteboard instructions:

    - **Step 1: Define the problem**

      - Copy the problem statement.
      - Restate problem in single clear sentence
      - Highlight and define domain-specific words & phrases.
      - Ask clarifying questions.
      - Define the types of inputs and outputs that the problem expects and produces.

    - **Step 2: Identify Test Cases** (steps 1 and 2 = 5 min)

      - Ask for a sample test case.
      - Create two or three new test cases, including empty, edge, and wrong.
        - edge: extreme or out of ordinary scenarios considered unlikely to occur in normal usage
      - Write the function definition.
      - Choose smallest interesting test case to use for the rest of the whiteboard.
      - The final three: “empty” input, a “realistic” input, and the one to use for the rest of the process - the “smallest interesting” input.

    - **Step 3: Visualize the solution**

      - Draw input at the top of the visualization and the output at the bottom.
      - Work towards the middle, using forward/backward find small algorithmic steps.
      - [Data structures](code-challenge/Part2-drawing-data-structures.md)

    - **Step 4: Plan the algorithm** (steps 3 and 4 = 20 min)

      - Identify intermediate data structure(s) from the visualization.
      - Describe, in plain language, the steps the visualization describes.

    - **Step 5: Code** (10 min)

      - Write code to implement those steps, using your language’s idioms.

    - **Step 6: Verify** (5 min)

      - With the test case, visually step through the code recording the change in values.
      - Provide a Big O analysis, justifying the time and space complexity.
        - describes the behavior of the algorithm as the input dataset grows large.
        - constant efficiency O(1): no matter what inputs are thrown at our algorithm, it always uses the same amount of time or space.
        - logarithmic efficiency O(log n): decrease in the rate of complexity growth, the greater our value of n. searching for a value in a sorted array, As n grows we can eliminate more values in the input. We are chopping our input in half with each time we call Search in this algorithm
          -linear efficiency O(n): the size of our inputs ‘n’ will directly determine the amount of Memory Space used and Running Time length. used to denote functions that must visit each item a single time.
        - linearithmic efficiency O(n log n): can be seen in divide and conquer algorithms such as the Merge Sort
        - quadratic efficiency O(n^2): increases at a rate of input size n raised to the second degree. caused by nested loops. which perform iterative or recursive logic on all values of n and immediately iterate or recurse again for each value of n.
        - cubic efficiency O(n^3): increases faster input size n raised to the third degree. caused by deeply nested loops.
        - exponential efficiency O(2n): like fibonacci
        - factorial efficiency O(n!): space and time requirements grow extremely fast, relative to our input size. happens when we need to calculate all possible permutations of something like a string or an array.

5. Create a pull request from your branch to the main branch
6. In your open pull request, comment with the following checklist of tasks and check off the actual steps that you completed:

        - [ ] Top-level README “Table of Contents” is updated
        - [ ] README for this challenge is complete
              - [ ] Summary, Description, Approach & Efficiency, Solution
              - [ ] Picture of whiteboard
              - [ ] Link to code
        - [ ] Feature tasks for this challenge are completed
        - [ ] Unit tests written and passing
              - [ ] “Happy Path” - Expected outcome
              - [ ] Expected failure
              - [ ] Edge Case (if applicable/obvious)

7. Submit your completed work:
    - Copy the link to your open pull request and paste it into the assignment submission field.
    - Leave a description of how long this assignment took you in the comments box.
    - Add any additional comments to your grader about your process or any difficulties you may have had with the assignment.

## Python Lab Submission Instructions

`mkdir example-lab`

`cd example-lab
`
`touch README.md
`
Create virtual environment: `python3 -m venv .venv`

Activate virtual environment: `source .venv/bin/activate`

Create modules and scripts: `mkdir example_lab` (modules are underscore)

`touch example_lab/example_script.py`

Install packages:

- `pip freeze > requirements.txt`
  Install tests:
- `pip install pytest`

- `mkdir tests` (create test folder)

- `touch tests/__init__.py` (Note: 2 underscores on both sides.)

- `touch tests/test_example.py`

GIT:

- `git init`
- `touch .gitignore`
- Add .venv folder to .gitignore
- `git add .`
- `git commit -m"first commit"`

Github site

- create EMPTY repository example-lab on Github. Do NOT initialize with README, license or gitignore.
- follow directions of importing existing local to remote

Canvas Submission

- Submit a link to the README.md from your assignment branch in Canvas

Next Code Challenges

-[Code Challenge 1](/docs/list_reverse/Code-Challenge-01.jpg)

-[Code Challenge 2](/docs/list_insert_shift/Code-Challenge-02.jpg)

-[Code Challenge 3](/docs/list_binary_search/Code-Challenge-03.jpg)

-[Code Challenge 5,6](/data_structures/linked_list.py)

-[Code Challenge 7](/docs/linked_list_kth/Whiteboard-Code-Challenge-07.jpg)

-[Code Challenge 8](/docs/linked_list_zip/Whiteboard-Code-Challenge-08.jpg)

-[Code Challenge 9](/data_structures/queue.py)

-[Code Challenge 9](/data_structures/stack.py)

-[Code Challenge 11](/docs/stack_queue_pseudo/stack-queue-pseduo.jpg)

-[Code Challenge 12](/docs/stack_queue_animal_shelter/Stack-Queue-Animal-Shelter.jpg)

-[Code Challenge 13](/docs/stack_queue_brackets/stacks-queues-brackets.jpg)

-[Code Challenge 15 Binary Tree](/data_structures/binary_tree.py)

-[Code Challenge 15 Binary Search Tree](/data_structures/binary_search_tree.py)

-[Code Challenge 16 Tree Max](/docs/tree_max/Binary_Tree_Max_Value.jpg)

-[Code Challenge 17 Breadth First](/docs/tree_breadth_first/Tree_Breadth_First.jpg)

-[Code Challenge 18 Fizz Buzz Tree](/docs/tree_fizz_buzz/tree-fizz-buzz.jpg)

-[Code Challenge 30 Hashtable Implementation](/data_structures/hashtable.py)

-[Code Challenge 31 Hashable Repeated Word](docs/hashtable_repeated_word/hashmap_repeated_word_whiteboard.jpg)

-[Code Challenge 32 Tree Intersection](docs/tree_intersection/tree_intersection_whiteboard.jpg)

-[Code Challenge 33 Two Arrays](docs/hashtable_left_join/two_arrays_whiteboard.jpg)

-[Code Challenge 34 Graph Implementation](data_structures/graph.py)

-[Code Challenge 36 DSA Practice](docs/three_odds/three_odds_whiteboard.jpg)

-[Lab 36 part 1](docs/computational_thinking/lab_36_whiteboard_1.jpg)

-[Lab 36 part 2](docs/computational_thinking/lab_36_whiteboard_2.jpg)

-[Code Challenge 37 Peak Index](docs/peak_index/peak_index_in_a_mountain_list_whiteboard.jpg)

-[Code Challenge 38 Construct a BST](docs/construct_BST/construct_BST_whiteboard.jpg)
