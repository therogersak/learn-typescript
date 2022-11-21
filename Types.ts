//? TypeScript Simple Types

//* TypeScript supports some simple types (primitives)

/* 1.boolean - true or false values
   2.number - whole numbers and floating point values
   3.string - text values like "Typescript Rocks" */

//* Type Assignment

/* When creating a variable, there are two main ways TypeScript assigns a type:
   
   1.Explicit
   2.Implicit
   
   */

//* Explict (writing out the type) Type:

let firstName: string = "Ankit";

//: Implicit (Typescript will "guess" the type, based on the assigned value) Type

let lastName = "Yadav";

//! Having TypeScript "guess" the type of a value is called infer.

//* Error In Type Assignment

// Typescript will throw an error if data types do not match

let string: string = "Ankit"; // type string
string = 34; // attempts to re-assign the value to a different type

//* Unable to infer

/* TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking */

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

/* This behavior can be disabled by enabling noImplicitAny as an option in a Typescript's project tsconfing.json. That is a JSON config file for customizing how some of TypeScript behaves. */
