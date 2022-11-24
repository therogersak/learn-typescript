// Types by inference

let helloWorld = "Hello World";

// Defining Types

const user1 = {
  name: "Ankit",
  id: 0,
};

// You can explicitly decribe this object's shape using an interface declaration.

interface User {
  name: string;
  id: number;
}

/* You can then declare that a JavaScript object conform's to the shape of your new interface by using syntax like : TypeName after a variable declaration */

const user: User = {
  name: "Ankit",
  id: 0,
};

/* Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes: */

interface User1 {
  name: string;
  age: number;
}

class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const newUser = new UserAccount("Ankit", 18);

//* You can use interfaces to annotate parameters and return value to function

function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}

/* There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).

You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.*/

// Composing Types

/* With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so:  with unions and with generics.*/

// Unions

type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

/* Union provide a way to handle different types too: */

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// Generics

/* Generics provide variables to types. A comman example is an array without generics could contain anything. An array with generics can describe the values that the array contains. */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// Structural Type System

/* One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type. */

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

/* The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object’s fields to match. */

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
const color = { hex: "#187ABF" };
logPoint(color);
Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
    Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
  


    // there is no difference between how classes and objects conform to shapes:

    class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"