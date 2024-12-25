/**
 * We are designing a simple zoo application where we have different animals.
 * **/

interface AnimalModel {
  name: string;
  type: string;
  age: string;
}

class Animal<T extends AnimalModel> {
  name: string;
  age: string;
  type: string;
  constructor(name: string, age: string, type: string) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  eat(food: T) {
    console.log(`${this.name} is eating ${food}`);
  }
}

class Reptile extends Animal<AnimalModel> {
  constructor(
    name: string,
    age: string,
    type: string
  ) {
    super(name, age, type)
  }
    crawl() {
        console.log(`${this.name} is crawling`);
    }
}

let r1: Reptile = new Reptile("Lizard", "2", "Reptile");
let r2: Animal<AnimalModel> = new Reptile("Lizard", "2", "Reptile");

/* TypeScript is a structural type system which is different from 
Java, C#, etc. When we compare two different types, 
regardless of where they came from, if the types of each member 
are compatible, then we say the types themselves are compatible. */

// r1 = r2; // Method crawl is missing in r1 that is of type Animal

r1.crawl();
