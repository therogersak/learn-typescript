// TypeScript Functions

/* Typescript has a specific syntax for typing function parameter and return values. */

//* Return Type

/* The type of the value returned by the function can be explicitly defined. */

// the ": number" here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

//? If no return type is defined, Typescript will attempt to infer it through the types of the variables or expression returned.

//* Void Return Type

// The type void can be used to indicate a function doesn't return any value.

function printHello(): void {
  console.log("Hello");
}

//* Parameters
// Function parameters are typed with a similar syntax as variable declaration.

function add(a: number, b: number) {
  return a + b;
}

//* Optional Parameters

/* By default Typescript will assume all parameters are required, but they can be explicitly marked as optional.*/

// the "?" operator here marks parameter `c` as optional

function adding(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

//* Default Parameters

/* For parameters with default values, the default value goes after the type annotation */

function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

//* Named Parameters

/* Typing named parameters follows the same pattern as typing normal parameters */

function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

//* Rest Parameters

/* Rest Paramters can be typed like normal paramters, but the type must be an array as rest parameters are always arrays. */

function multiply(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

//* Type Alias

/* Function types can be specified separately from functions with type aliases.

These types are written similarly to arrow function*/

type Negate = (value: number) => number;

// In this function, the parameter `value` automatically gets assigned the type "number" from the type Negate

const negateFunction: Negate = (value) => value * -1;
