// TypeScript Special Types

// 1.Type: any

/* any is a type that disables type checking and effectively allows all types to be used. */

//! the example below does not use any and will throw an error:

let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

//* Setting any to the special type any disables type checking

let v: any = false;
v = "string"; // no error as it can be "any" type
v = 100; // no error as it can be "any" type

/* 
! any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...
*/

// 2.Type: unknown

/* unknown is similar, but safer alternaive to any.
TypeScript will prevent unknown types from being used.*/

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

/* 
* unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

Casting is when we use the "as" keyword to say property or variable is of the casted type.
*/

// 3.Type: never

// never effectively throws an error whenever it is defined.

let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// never is rarely used, especially by itself, its primary use is in advanced generics.

// 4.Type: undefined & null

/* undefined and null are types that refer to the Javascript primitives undefined and null respectively */

let a: undefined = undefined;
let b: null = null;

//! These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
