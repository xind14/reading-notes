# Module 1: Write your first Python programs

In this module, you'll learn to:

1. **Use Functions for Console Input and Output:**
   - Understand how to use functions to manage input and output to the console.
2. **Create Variables to Store Data:**
   - Learn the basics of variable creation and how to store data in your programs
3. **Distinguish Between Data Types:**
   - Explore different data types and understand their characteristics.
4. **Use Type Conversion:**
   - Learn the concept of type conversion and how to convert between different data types.



## Work with Output

When you start learning any programming language, you first try out a few statements of code in a read-evaluate-print loop (REPL). You soon want to move into serious development, though. That means learning more about the language, how to structure a program, and more.

### A Python Program

To create a program in Python, you need to store it in a file. The file should have the extension `.py`.

The idea of a program is to do something or carry out a task. To have the program do something, you'll need to add the statements or instructions to perform the task. For example, an instruction could print some text or calculate something. An example program, named `python.py`, can look something like this:

```python
# program.py
sum = 1 + 2
print(sum)
```

### Run a Program

Assume you created a program that consists of multiple statements. You run it by launching the Python executable program in a console. A console is a command-line application that lets you interact with the operating system. To run a program, type the name of the Python executable program, followed by the name of your program. Here's an example of such an execution:

```console
python3 program.py
```

Running such a program would show the following result on the console:

```output
3
```

### The `print()` Function

One of the first things you're likely to do is print to a console. On the console, you can run commands and programs. You can also enter information and show information as text on the screen.

To write information to the console, you can use the `print()` function and implement it as a core function. Because it's a core function, you'll have access to it if Python is installed. To use `print()` in your program, give it an argument:

```python
print("show this in the console")
```

Running the program now would show the following result on the console:

```output
show this in the console
```

Note how the command calls `print()` by using parentheses. That's how you execute a function. If you used square brackets (`[]`) instead of parentheses, it wouldn't work.

### Variables

To get anywhere with coding, you need to understand that you're operating on data. As your program is working on data, you might need to remember a certain value throughout the program's execution. For that, you use variables.

The following example makes a calculation and stores it in variables:

```python
sum = 1 + 2 # 3
product = sum * 2
print(product)
```

### Data Types

A variable assumes a data type. In the preceding program, `sum` gets the type `int`. However, there are many more data types. Here are a few that you're likely to encounter:

| Type         | Description                      | Example(s)                          |
| ------------ | -------------------------------- | ----------------------------------- |
| Numeric type | Number, with or without decimals | `int`, `float`, `complex`, `no = 3` |
| Text type    | String of characters             | `str = "a literal string"`          |
| Boolean type | Boolean                          | `continue = True`                   |

There are more complex types, but let's start with these.

Here's a piece of code that demonstrates some of the preceding types:

```python
planets_in_solar_system = 8 # int, Pluto used to be the 9th planet but is too small
distance_to_alpha_centauri = 4.367 # float, lightyears
can_lift_off = True
shuttle_landed_on_the_moon = "Apollo 11" # string
```

How do you know what type something has? If you see the data being assigned to the variable as shown in the following code, you can spot it:

```python
distance_to_alpha_centauri = 4.367 # looks like a float
```

The other way is to use the `type()` function:

```python
type(distance_to_alpha_centauri) ## <class 'float'>
```

### Operators

Operators let you perform various operations on variables and their values. The general idea is that you have a left side and a right side and an operator in the middle:

```python
<left side> <operator> <right side>
```

Here's what a real example of the preceding placeholder code would look like:

```python
left_side = 10
right_side = 5
left_side / right_side # 2
```

This example uses a slash (`/`) to divide the `left_side` value by the `right_side` value.

There are many more operators. This unit describes some important ones you're likely to encounter.

### Arithmetic Operators

With arithmetic operators, you perform calculations like addition, subtraction, division, and multiplication. Here's a subset of arithmetic operators you can use:

| Type | Description                                                                            | Example  |
| ---- | -------------------------------------------------------------------------------------- | -------- |
| +    | Addition operator that adds two values together                                        | `1 + 1`  |
| -    | Subtraction operator that removes the value of the right side from the left side       | `1 - 2`  |
| /    | Division operator that divides the left side as many times as the right side specifies | `10 / 2` |
| \*   | Multiplication operator                                                                | `2 * 2`  |

### Assignment Operators

You can use assignment operators to assign values to a variable throughout the lifecycle of the variable. Here are some assignment operators you're likely to encounter as you're learning to build programs:

| Operator | Example  |
| -------- | -------- |
| =        | `x = 2`  |
| +=       | `x += 2` |
| -=       | `x -= 2` |
| /=       | `x /= 2` |
| \*=      | `x *= 2` |

### Dates

When you're building programs, you're likely to interact with dates. A date in a program usually means both the calendar date and the time.

You can use a date in various applications, like these examples:

- **Backup file:** Using a date as part of a backup file's name is a good way to indicate when a backup was made and when it needs to be made again.
- **Condition:** You might want to carry a specific logic when there's a certain date.
- **Metric:** Dates are used to check performance on code to (for example) measure the time it takes to execute a function.

To work with a date, you need to import the date module:

```python
from datetime import date
```

You can then call the functions that you want to work with. To get today's date, you can call the `today()` function:

```python
date.today()
```

To show the date on the console, you can use the `print()` function. The `print()` function takes many types of data as input. Here's how you can show today's date:

```python
print(date.today())
```

### Data Type Conversion

You want to use a date with something, usually a string. If you,
for example, want to show today's date on the console, you might run into a problem:

```python
print("Today's date is: " + date.today())
```

What you get is an error:

```output
Traceback (most recent call last):
  File "/<path>/program.py", line 4, in <module>
    print("Today's date" + date.today())
TypeError: can only concatenate str (not "datetime.date") to str
```

The last row of the message tells you what the problem is. You're trying to use the `+` operator and combine two different data types, a string and a date.

To make this code work, you need to convert the date into a string. You accomplish such a conversion by using the utility function `str()`:

```python
print("Today's date is: " + str(date.today()))
```

The output looks like this:

```output
Today's date is: <date>
```

### Exercise - Work with output

```code
from datetime import date

print(date.today())

parsecs = 11
lightyears = parsecs * 3.26
print(str(parsecs) + " parsecs is " + str(lightyears) + " lightyears")
```

Output:

```output
2023-12-25
11 parsecs is 35.86 lightyears
```

## Collect Input

### Command-line Input

When you start a program by using `python3`, you give it the name of the file to start. You can also give it a set of arguments: data that the program will have access to when running. Here's how that can look:

```bash
python3 backup.py 2023-01-01
```

In the preceding code, the string "2023-01-01" can be used as an instruction to the program `backup.py` to start a backup from that date. What you gain by using command-line arguments is flexibility. The program can behave differently depending on its outside input.

### Command-line Arguments

How are these commands captured on the coding side of things? By using the `sys` module, you can retrieve the command-line arguments and use them in your program. Look at the following code:

```python
import sys

print(sys.argv)
print(sys.argv[0]) # program name
print(sys.argv[1]) # first arg
```

`sys.argv` is an array or a data structure that contains many items. The first position, denoted as 0 in the array, contains the program name. The second position, 1, contains your first argument. Assume that the program `backup.py` contains the sample code and you run it like this:

```console
python3 backup.py 2023-01-01
```

The program then yields the following result:

```output
['backup.py', '2023-01-01']
backup.py
2023-01-01
```

### User Input

Another way to pass data to the program is having the user enter the data. You can code it so the program tells the user to enter information. You save that entered data in the program and then act on it.

To capture information from the user, you'll use the `input()` function. Here's an example:

```python
print("Welcome to the greeter program")
name = input("Enter your name: ")
print("Greetings " + name)
```

Assume that the program `input.py` contains the sample code and you run it like this:

```console
python3 input.py
```

Running the program invites you to enter your name, for example:

```output
Welcome to the greeter program
Enter your name:
```

After you enter a value and press Enter, the greeting is returned:

```output
Welcome to the greeter program
Enter your name: Picard
Greetings Picard
```

### Working with Numbers

The `input()` function stores a result as a string, so the following code might not do what you want it to:

```python
print("calculator program")
first_number = input("first number: ")
second_number = input("second number: ")
print(first_number + second_number)
```

Running this program invites you to input the first number, let's say 3:

```output
calculator program
first number: 3
```

After you press Enter, you can enter the second number, let's say 4:

```output
calculator program
first number: 3
second number: 4
```

Pressing Enter gives you the following result:

```output
calculator program
first number: 3
second number: 4
34
```

You probably meant for this program to answer you with 7 instead of 34. So what went wrong?

The explanation is that `first_number` and `second_number` are strings. For the calculation to work correctly, you need to change those strings to numbers by using the `int()` function. By modifying the last line of the program to use `int()`, you can resolve the problem:

```python
print(int(first_number) + int(second_number))
```

Rerunning the program with the same values now returns 7 as the response:

```output
calculator program
first number: 3
second number: 4
7
```

### Exercise - Collect input

```input
parsecs_input = input("Input number of parsecs:")
parsecs = int(parsecs_input)
lightyears = 3.26156 * parsecs

print(parsecs_input + " parsecs is " + str(lightyears) + " lightyears")
```

