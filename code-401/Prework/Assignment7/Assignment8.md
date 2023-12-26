
# Use 'while' and 'for' loops in Python

In this module, you'll learn to:

- Identify when to use while and for loops.
- Run a task multiple times by using while loops.
- Loop over list data by using for loops.

## About 'while' loops

When you write code, one common challenge is to have it perform a task an unknown number of times. In this unit, you want to allow a user to enter a list of planet names. Unfortunately, you don't know how many names the user enters. To support looping an unknown number of times, you can use a while loop.

A while loop performs an operation while a certain condition is true. You could use a while loop to:

- Check for another line in a file.
- Check if a flag has been set.
- Check if a user has finished entering values.
- Check if something else has changed to indicate that the code can stop performing the operation.

**Important:** The most important thing to remember when you create while loops is to ensure that the condition changes. If the condition is always true, Python will continue to run your code until the program crashes.

The syntax of a while loop is similar to that of an if statement. You provide both a condition and the code you want to run while the condition is true.

A while loop has three important parts:

- The keyword `while`, followed by a space.
- The condition you test. If the condition is true, the code inside the while loop runs.
- The code you want to run for each iteration, indented with nested whitespace.

For example:

```python
while <condition>:
    # code here
```

Let's see how you can create code to prompt users to enter values, and then allow them to enter `done` when they've finished entering the values. In our example, the user input is the condition that is tested at the top of the while loop.

```python
user_input = ''

while user_input.lower() != 'done':
    user_input = input('Enter a new value, or done when done')
```

Notice that you're using `input` to prompt the users. Each time users enter a new value they're changing the condition, which means that the while loop will exit after they've entered `done`.

**Note:** In our example, we've used `lower` to convert the input to lowercase, which allows for a case-insensitive comparison.

You can use the newly entered string as you would any other string that's captured with input. If you want to add it to a list, you could use code that's similar to the following example:

```python
# Create the variable for user input
user_input = ''
# Create the list to store the values
inputs = []

# The while loop
while user_input.lower() != 'done':
    # Check if there's a value in user_input
    if user_input:
        # Store the value in the list
        inputs.append(user_input)
    # Prompt for a new value
    user_input = input('Enter a new value, or done when done')
```

Notice the `if` statement inside the while loop. This statement tests for a string value inside `user_input`. If the while loop is running for the first time, there's no value, so there's nothing to store in `inputs`. After it runs for the first time, `user_input` always keeps the value that the user has entered. Because while is testing to ensure that the value doesn't equal `done` (the word the user enters to exit the app), you know that the current value is one that you can add to the list.

**Note:** You might be familiar with other programming languages that support a `do` loop, which lets you perform a test at the bottom of the loop. Python doesn't provide a `do` loop.

### Exercise - Create a 'while' loop

Start by adding two variables, one for the input from the user, named `new_planet`, and another variable for the list of planets, named `planets`.

Your Python code should look like this:

```python
new_planet = ''
planets = []
```

**Create a while loop:** Starting with the variables you've just created, create a while loop. The while loop will run while `new_planet` is not set to `done`.

Inside the loop, check to see whether the `new_planet` variable contains a value, which should be the name of a planet. This is a quick way to see whether the user has entered a value. If they have, your code will append that value to the `planets` variable.

Complete the while loop by using `input` to prompt the user to enter a new planet name or `done` if they're done entering planet names. You'll store the value from `input` in the `new_planet` variable.

Finally, outside of the while loop, print the list of planets by using `print`.

As you complete this part of the exercise, pay attention to tab levels to ensure code is run at the correct time.

Your code should look like this:

```python
while new_planet.lower() != 'done':
    if new_planet:
        planets.append(new_planet)
    new_planet = input('Enter a new planet, or done if done')

print(planets)
```

**Desired output:** When you run your notebook you will be prompted for new planet names until you enter `done`. (Enter a planet name and select "Submit". For each new entry, overtype the previous entry and select "Submit".) Then you will be presented with a list of the planets you entered.

## Use 'for' loops with lists

In Python, lists can store any type of value, such as strings or numbers:

```python
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
```

You can access any item in a list by enclosing the index in brackets ([]) after the variable name. Indexes start from 0:

```python
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

print("The first planet is ", planets[0])
print("The second planet is ", planets[1])
print("The third planet is ", planets[2])
```

You can also determine the number of items in a list by using `len`. So you could use a while loop and a counter to loop or iterate over each item in the list. Because this operation is so common, Python provides for loops, which you can use to iterate over lists.

**Note:** Python has many types that can be looped over. These types are known as iterables. Python lists are iterable, and they can be used with a for loop. You use a for loop with iterables where you loop a known number of times, once for each item in the iterable.

### About for loops

Here's an example for loop that counts down from 4 to 0:

```python
countdown = [4, 3, 2, 1, 0]
for number in countdown:
    print(number)
print("Blast off!! 🚀")


```

The for loop is a statement with five important parts:

1. The word `for`, followed by a space.
2. The variable name you want to create for each value in the sequence (`number`).
3. The word `in`, surrounded by spaces.
4. The name of the list (`countdown`, in the preceding example), or iterable that you want to loop over, followed by a colon (`:`).
5. The code you want to run for each item in the iterable, separated by nested whitespace.

Let's change that code to wait for one second between each number by using the `sleep()` function:

```python
from time import sleep

countdown = [4, 3, 2, 1, 0]

for number in countdown:
    print(number)
    sleep(1)  # Wait 1 second
print("Blast off!! 🚀")
```

**Note:** Most Python code uses four spaces as the unit of whitespace. To save having to press the space bar four times, most editors have a Tab key shortcut that inserts four spaces.

### Exercise - Create a 'for' loop

The first cell contains the code from the prior exercise, without the print statement. Run the cell and provide a list of planets. (Enter a planet name and select "Submit". For each new entry, overtype the previous entry and select "Submit".)

```python
# Run this cell and provide a list of planets

new_planet = ''
planets = []

while new_planet.lower() != 'done':
    if new_planet:
        planets.append(new_planet)
    new_planet = input('Enter a new planet or done if done')
```

**Display the list of planets:** The `planets` variable stores the planet names that a user entered. You'll now use a for loop to display those entries.

Create a for loop to iterate over the planets name list. You can use `planet` as the name of the variable for each planet. Inside the for loop, use `print` to display each planet name.

Your code should look like this:

```python
for planet in planets:
    print(planet)
```

**Desired output:** When you run the notebook you will be asked for a list of planets. After you enter `done` you should see a list of planets displayed on separate lines.

