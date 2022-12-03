class Grandpa {
  constructor(name, birthPlace, eyeColor, hairColor) {
    this.name = name;
    this.birthPlace = birthPlace;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
  }

  describe() {
    console.log(`${this.name} was born in ${this.birthPlace} with ${this.eyeColor} eyes and ${this.hairColor} hair.`);
  }
}

class Mom extends Grandpa {
  constructor(name, birthPlace, eyeColor, hairColor) {
    super(name, birthPlace, eyeColor, hairColor);
  }
}

class Child extends Mom {
  constructor(name, birthPlace, eyeColor, hairColor) {
    super(name, birthPlace, eyeColor, hairColor);
  }
}

const tom = new Grandpa('Tom Bronson', 'California', 'brown', 'green');
const leslie = new Mom('Leslie Bronson', 'California', 'brown', 'green');
const kris = new Child('Kristofer Martinez', 'Guam', 'red', 'green');

tom.describe();
leslie.describe();
kris.describe();
