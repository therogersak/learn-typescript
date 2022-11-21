// TypeScript Tuples

//* Typed Array

/* a tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known tpye of value.

To define a tuple, specify the type of each element in the array:*/

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [10, false, "Coding is like habit"];

//! Try to set them in the wrong order:

// define our tuple
let ourTuple2: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple2 = ["Coding is like habit", true, 50];

//* Readonly Tuple

/* A good practice is to make your tuple readonly

Tuples only have strongly defined types for the initial values:*/

// define our tuple
let ourTuple3: [boolean, number, string];
// initialize correctly
ourTuple3 = [true, 3, "Ram"];
// we have no type safety in our tuple for indexes 3+
ourTuple3.push("Jai Shree Krishna");
console.log(ourTuple3);

//? You see the new valueTuples only have strongly defined types for the initial values:

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "Ram Ram",
];
// throws error as it is readonly.
// ourReadonlyTuple.push("Coding God took a day offf")

//* Named Tuples
// Named Tuples allow us to provide context for our values at each index.

const graph: [x: number, y: number] = [44, 34];

// Named tuples provide more context for what our index values represent

//* Destructuring Tuples
// Since tuples are array we can also destructure the,

const num: [number, number] = [20, 30];
const [c, d] = num;
