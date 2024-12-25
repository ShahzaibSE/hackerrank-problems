var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    Snake.prototype.bite = function () {
        console.log("bites");
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        alert("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
}(Animal));
var Donkey = /** @class */ (function (_super) {
    __extends(Donkey, _super);
    function Donkey(name, distance) {
        var _this = _super.call(this, name) || this;
        _this.distance = distance;
        return _this;
    }
    Donkey.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        alert("Moving...");
        _super.prototype.move.call(this, meters);
    };
    return Donkey;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (meters) {
        if (meters === void 0) { meters = 1; }
        alert("Jumping...");
        _super.prototype.move.call(this, meters);
    };
    return Cat;
}(Animal));
var a = new Snake("Python");
a.move(5); //Snake move method is called not Animals, this is because of polymorphism
var a1 = new Horse("Rocket");
var h = a1; //explicit casting not require because Child object have same properties and fuctions
var h2 = a1; //explicit will also works but not needed
var a2 = new Donkey("Worker", 100);
var h3 = a2; //explicit casting require because Child object have additional properties or functions
// let h4: Donkey = a2; // Error -- will not work, explicit casting is required as above
var d1 = new Donkey("Worker", 200); //this is possible see below link for detials,
//https://github.com/Microsoft/TypeScript/issues/5303
// object freshness applied to object literals not on class object 
// If you'd like to prevent Animal from being assigned to a Human, you can add a private property to Animal,
// since private and protected properties need to originate from the same declaration to be compatible.
console.log("is Animal? " + (d1 instanceof Animal)); // true
console.log("is Donkey? " + (d1 instanceof Donkey)); // true
console.log("is Horse? " + (d1 instanceof Horse)); // false -- variable has type Horse but actual object is Donkey therefore its giving false for horse 
var d2 = d1; // explicit casting is required 
var s1 = a; //explicit casting needed because Snake has an additional method bite()
var s2 = a; //alternative casting syntax
var h1 = new Cat("Kitten"); //why is this allowed? Because it has same properties and methods (structural type) not because of inheritance
//https://github.com/Microsoft/TypeScript/issues/5303
//**************************************************
//http://stackoverflow.com/questions/30819663/call-an-overridden-method-from-super-class-in-typescript
var A = /** @class */ (function () {
    function A() {
        this.MyvirtualMethod();
    }
    A.prototype.MyvirtualMethod = function () {
        console.log("A");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testString = "B";
        return _this;
    }
    B.prototype.MyvirtualMethod = function () {
        console.log(this.testString); // This becomes undefined
    };
    return B;
}(A));
var obj = new B();
//*******************************
//checking types
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bar;
}(Foo));
var Bas = /** @class */ (function () {
    function Bas() {
    }
    return Bas;
}());
var bar = new Bar();
console.log(bar instanceof Bar); // true
console.log(bar instanceof Foo); // true
console.log(bar instanceof Object); // true
console.log(bar instanceof Bas); // false
//**************************
//Type Guards
//http://blogs.msdn.com/b/typescript/archive/2014/11/18/what-s-new-in-the-typescript-type-system.aspx
//Using instanceof with classes:
/*
class Dog { woof() { } }
class Cat { meow() { } }
var pet: Dog|Cat = ... ;
if(pet instanceof Dog) {
   pet.woof(); // OK
} else {
   pet.woof(); // Error
}
*/
/*User defined type guards in 1.6

In earlier versions of TypeScript, you could use if statements to narrow the type. For example, you could use:

if (typeof x === "number") { … }

This helped type information flow into common ways of working with types at runtime (inspired by some of the other projects doing typechecking of JS). While this approach is powerful, we wanted to push it a bit further.  In 1.6, you can now create your own type guard functions:

interface Animal {name: string; }
interface Cat extends Animal { meow(); }

function isCat(a: Animal): a is Cat {
  return a.name === 'kitty';
}

var x: Animal;

if(isCat(x)) {
  x.meow(); // OK, x is Cat in this block
}

This allows you to work with not only typeof and instanceof checks, which need a type that JavaScript understands, but now you can work with interfaces and do custom analysis.  Guard functions are denoted by their “a is X” return type, which returns boolean and signals to the compiler if what the expected type now is
*/ 
