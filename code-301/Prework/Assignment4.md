# Learn ES6 Classes in JavaScript

## Readings and Resources: ES6 Classes

Below you will find some reading material, code samples, and some additional resources that will help you to better understand ES6 Classes

- Watch the [Shred Talk: ES6 Classes](https://youtu.be/9Yc5J3Ap9-4)
- Review the [Demo Code](https://codefellows.github.io/code-301-guide/curriculum/prework/classes/DEMO.html)
- Complete the [Assignment](https://codefellows.github.io/code-301-guide/curriculum/prework/classes/LAB.html)

## Objects and Inheritance

JavaScript objects use prototype-based inheritance. Its design is logically similar (but different in implementation) from class inheritance in strictly Object Oriented Programming languages like Java and C#.

It can be loosely described by saying that when methods or properties are attached to object’s prototype they become available for use on that object and its descendants, but not directly attached to them.

When you use class and extends keywords internally JavaScript will still use prototype-based inheritance. It just simplifies the syntax (this is often called “Syntactic Sugar”). While classes are easier to use, it’s still very important to understand how prototype-based inheritance works. It’s still at the core of the language design.

### Prototypal Inheritance

    function Animal(name) {
      this.name = name;
    }
    Animal.prototype.walk = function() {}

    function Bird(name) {
      // I can do all the things animals can do!
      Animal.call(this, name);
    }
    // Unlike other animals, birds can fly
    Bird.prototype.fly = function() {}

    // Make a new bird ..
    let parrot = new Bird('parrot');
    parrot.fly();
    parrot.walk();

### ES6 Classes

The same thing with classes (much cleaner!)

- `function()` becomes `class {}`
- `call()` becomes `extends`
- Classes are standalone, self-contained object (instance) factories
  - Ultimately, they result in a prototype
  - But for the developer, they are many orders of magnitude easier to comprehend and work with

            class Animal {
              constructor(name) {
                this.name  = name;
              }

              walk() {}
            }

            // Thanks to 'extends', all birds can now do all things animals can
            class Bird extends Animal {
              // Birds can walk, because they're animals also do their own thing.
              fly() {}
            }

            // Make one (the same was as before, but wasn't the class creation much easier?)
            let parrot = new Bird('parrot');
            parrot.fly();
            parrot.walk();

## Additional Resources

- Video: [what the heck is the event loop anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [MDN inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


## ES6 Classes - Demo Code

### Constructor Functions & Prototypes

    const Animal = function(name, legs) {
      this.name = name;
      this.legs = legs;
      this.eat = function() {
        this.isEating = true;
      }
    }
    Animal.prototype.walk = function() {
      this.isWalking = true;
    }

    const Dog = function(name, legs) {
      Animal.call(this, name, legs);
    }
    Dog.prototype = Object.create(Animal.prototype);

    let puppy = new Dog('blake', 4);
    puppy.walk();
    puppy.eat();
    console.log(puppy);
    console.log(puppy instanceof Animal);
    console.log(puppy instanceof Dog);

### ES6 Classes

    class Animal {

      constructor(name, legs) {
        this.name = name;
        this.legs = legs;
      }

      walk() {
        this.isWalking = true;
      }

      eat() {
        this.isEating = true;
      }

    }

    class Dog extends Animal {

      constructor(name, legs, furType) {
        super(name,legs);
        this.furType = furType;
      }

      speak() {
        console.log('Wooof!');
      }

    }

    let rosie = new Dog('rosie', 4, 'Short Hair');
    rosie.walk();
    rosie.eat();
    console.log(rosie);
    rosie.speak();

## Lab - ES6 Classes

In this lab, you will be doing your first “refactoring”, which the process of migrating working code into a new methodology or tech stack. You’ll migrate a standard constructor function exported from a node module into a Class, keeping the functionality (and the interface) exactly the same.

## Getting Started

Fork the [Online REPL](https://repl.it/@codefellows/ES6-Classes) for this assignment. Complete your work in the online editor

## Requirements

- Implement both `Car`and `Motorcycle` as Vehicles using only Javascript ES6 `Class{}` syntax

## Implementation Details

When running this REPL, you will see that there is some output that will show you that a Car and Motorcycle can be created properly using a Constructor Function and Prototype methods.

However, the Vehicles via ES6 Classes will cause errors, as it has not yet been implemented.

Your work will be done in the `vehicles-with-classes.js` file, which is setup to run the same methods on Car and Motorcycle classes as the “Constructor” version, with the expectation that you can produce identical output
    - Using ES6 Classes and inheritance, replicate the behavior of the Vehicle, Car, and Motorcycle implementations
    - Your output from this file should be exactly the same as the output from the other version (vehicles-with-constructor.js).
    - Clicking the “run >” button will execute both versions

## Assignment Submission Instructions

Submit a link to your [completed REPL](https://replit.com/@XinDeng/ES6-Classes-Lab-301-Prework)

## MDN Readings

1. **Classes as Templates for Objects:**
   - **Template for Objects:** Classes are like templates for creating objects. They encapsulate data with code to work on that data.

2. **Ways to Define Classes:**
   - **Declaration and Expression:** Classes can be defined using a declaration or an expression.
   - **Class Declaration:** Using the `class` keyword, you can declare a class with a name.
   - **Class Expression:** Classes can also be created anonymously or with a name assigned to a variable.

3. **Class Body:**
   - The body of a class, enclosed in curly braces `{}`, is where you define class members such as methods or the constructor.
   - Class elements can be categorized by kind, location (static or instance), and visibility (public or private).

4. **Constructor:**
   - The constructor is a special method for creating and initializing objects created with a class.
   - It is used to set up initial values for object properties.
   - Only one constructor method is allowed in a class.

5. **Static Methods and Fields:**
   - The `static` keyword is used to define static methods or fields, which belong to the class itself rather than instances.
   - Useful for utility functions or data shared among all instances.

6. **Field Declarations:**
   - Fields can be declared inside the class without using the constructor explicitly.

7. **Private Properties:**
   - Private fields, denoted by `#`, are used to define private properties that cannot be accessed from outside the class.

8. **Inheritance:**
   - The `extends` keyword is used to create a class as a child of another class (inheritance).
   - The `super` keyword is used to call the constructor or methods of the parent class.

9. **Evaluation Order:**
   - When a class is evaluated, components like the `extends` clause, constructor, and class elements are evaluated in a specific order.
