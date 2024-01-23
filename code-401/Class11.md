# Class 11 - Intro to Data Science

## Lab 11 - Scientific computing with Numpy Array

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

## Read 11 - Scientific computing with Numpy

## Resources Link/Pages

- [What is Jupyter Lab](https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html) Just read the overview page, what you really want is the video on that page.
- [Numpy Tutorial](https://www.dataquest.io/blog/numpy-tutorial-python/)

**Bookmark and Review**

- [Numpy Arrays](https://www.tutorialspoint.com/numpy/index.htm)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- Jupyter Lab and NumPy are integral components of the Python data science ecosystem. Many other libraries, such as Pandas, Matplotlib, and SciPy, seamlessly integrate with NumPy. Jupyter Lab provides an ideal environment for working with these libraries and developing data science projects.

## Reading Questions

1. What are the key features and benefits of Jupyter Lab, and how does it differ from Jupyter Notebook?

   - Key Features and Benefits of Jupyter Lab

     - **Unified Interface:** provides a unified and flexible interface that integrates various components, including notebooks, text editors, terminals, and custom components, in a single environment.

     - **Extensibility:** highly extensible, allowing users to customize and enhance their environment through extensions.

     - **Rich Text Support:** includes a text editor with features like syntax highlighting, configurable indentation, and support for markdown, making it suitable for both code and narrative text.

     - **File Browser and Console:** The interface incorporates a file browser for easy navigation and management of files. It also supports consoles and terminals, providing full support for system shells.

   - Differences from Jupyter Notebook

     - **Interface Structure:** provides a more structured interface with a sidebar that can contain multiple panels, making it more versatile for various tasks. In contrast, Jupyter Notebook has a simpler structure with tabs for open notebooks.

     - **Document Handling:** extends beyond notebooks and allows the handling of various document types, including notebooks, scripts, and markdown files, within the same environment. Jupyter Notebook primarily focuses on notebook documents.

     - **Cell Drag-and-Drop:** supports cell drag-and-drop capabilities, enabling users to rearrange cells easily. This feature enhances the organization and structure of notebooks, which is not as seamless in Jupyter Notebook.

     - **Advanced Text Editor:** features a more advanced text editor with enhanced capabilities, including syntax highlighting and configurable indentation. Jupyter Notebook has a simpler text editor.

     - **Extension Management:** improved extension management, making it easier for users to discover, install, and manage extensions directly from the interface. Jupyter Notebook extensions often require additional command-line steps for installation.

2. What are the main functionalities provided by the NumPy library, and how can it be useful in Python programming, particularly for scientific computing and data manipulation tasks?

   - NumPy is a powerful Python library for numerical computing that provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these elements.
   - **Main Functionalities of NumPy:**
     - **Multidimensional Arrays**: NumPy's primary feature is the `ndarray` object for representing N-dimensional arrays.
     - **Mathematical Operations**: Wide range of mathematical functions for array operations, including element-wise, linear algebra, and statistical operations.
     - **Broadcasting**: Powerful capability for operations on arrays of different shapes and sizes.
     - **Indexing and Slicing**: Supports advanced indexing and slicing operations for easy access and manipulation.
     - **Integration with Other Libraries**: Seamless integration with libraries like SciPy, Matplotlib, and scikit-learn for comprehensive data analysis and machine learning.

3. Explain the basic structure and properties of NumPy arrays, and provide examples of how to create, manipulate, and perform operations on them.

   - **Basic Structure and Properties of NumPy Arrays:**

     - Creation: Arrays can be created using functions like `numpy.array()`, `numpy.zeros()`, `numpy.ones()`, `numpy.arange()`, etc.
     - Attributes: Arrays have attributes such as `shape`, `dtype`, and `size`.
     - Indexing and Slicing: Elements can be accessed using indexing, and subarrays can be extracted using slicing.
     - Operations: Support for element-wise and mathematical operations between arrays.

       **Examples:**

       ```python
       import numpy as np

       # Creating arrays
       arr1 = np.array([1, 2, 3])
       arr2 = np.zeros((3, 3))
       arr3 = np.arange(0, 10, 2)

       # Basic properties
       print(arr1.shape)  # (3,)
       print(arr2.dtype)  # float64

       # Indexing and slicing
       print(arr1[0])     # 1
       print(arr2[:, 1])  # Second column of arr2

       # Mathematical operations
       result = arr1 + arr3
       print(result)  # [1 5 9 13 17]
       ```

## Things I want to know more about

- What will we be using numpy for? Data science or more math calculations in this class

## Learning Journal

### Reflection

Write a brief reflection on your learning today, or use the prompt below to get started.

Read [this short article](https://asana.com/resources/impostor-syndrome) on Imposter Syndrome. On a scale from 1 (least) to 10 (most), to what extent do you experience these feelings? Have you always felt the way you do now? If you have successfully lowered the number you’d use to rate your Imposter Syndrome, how have you done so?

- Right now I am at a 9. It's funny and jarring how I recognize myself in four out of five of the types of imposters. Right now for this class and especially I am: "The Expert: Concerned about "what" and "how much" they know, fearing minor gaps in knowledge." and "The Natural Genius: Measures competence by speed and ease, feeling like failure if they don't grasp something immediately." I get that I'm not an expert in python right now at all, but I feel like I should understand more then I do right now, and I already lost confidence in JS, REACT, MERN stack etc because I haven't had time to use it since 301 ended so I just feel even more incompetent. Every lab I've done so far in this program not even this class has been trial and error and so much chat gpt that it feels like I'm not even writing my own code. I experience this often, because all my life I've always felt slower to understand things. I am currently trying to learn how to acknowledge these negative feelings, validate them, and just let them go, but it's a hard process.
