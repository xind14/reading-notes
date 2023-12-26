Certainly! Here's the content you provided formatted into a Markdown file, incorporating both sections about Python dictionaries:

```markdown
# Manage data with Python dictionaries

In this module, you'll learn to:

- Identify when to use a dictionary.
- Create and modify data inside a dictionary.
- Use dictionary methods to access dictionary data.

## Introducing Python dictionaries

Variables in Python can store various data types. Previously, you learned you can store strings and numbers:

```python
name = 'Earth'
moons = 1
```

Although this method does work for smaller amounts of data, it can become increasingly complex when you're working with related data. Imagine wanting to store information about the moons of both Earth and Jupiter.

```python
earth_name = 'Earth'
earth_moons = 1

jupiter_name = 'Jupiter'
jupiter_moons = 79
```

Notice how we duplicated variables with different prefixes. This duplication can become unwieldy. Because you'll frequently find yourself working with related sets of data, like average rainfall for different months in different cities, storing those variables as individual values isn't a viable option. Instead, you can use Python dictionaries.

Python dictionaries allow you to work with related sets of data. A dictionary is a collection of key/value pairs. Think of it like a group of variables inside of a container, where the key is the name of the variable, and the value is the value stored inside it.

### Create a dictionary

Python uses curly braces ({ }) and the colon (:) to denote a dictionary. You can either create an empty dictionary and add values later, or populate it at creation time. Each key/value is separated by a colon, and the name of each key is contained in quotes as a string literal.

Let's create a dictionary to store the name of the planet Earth, and the number of moons Earth has:

```python
planet = {
    'name': 'Earth',
    'moons': 1
}
```

You have two keys, 'name' and 'moons'. Each key behaves in much the same way as a variable: they have a unique name, and they store a value. However, they're contained inside of a single, larger variable, named planet.

As with regular variables, you need to ensure that you're using the correct data types. In the moons value of 1 in the preceding example, you didn't include quotes around the number because you want to use an integer. If you had used '1', Python would see this variable as a string, which would affect your ability to perform calculations.

Unlike regular variables, key names don't need to follow standard naming rules for Python. You can use key names to be more descriptive in your code.

### Read dictionary values

You can read values inside a dictionary. Dictionary objects have a `get` method that you can use to access a value by using its key.

```python
print(planet.get('name'))
# Output: Earth
```

Accessing values in a dictionary is a common operation. You can also pass the key into square bracket notation (`[]`).

```python
# planet['name'] is identical to using planet.get('name')
print(planet['name'])
# Output: Earth
```

Although the behavior of `get` and the square brackets (`[]`) is generally the same for retrieving items, there's one key difference. If a key isn't available, `get` returns `None`, and `[ ]` raises a `KeyError`.

```python
wibble = planet.get('wibble')  # Returns None
wibble = planet['wibble']  # Throws KeyError
```

### Modify dictionary values

You can also modify values inside a dictionary object using the `update` method. This method accepts a dictionary as a parameter and updates any existing values with the new ones you provide.

```python
planet.update({'name': 'Makemake'})
# No output: name is now set to Makemake.
```

Similar to using the square brackets (`[]`) shortcut to read values, you can use the same shortcut to modify values. The key difference in syntax is that you use `=` to provide a new value.

```python
planet['name'] = 'Makemake'
# No output: name is now set to Makemake.
```

The key advantage to using `update` is the ability to modify multiple values in one operation. You're free to use whichever syntax you feel is most appropriate. Most developers choose square brackets to update individual values.

The following example makes the same edits to our planet variable, updating the name and moons.

Using `update`:

```python
planet.update({
    'name': 'Jupiter',
    'moons': 79
})
```

Using square brackets:

```python
planet['name'] = 'Jupiter'
planet['moons'] = 79
```

### Add and remove keys

You're not required to create all keys when you initialize a dictionary. In fact, you don't need to create any! Whenever you want to create a new key

, you assign it just as you would an existing one.

Let's say you want to update `planet` to include the orbital period in days:

```python
planet['orbital period'] = 4333
```

To remove a key, you use `pop`. `pop` returns the value and removes the key from the dictionary.

```python
planet.pop('orbital period')
```

#### Complex data types

Dictionaries are able to store any type of value, including other dictionaries. This allows you to model complex data as needed. Imagine needing to store the diameter for `planet`, which could be measured around its equator or poles. You can create another dictionary inside of `planet` to store this information:

```python
# Add diameter
planet['diameter (km)'] = {
    'polar': 133709,
    'equatorial': 142984
}
```

To retrieve values in a nested dictionary, you chain together square brackets or calls to `get`.

```python
print(f'{planet["name"]} polar diameter: {planet["diameter (km)"]["polar"]}')
# Output: Jupiter polar diameter: 133709
```

### Exercise - Create Python dictionaries

#### Managing planet data

You want to create a program that will store and display information about planets. To start, you will use one planet. Create a variable named `planet`. Store the following values as a dictionary:

```python
planet = {
    'name': 'Mars',
    'moons': 2
}
```

#### Display planet data

With the variable created, you will now display information. You can retrieve information by either using `get` or square brackets (`[]`) and the key name. Add the code to display the planet information in the following format:

```python
print(f'{planet["name"]} has {planet["moons"]} moon(s)')
```

**Desired output:** When you run the cell, you should see the following result:

```
Mars has 2 moon(s)
```

#### Add circumference information

You can update existing keys or create new ones by either using the `update` method or using square brackets (`[]`). When you're using `update`, you pass in a new dictionary object with the updated or new values. When using square brackets, you specify the key name and assign a new value.

Add a new value to `planet` with a key of 'circumference (km)'. This new value should store a dictionary with the planet's two circumferences:

```python
planet['circumference (km)'] = {
    'polar': 6752,
    'equatorial': 6792
}
```

Finally, add the code to print the polar circumference of the planet. You can use whatever sentence formatting you wish.

```python
print(f'{planet["name"]} has a polar circumference of {planet["circumference (km)"]["polar"]}')
```

**Desired output:** When you run the cell, you should see the following result:

```
Mars has a polar circumference of 6752
```

## Dynamic programming with dictionaries

In your program, you want to perform various calculations, like totaling the number of moons. Additionally, as you get into more advanced programming, you might find that you're loading this type of information from files or a database, rather than coding directly into Python.

To help support these scenarios, Python enables you to treat both the keys and values inside of a dictionary as a list. You can dynamically determine keys and values and perform various calculations.

Imagine a dictionary storing monthly rainfall amounts. You would likely have keys for each month and the associated rainfall. You want to add up the total rainfall, and writing the code to perform the operation by using each individual key would be rather tedious.

### Retrieve all keys and values

The `keys()` method returns a list object that contains all the keys. You can use this method to iterate through all items in the dictionary.

Imagine you have the following dictionary, storing the last three months of rainfall.

```python
rainfall = {
    'october': 3.5,
    'november': 4.2,
    'december': 2.1
}
```

Let's say you want to display the list of all rainfall. You can type out the name of each month, but that would be tedious.

```python
for key in rainfall.keys():
    print(f'{key}: {rainfall[key]}cm')
```

**Output:**

```
october: 3.5cm
november: 4.2cm
december: 2.1cm
```

*Note:* You can still use square brackets (`[]`) with a variable name, rather than the hard-coded string literal.

### Determine if a key exists in a dictionary

When you update a value in a dictionary, Python will either overwrite the existing value or create a new one if the key doesn't exist. If you wish to add to a value rather than overwriting it, you can check to see if the key exists by using `in`. For example, if you want to add a value to December or create a new one if it doesn't exist, you can use the following:

```python
if 'december' in rainfall:
    rainfall['december'] = rainfall['december'] + 1
else:
    rainfall['december'] = 1
```

Because `december` exists, the value will be `3.1`.

### Retrieve all values

Similar to `keys()`, `values()` returns the list of all values in a dictionary without their respective keys. `values()` can be helpful when you're using the key for labeling purposes, such as the preceding example, in which the keys are the name of the month. You can use `values()` to determine the total rainfall amount:

```python
total_rainfall = 0
for value in rainfall.values():
    total_rainfall = total_rainfall + value

print(f'There was {total_rainfall}cm in the last quarter.')
```

**Output:**

```
There was 10.8cm in the last quarter.
```

### Exercise - Dynamic programming with dictionaries

#### Start by creating a variable named `planet_moons` as a dictionary with the following key/values:

```python
planet_moons = {
    'mercury': 0,
    'venus': 0,
    'earth': 1,
    'mars': 2,
    'jupiter': 79,
    'saturn': 82,
    'uranus': 27,
    'neptune': 14,
    'pluto': 5,
    'haumea': 2,
    'makemake': 1,
    'eris': 1
}
```

#### Obtain a list of moons and the number of planets

Python dictionaries allow you to retrieve all the values and keys by using the `values` and `keys` methods, respectively. Each method returns a list containing the data, which can then be used like a regular Python list. You can determine the number of items by using `len` and iterate through it by using `for` loops. In the dictionary you created, the planet names are keys and the number of moons are the values.


Start by retrieving a list with the number of moons, and store this in a variable named moons. Then obtain the total number of planets and store that value in a variable named total_planets.

Your code should look like the following:


```python
# Obtain a list of moons and the number of planets
moons = planet_moons.values()
total_planets = len(planet_moons.keys())

# Determine the average number of moons
total_moons = 0
for moon in moons:
    total_moons = total_moons + moon

average = total_moons / total_planets

print(f'Each planet has an average of {average} moons')
```

**Desired output:**
When you run the notebook, you should see the following result:

```
Each planet has an average of 17.833333333333332 moons
```
