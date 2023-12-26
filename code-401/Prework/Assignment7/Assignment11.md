
# Python Error Handling

In this module, you'll learn to:

- Read and use error output from exceptions.
- Properly handle exceptions.
- Raise exceptions with useful error messages.
- Use exceptions to control a program's flow.

## Use Tracebacks to Find Errors

Exceptions in Python are a core feature of the language. You might be surprised to read that something that produces errors is highlighted as a feature. This surprise can be because robust software tools don't seem to crash with a traceback (several lines of text that indicate how the error started and ended).

But exceptions are useful because they help in decision-making by producing descriptive error messages. They can help you handle both expected and unexpected problems.

### Tracebacks

A traceback is the body of text that can point to the origin (and ending) of an unhandled error. Understanding the components of a traceback will make you more effective when you're fixing errors or debugging a program that's not working well.

The first time you encounter exceptions in Python, you might be tempted to avoid the error by suppressing it. When a program suffers an unhandled error, a traceback appears as the output. As you'll see in this module, tracebacks are useful. There are ways to properly handle the errors so that they don't appear or they only show helpful information.

Open a Python interactive session and try opening a nonexistent file:

```python
open("/path/to/mars.jpg")
```

```python
# Output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
FileNotFoundError: [Errno 2] No such file or directory: '/path/to/mars.jpg'
```

That output has several key parts. First, the traceback mentions the order of the output. Then it informs you that the file is stdin (input in the interactive terminal) on the first line of the input. The error is FileNotFoundError (the exception name), which means that the file doesn't exist or perhaps the directory to it doesn't exist.

That's a lot of information. It can be hard to understand why line 1 is meaningful or what Errno 2 means.

Open your desired directory in Visual Studio Code and create a Python file named open.py.

Add the following contents to the file and save:

```python
def main():
    open("/path/to/mars.jpg")

if __name__ == '__main__':
    main()
```

It's a single main() function that opens the nonexistent file, just like before. At the end, this function uses a Python helper that tells the interpreter to execute the function main() when it's called on the terminal. Run the command in a Bash terminal with Python and check the error message:

```bash
python3 open.py
```

```python
# Output
Traceback (most recent call last):
  File "/tmp/open.py", line 5, in <module>
    main()
  File "/tmp/open.py", line 2, in main
    open("/path/to/mars.jpg")
FileNotFoundError: [Errno 2] No such file or directory: '/path/to/mars.jpg'
```

The error output makes more sense now. The paths are pointing to a single file called open.py. The output mentions that the error starts on line 5, which includes the call to main(). Next, the output follows the error to line 2 in the open() function call. And finally, FileNotFoundError again reports that the file or the directory doesn't exist.

Tracebacks almost always include the following information:

- All file paths involved, for every call to every function.
- Line numbers associated with every file path.
- The names of functions, methods, or classes involved in producing an exception.
- The name of the exception that was raised.

## Handle Exceptions

When you first find exceptions that show large tracebacks as output, you might be tempted to catch every error to prevent that from happening.

If you're in a mission to Mars, what could you do if a text on the navigation system reads "an error occurred"? Imagine that there's no other information or context, just a blinking red light with the error text. As a developer, it's useful to put yourself on the other side of the program: what can a user do when there's an error?

Although this module covers how to handle exceptions by catching them, it's not necessary to catch exceptions all the time. Sometimes it's useful to let exceptions be raised so other callers can deal with the errors.

### Try and Except Blocks

Let's use the navigator example to create code that opens configuration files for the Mars mission. Configuration files can have all kinds of problems, so it's critical to report problems accurately when they come up. We know that if a file or directory doesn't exist, FileNotFoundError is raised. If we want to handle that exception, we can do that with a try and except block:

```python
try:
     open('config.txt')
except FileNotFoundError:
     print("Couldn't find the config.txt file!")
```

```python
# Output
Couldn't find the config.txt file!
```

After the try keyword, you add code that has the potential to cause an exception. Next, you add the except keyword along with the possible exception, followed by any code that needs to run when that condition happens. Because config.txt doesn't exist in the system, Python prints that the configuration file is not there. The try and except block, along with a helpful message, prevents a traceback and still informs the user about the problem.

Although a file that doesn't exist is common, it isn't the only error you might find. Invalid file permissions can prevent reading a file, even if the file exists. Let's create a new Python file called config.py in Visual Studio Code. Add the following code to the file that finds and reads the navigation system's configuration file:

```python
def main():
    try:
        configuration = open('config.txt')
    except FileNotFoundError:
        print("Couldn't find the config.txt file!")
```

Next, create a directory called config.txt. Try calling the config.py file to see a new error that should be similar to this one:

```bash
python3 config.py
```

```python
# Output
Traceback (most recent call last):
  File "/tmp/config.py", line 9, in <module>
    main()
  File "/tmp/config.py", line 3, in main
    configuration = open('config.txt')
IsADirectoryError: [Errno 21] Is a directory: 'config.txt'
```

A useless way of handling this error would be to catch all possible exceptions to prevent a traceback. To understand why catching all exceptions is problematic, try it by updating the main() function in the newly created config.py file:

```python
def main():
    try:
        configuration = open('config.txt')
    except Exception:
        print("Couldn't find the config.txt file!")
```

Now run the code again in the same place where the config.txt directory exists with improper permissions:

```bash
python3 config.py
```

```python
# Output
Couldn't find the config.txt file!
```

The problem now is that the error message is incorrect. The directory does exist, but it has different permissions and Python can't read it. When you're dealing with software errors, it can be frustrating to have errors that:

- Don't indicate what the real problem

 is.
- Give output that doesn't match the actual problem.
- Don't hint at what can be done to fix the problem.

Let's fix this piece of code to address all these frustrations. Revert to catching FileNotFoundError, and then add another except block to catch PermissionError:

```python
def main():
    try:
        configuration = open('config.txt')
    except FileNotFoundError:
        print("Couldn't find the config.txt file!")
    except IsADirectoryError:
        print("Found config.txt but it is a directory, couldn't read it")
```

Now run it again, in the same place where the config.txt directory is:

```bash
python3 config.py
```

```python
# Output
Found config.txt but it is a directory, couldn't read it
```

Now delete the config.txt directory to ensure that the first except block will be reached instead:

```bash
rm -f config.txt
python3 config.py
```

```python
# Output
Couldn't find the config.txt file!
```

When errors are of a similar nature and there's no need to handle them individually, you can group the exceptions together as one by using parentheses in the except line. For example, if the navigation system is under heavy loads and the file system becomes too busy, it makes sense to catch BlockingIOError and TimeOutError together:

```python
def main():
    try:
        configuration = open('config.txt')
    except FileNotFoundError:
        print("Couldn't find the config.txt file!")
    except IsADirectoryError:
        print("Found config.txt but it is a directory, couldn't read it")
    except (BlockingIOError, TimeoutError):
        print("Filesystem under heavy load, can't complete reading configuration file")
```

**Tip:** Even though you can group exceptions together, do so only when there's no need to handle them individually. Avoid grouping many exceptions together to provide a generalized error message.

If you need to access the error that's associated with the exception, you must update the except line to include the `as` keyword. This technique is handy if an exception is too generic and the error message can be useful:

```python
try:
    open("mars.jpg")
except FileNotFoundError as err:
     print("Got a problem trying to read the file:", err)
```

```python
# Output
Got a problem trying to read the file: [Errno 2] No such file or directory: 'mars.jpg'
```

In this case, `as err` means that `err` becomes a variable with the exception object as a value. It then uses this value to print the error message that's associated with the exception. Another reason to use this technique is to access attributes of the error directly. For example, if you're catching a more generic `OSError` exception, which is the parent exception of both `FilenotFoundError` and `PermissionError`, you can tell them apart by the `.errno` attribute:

```python
try:
    open("config.txt")
except OSError as err:
     if err.errno == 2:
         print("Couldn't find the config.txt file!")
     elif err.errno == 13:
        print("Found config.txt but couldn't read it")
```

**Tip:** Always try to use the technique that provides the best readability for the code and helps maintain it in the future. Sometimes it's necessary to use less readable code to offer a better user experience when an error happens.

### Exercise - Handle Exceptions

**Loading Configuration**

Imagine you are creating a program which will read configuration information from another source, such as a file. Because the contents are stored external to your program, there may be unexpected formatting or other mistakes.

Start by creating a function which opens and reads the contents of the configuration file. Add a parameter to the function named `path` for the path to the configuration file.

Run the cell below to simulate loading the configuration information.

```python
loaded_config = """# Rocket Ship Configuration File!
fuel_tanks=4
oxygen_tanks=3
initial_propulsion_level=84
$ End of file"""

```

**Parse the Configuration Information**

For this scenario, you want to load any key/value information. The expected format is `key=value`. In Python you can use `split` to separate text based on a character, such as `split('=')`.

If you look at `loaded_config`, you will notice not all lines follow this format. As a result, we need to ensure the code gracefully handles any errors. If the character used for split isn't found, a `ValueError` is raised.

In the cell below, add the code to parse `loaded_config`. Start by creating an empty dictionary using `{}` named `parsed_config` to store the parsed information. Use a `for` loop to split over each line using `split('\n')`. Then use `try` to parse the line as mentioned above (using `split('=')`). If the parse succeeds, store the key/value pair in `loaded_config`. If `ValueError` is raised, display a message saying `Unable to parse:` and the line with the incorrect format. Finish by displaying `parsed_config`.

Your code should resemble the following:

```python
parsed_config = {}
for line in loaded_config.split('\n'):
    try:
        key, value = line.split('=')
        parsed_config[key] = value
    except ValueError:
        print(f'Unable to parse {line}')
print(parsed_config)
```

**Desired Output**

When run, the result should look like the following:

```
Unable to parse # Rocket Ship Configuration File!
Unable to parse $ End of file
{'fuel_tanks': '4', 'oxygen_tanks': '3', 'initial_propulsion_level': '84'}
```

## Raise Exceptions

You might already know of a situation that could cause an error condition when you're writing code. In these situations, it's useful to raise exceptions that let other code realize what the problem is.

Raising exceptions can also help in decision making for other code. As we've seen before, depending on the error, code can make smart decisions to solve, work around, or ignore a problem.

Astronauts limit their water usage to about 11 liters per day. Let's create a function that, depending on the number of astronauts, can calculate how much water will be left after a day or more:

```python
def water_left(astronauts, water_left, days_left):
    daily_usage = astronauts * 11
    total_usage = daily_usage * days_left
    total_water_left = water_left - total_usage
    return f"Total water left after {days_left} days is: {total_water_left} liters"
```

Try it out with five astronauts, 100 liters of water left, and two days to go:

```python
water_left(5, 100, 2)
```

```python
# Output
'Total water left after 2 days is: -10 liters'
```

That's not very useful, because a deficit in liters should be an error. Then, the navigation system could alert the astronauts that there isn't going to be enough water left for everyone in two days. If you're an engineer who's programming the navigation system, you could raise an exception in the `water_left()` function to alert for the error condition:



```python
def water_left(astronauts, water_left, days_left):
    daily_usage = astronauts * 11
    total_usage = daily_usage * days_left
    total_water_left = water_left - total_usage
    if total_water_left < 0:
        raise RuntimeError(f"There is not enough water for {astronauts} astronauts after {days_left} days!")
    return f"Total water left after {days_left} days is: {total_water_left} liters"
```

Now run it again:

```python
water_left(5, 100, 2)
```

**Output:**

```python
# Output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 6, in water_left
RuntimeError: There is not enough water for 5 astronauts after 2 days!
```

In the navigation system, the code for signaling the alert can now use `RuntimeError` to alert:

```python
try:
    water_left(5, 100, 2)
except RuntimeError as err:
    alert_navigation_system(err)
```

The `water_left()` function can also be updated to prevent passing unsupported types. Try passing arguments that aren't integers to check the error output:

```python
water_left("3", "200", None)
```

**Output:**

```python
# Output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in water_left
TypeError: can't multiply sequence by non-int of type 'NoneType'
```

The error from `TypeError` is not very friendly in the context of what the function expects. Update the function so that it uses `TypeError` but with a better message:

```python
def water_left(astronauts, water_left, days_left):
    for argument in [astronauts, water_left, days_left]:
        try:
            # If argument is an int, the following operation will work
            argument / 10
        except TypeError:
            # TypeError will be raised only if it isn't the right type
            # Raise the same exception but with a better error message
            raise TypeError(f"All arguments must be of type int, but received: '{argument}'")
    daily_usage = astronauts * 11
    total_usage = daily_usage * days_left
    total_water_left = water_left - total_usage
    if total_water_left < 0:
        raise RuntimeError(f"There is not enough water for {astronauts} astronauts after {days_left} days!")
    return f"Total water left after {days_left} days is: {total_water_left} liters"
```

Now try again to get a better error:

```python
water_left("3", "200", None)
```

**Output:**

```python
# Output
Traceback (most recent call last):
  File "<stdin>", line 5, in water_left
TypeError: unsupported operand type(s) for /: 'str' and 'int'

During handling of the preceding exception, another exception occurred:

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 9, in water_left
TypeError: All arguments must be of type int, but received: '3'
```

### Exercise - Work with Exceptions

#### Creating a utility to convert strings to boolean values

Imagine you are creating a program that will prompt the user for yes or no, which will be converted to true or false. Because people will enter different values, you need to ensure the different possibilities are handled correctly. If an unknown response is given, the program should raise an error.

For the purposes of this exercise, you'll use the values below for true and false.

```python
true_values = ['yes', 'y']
false_values = ['no', 'n']
```

#### Create the function to test for true or false

You will use `true_values` and `false_values` to create a function named `str_to_bool` to convert strings to Boolean values. `str_to_bool` will accept one parameter named `value`.

Create the function `str_to_bool`. Convert `value` to lowercase letters. If `value` matches an entry in `true_values`, the function should return `True`. If `value` matches an entry in `false_values`, it should return `False`. If it doesn't match any of the values, it should raise a `ValueError` with a message of "Invalid entry."

Your code should resemble the following:

```python
def str_to_bool(value):
    value = value.lower()
    if value in true_values:
        return True
    elif value in false_values:
        return False
    else:
        raise ValueError('Invalid entry')
```

#### Desired output

In the cell below, call `str_to_bool` with different values. When you use `y` or `yes`, it should display `True`. When you use `n` or `no`, it should display `False`. For any other value, an error should be raised.

Your code could resemble the following:

```python
str_to_bool("y")
```
