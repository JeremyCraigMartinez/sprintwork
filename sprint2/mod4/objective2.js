/* ==== Prototypes to Class Conversion Challenge

  1. Study the console.log() and object method invocations at the bottom of the page. Convert the constructor classes into class syntax

  2. Stretch Challenge: Create a new class function called Cat that extends Animal. Add properties and a method unique to a cat.  Make sure cat inherits from Animal so you can use all of the properties and methods found there.  Console.log() unique features of the cat as well as inherited properties from Animal.

Potential solution - Avoid looking until you're finished:

https://codepen.io/lambdaschool/pen/gdKQbb?editors=0012

*/

class Animal {
  constructor(attributes) {
    this.animalCommonName = attributes.animalCommonName;
    this.weight = attributes.weight;
    this.height = attributes.height;
    this.food = attributes.food;
  }
  eat() {
    console.log(`The ${this.animalCommonName} eats ${this.food}`);
  }
}

class Dog extends Animal {
  constructor(dogAttributes) {
    super(dogAttributes)
    this.name = dogAttributes.name;
    this.bark = dogAttributes.bark;
  }
  speak() {
    console.log(`${this.name} says: ${this.bark}`);
  }
}

const dog = new Dog({
  'name': 'Dr. Doggo',
  'animalCommonName': "dog",
  'weight': 40,
  'height': 12,
  'food': 'meat',
  'bark': 'Woof!'
});

console.log(dog.animalCommonName); // "dog"
dog.eat(); // "The dog eats meat"
dog.speak(); // "Dr. Doggo says: Woof!"
