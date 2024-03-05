# Python Notes

1. What does the following code print to the console?
    - print(f"I like the number {6 + 2}")

      ```
      "I like the number 8" is printed to the console.

      This example uses string interpolation. When a string is preceded with a f it tells Python to use `string interpolation and it will evaluate all values enclosed by brackets ({}) in the string.`
      ```

2. When a variable is reassigned, it loses all knowledge of other variables that it used to be assigned to.

## Data types:


| Setting Data Type | Data Type | Specify Data Type with Constructor Function |
| ----------------- | --------- | ------------------------------------------ |
| x = "Hello World" | str | x = str("Hello World") |
| x = 20 | int | x = int(20) |
| x = 20.5 | float | x = float(20.5) |
| x = 1j | complex | x = complex(1j) |
| x = ["apple", "banana", "cherry"] | list | x = list(("apple", "banana", "cherry")) |
| x = ("apple", "banana", "cherry") | tuple | x = tuple(("apple", "banana", "cherry")) |
| x = range(6) | range | x = range(6) |
| x = {"name" : "John", "age" : 36} | dict | x = dict(name="John", age=36) |
| x = {"apple", "banana", "cherry"} | set | x = set(("apple", "banana", "cherry")) |
| x = frozenset({"apple", "banana", "cherry"}) | frozenset | x = frozenset(("apple", "banana", "cherry")) |
| x = True | bool | x = bool(5) |
| x = b"Hello" | bytes | x = bytes(5) |
| x = bytearray(5) | bytearray | x = bytearray(5) |
| x = memoryview(bytes(5)) | memoryview | x = memoryview(bytes(5)) |


## Strings

1. Check String
    - To check if a certain phrase or character is present in a string, we can use the keyword `in`.

      ```Example
      Check if "free" is present in the following text:

      txt = "The best things in life are free!"
      print("free" in txt)
      returns true
      ```
2. Slicing
    - Specify the start index and the end index, separated by a colon, to return a part of the string.
        - print(b[2:5]) end index is not included

3. Modify strings - **All string methods return new values. They do not change the original string.**
    - The `strip()` method removes any whitespace from the beginning or the end
    - The `replace()` method replaces a string with another string:
      ```
      a = "Hello, World!"
      print(a.replace("H", "J"))
      ```
    - The `split()` method returns a list where the text between the specified separator becomes the list items. splits the string into substrings if it finds instances of the separator:
    - The `format()` method takes the passed arguments, formats them, and places them in the string where the placeholders {} are. takes unlimited number of arguments, and are placed into the respective placeholders. You can use index numbers {0} to be sure the arguments are placed in the correct placeholders:

      ```quantity = 3
      itemno = 567
      price = 49.95
      myorder = "I want {} pieces of item {} for {} dollars."
      print(myorder.format(quantity, itemno, price))

      quantity = 3
      itemno = 567
      price = 49.95
      myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
      print(myorder.format(quantity, itemno, price))

      ```


## 4 built in data types used to store collections of data: list, tuple, set, dictionary

### List

1. Lists are used to store multiple items in a single variable.

2. Lists are created using square brackets:
3. List items are ordered, changeable, and allow duplicate values.

4. Lists are ordered, it means that the items have a defined order, and that order will not change. If you add new items to a list, the new items will be placed at the end of the list.

5. Lists are defined as objects with the data type 'list':

#### Access list items

1. referring to the index number: `print(thislist[1])`
2. Negative indexing means start from the end. -1 refers to the last item, -2 refers to the second last item etc.
3. range of indexes by specifying where to start and where to end the range. When specifying a range, the return value will be a new list with the specified items: `print(thislist[2:5])` The search will start at index 2 (included) and end at index 5 (not included).
4. leaving out the start value, the range will start at the first item: `print(thislist[:4])`
5.  leaving out the end value, the range will go on to the end of the list: `print(thislist[2:])`


#### Change list items

- `insert()` inserts item at specified index: `thislist.insert(2, "watermelon")` = `['apple', 'banana', 'watermelon', 'cherry']`
- `append()` adds item to end of list
- use the `extend()` method. To append elements from another list to the current list, does not have to append lists, you can add any iterable object (tuples, sets, dictionaries etc.).
- `remove()` removes the specified item, if dups removes first occurrence
-  `pop()` removes the specified index, if no index specified it removes last item
-  `del` keyword also removes the specified index: `del thislist[0]` or delete list completely `del thislist`
-  `clear()` empties the list. The list still remains, but it has no content.

#### List comprehensions?

#### sort list

1. `sort()` method that will sort the list alphanumerically, ascending, by default:
2. To sort descending, use the keyword argument `reverse = True`: `thislist.sort(reverse = True)`
3. is case sensitive, resulting in all capital letters being sorted before lower case letters:
4. `reverse()` method reverses the current sorting order of the elements.


#### copy list

1. `copy()` method: `mylist = thislist.copy()`
2. `list()` `mylist = list(thislist)`

#### count method
`
1. The count()` method returns the number of elements with the specified value.
2. syntax = `list.count(value)` param = value (value	Required. Any type (string, number, list, tuple, etc.). The value to search for.
)


### tuples

1. a collection which is ordered and unchangeable.
2. written with round brackets.
3. cannot change, add or remove items after the tuple has been created.
4. defined as objects with the data type 'tuple':
5. use the tuple() constructor to make a tuple. `thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets`

#### update tuple

1. Tuples are unchangeable, or immutable as it also is called. But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple.
2. Add tuple to a tuple. You are allowed to add tuples to tuples, so if you want to add one item, (or many), create a new tuple with the item(s), and add it to the existing tuple:

```
Create a new tuple with the value "orange", and add that tuple:

thistuple = ("apple", "banana", "cherry")
# add , for one item for it to be read as tuple
y = ("orange",)
thistuple += y

print(thistuple)
```


#### unpack tuple


1. If the number of variables is less than the number of values, you can add an * to the variable name and the values will be assigned to the variable as a list:

```
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

(green, yellow, *red) = fruits

print(green)
print(yellow)
print(red)

apple
banana
['cherry', 'strawberry', 'raspberry']

```

### Set

1. A set is a collection which is unordered, unchangeable*, and unindexed. Set items are unchangeable, but you can remove items and add new items.
2. written with curly brackets.
3. will appear in a random order
4. cannot have two items with the same value.
5. defined as objects with the data type 'set':
6. use the `set()` constructor to make a set. `thisset = set(("apple", "banana", "cherry")) # note the double round-brackets print(thisset)`


#### access set items

1. You cannot access items in a set by referring to an index or a key. But you can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in keyword.

#### Add set items

1. To add one item to a set use the `add()` method.
2. To add items from another set into the current set, use the `update()` method.
3. `union()` method returns a new set with all items from both sets:

#### Remove set item

1. To remove an item in a set, use the `remove()`, or the `discard()` method.
    - If the item to remove does not exist, `remove()` will raise an error.
    - If the item to remove does not exist, `discard()` will **NOT** raise an error.


#### Keep only the dups

1. The `intersection_update()` method will keep only the items that are present in both sets.

```
Example
Keep the items that exist in both set x, and set y:

x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

x.intersection_update(y)

print(x)

{'apple'}

```

2. The `intersection()` method will return a new set, that only contains the items that are present in both sets.

```
Example
Return a set that contains the items that exist in both set x, and set y:

x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

z = x.intersection(y)

print(z)
```


#### Keep All, But NOT the Duplicates

1. The `symmetric_difference_update()` method will keep only the elements that are NOT present in both sets.

```
Example
Keep the items that are not present in both sets:

x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

x.symmetric_difference_update(y)

print(x)
{'google', 'banana', 'microsoft', 'cherry'}
```

2. The `symmetric_difference()` method will return a new set, that contains only the elements that are NOT present in both sets.

```
Example
Return a set that contains all items from both sets, except items that are present in both:

x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}

z = x.symmetric_difference(y)

print(z)

```

### Dictionaries

1. store data values in key:value pairs.

2. ordered*, changeable and do not allow duplicates. cannot have two items with the same key:
3. curly brackets, and have keys and values:
4. defined as objects with the data type 'dict':
5. use the `dict()` constructor to make a dictionary.

#### Accessing items

1. referring to its key name, inside square brackets or `get()` that will give you the same result:

```
ExampleGet your own Python Server
Get the value of the "model" key:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]

or

x = thisdict.get("model")

```

2. `keys()` method will return a list of all the keys in the dictionary.
3. `values()` method will return a list of all the values in the dictionary.
4. `items()` method will return each item in a dictionary, as tuples in a list.

```
dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])
```

#### change items

1. The `update()` method will update the dictionary with the items from the given argument. The argument must be a dictionary, or an iterable object with key:value pairs. if item doesn't exist item will be added

```
Example
Update the "year" of the car by using the update() method:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"year": 2020})

```

## if else

1. The `elif` keyword is Python's way of saying "if the previous conditions were not true, then try this condition".
2. `if` statements cannot be empty, but if you for some reason have an `if` statement with no content, put in the `pass` statement to avoid getting an error.

## while loops

1. With the `while` loop we can execute a set of statements as long as a condition is true. remember to increment i, or else the loop will continue forever.
2. With the `break` statement we can stop the loop even if the while condition is true:

## for loops

1. in nested loops The "inner loop" will be executed one time for each iteration of the "outer loop":



## python functions



### arbitrary arguments *args

1. If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition. This way the function will receive a tuple of arguments, and can access the items accordingly:

```
Example
If the number of arguments is unknown, add a * before the parameter name:

def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")

```

### Keyword Arguments kwargs or **kwargs

1. You can also send arguments with the key = value syntax. This way the order of the arguments does not matter.

```Example
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")
```

2. If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition. This way the function will receive a dictionary of arguments, and can access the items accordingly:

```
Example
If the number of keyword arguments is unknown, add a double ** before the parameter name:

def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Tobias", lname = "Refsnes")
```

## Classes/Objects

1. All classes have a function called `__init__()`, which is always executed when the class is being initiated.
    - Use the `__init__()` function to assign values to object properties, or other operations that are necessary to do when the object is being created:
    ```
    Example
    Create a class named Person, use the __init__() function to assign values for name and age:

    class Person:
      def __init__(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    ```
    - **The __init__() function is called automatically every time the class is being used to create a new object.**


2. The `__str__()` function controls what should be returned when the class object is represented as a string.
    - If the `__str__()` function is not set, the string representation of the object is returned:
      ```
      Example
      The string representation of an object WITHOUT the __str__() function:

      class Person:
        def __init__(self, name, age):
          self.name = name
          self.age = age

      p1 = Person("John", 36)

      print(p1)

      returns= <__main__.Person object at 0x15039e602100>

      ```


3. Methods in objects are functions that belong to the object.
    - The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.
        - does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:



## Python inheritance

1. Inheritance allows us to define a class that inherits all the methods and properties from another class.
    - **Parent class** is the class being inherited from, also called base class.
    - **Child class** is the class that inherits from another class, also called derived class.

2. When you add the` __init__()` function, the child class will no longer inherit the parent's `__init__()` function.
    - Note: The child's `__init__()` function overrides the inheritance of the parent's `__init__()` function.
    - To keep the inheritance of the parent's `__init__()` function, add a call to the parent's `__init__()`function:

      ```Example
      class Student(Person):
        def __init__(self, fname, lname):
          Person.__init__(self, fname, lname)```

3. Python also has a `super()` function that will make the child class inherit all the methods and properties from its parent:
    - By using the `super()` function, you do not have to use the name of the parent element, it will automatically inherit the methods and properties from its parent.

      ```
      Example
      class Student(Person):
        def __init__(self, fname, lname):
          super().__init__(fname, lname)

      ```
