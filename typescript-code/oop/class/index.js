"use strict";
/**
 * We are designing a simple zoo application where we have different animals.
 * **/
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
    }
    eat(food) {
        console.log(`${this.name} is eating ${food}`);
    }
}
class Reptile extends Animal {
    constructor(name, age, type) {
        super(name, age, type);
    }
    crawl() {
        console.log(`${this.name} is crawling`);
    }
}
let r1 = new Reptile("Lizard", "2", "Reptile");
let r2 = new Reptile("Lizard", "2", "Reptile");
/* TypeScript is a structural type system which is different from
Java, C#, etc. When we compare two different types,
regardless of where they came from, if the types of each member
are compatible, then we say the types themselves are compatible. */
// r1 = r2; // Method crawl is missing in r1 that is of type Animal
r1.crawl();
