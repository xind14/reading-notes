
# Get Started with Jupyter Notebooks for Python

In this module, you'll learn to:

- Create a Jupyter notebook locally.
- Run a Jupyter notebook using Python in Visual Studio Code.
- Describe some ways to build a notebook.

## Exercise - Create and Run Your Notebook

A notebook is an interactive environment where you can both write code and document it. Notebooks can also display mathematical computations and charts.

Here, you'll create a local .ipynb file and run it in Visual Studio Code. The suffix .ipynb is used to refer to Jupyter notebooks, previously called iPython notebooks.

### Create a Notebook

On your local computer, create a file called `ship-manual.ipynb`. Open this file in Visual Studio Code. The Jupyter extension should display the file as blank, with the option to add code and Markdown blocks.

Create a document element in Markdown. At the top of the notebook, select the plus (+) button next to Markdown. A box will appear. Add the following Markdown to the box:

```markdown
# Ship's Instruction Manual
```

### Run Your Notebook

Choose a kernel from the dropdown list on the top right. Make sure to choose a Python 3 kernel.

Select the tick to complete the Markdown field, and you'll find the text is rendered as an <h1> or header text. To see how this Markdown file is rendered, choose "Run All" from the top of the notebook.

### Create Runnable Code

Now you can add some code to the notebook. Let's add a way to display a widget to start the ship's engine.

First, install a library called ipywidgets. Install the library by adding a new code block under the notebook title block. Use Python's package manager, pip, to install the library.

```python
pip install ipywidgets
```

Run this block to install the library.

Then, create a button right in your notebook that, when pressed, displays a message. In a new code block, add the following code:

```python
import ipywidgets as widgets

ignition = widgets.ToggleButton(
    value=False,
    description='Start Engine',
    button_style='success',
    tooltip='Engage your Engine',
    icon='rocket'
)

output = widgets.Output()

display(ignition, output)

def on_value_change(change):
    with output:
        if change['new'] == True:
            print("Engine started!")
        else:
            print("Engine stopped")

ignition.observe(on_value_change, names='value')
```

Run the code by using the arrow on the left.

Your code should display a button:

![Start Engine Button](start_engine_button.png)

Press the button to start the engine.

Press the button again to stop the engine.

What's going on here? You use the ipywidget library to create a button and listen for its value to change, printing the observed message.

## Exercise - Use Advanced Commands

You have created a basic notebook with some Markdown and a widget to start your ship. There is a lot more you can do with notebooks, however!

In your ship's manual, you'd like to create a chart of your ship's daily statistics. You can create all kinds of interesting charts in a notebook, which is also useful for data scientists and machine learning engineers (not just astronauts).

### Create a Visualization

Build a bar chart with some mock data to show how you could plot oxygen levels in your ship.

Install numpy:

```python
pip install numpy
```

Install matplotlib:

```python
pip install matplotlib
```

Create a Markdown block to notate what you will display:

```markdown
## Oxygen levels

Display ten minutes of oxygen levels in your ship.
```

Create a new code block and import two libraries, numpy and matplotlib. Use them to build a bar chart:

```python
import numpy as np
import matplotlib.pyplot as plt

data = np.random.default_rng(12345)
oxy_nums = data.integers(low=0, high=10, size=10)

plt.bar(range(len(oxy_nums)), oxy_nums)
plt.show()
```

Run the code.

Your bar chart looks like this:

![Oxygen Levels Chart](oxygen_levels_chart.png)

Perform ship calculations

Next, you want to show the time that your ship needs to take to get up to a good speed. Annotate and create an equation that will allow you to input your ship's start velocity, desired end velocity, and acceleration in meters per second.

Create a Markdown block to explain the equation:

```markdown
## Ship's velocity

Show the seconds needed to get from 0 to 60 meters per second, given the ship's acceleration in meters per second.
```

Add a code block for the equation:

```python
endVelocity = 60
startVelocity = 0
acceleration = 9.8

time = (endVelocity - startVelocity) / acceleration
print("Time to reach desired velocity = ", time)
```

Run the code block to determine how long it will take to reach your desired velocity.

Your ship's manual now shows some useful information about your spaceship. Because everything is contained in a Jupyter notebook, you won't have any difficulty keeping track of it, as it's all well-annotated and nicely displayed. It even includes an ignition switch! Jupyter notebooks are a useful way to display all kinds of data and even small user interfaces.

