// TypeScript Union Types

/* Union types are used when a value can be more than a single type

Such as when a property would be string or number.*/

//* Union | (OR)

// Using the | we are saying our parameter is a string or number

function printStausCode(code: string | number) {
  console.log(`My status code is ${code}`);
}

printStausCode(404);
printStausCode("404");

//* Union Type Errors

// Note: you need to know what your type is when union types used to avoid type errors:

function printStausCode2(code: string | number) {
  console.log("My status code is ${code.toUpperCase()}"); // Error: property "toUpperCase()" does not exist ontype 'string | number'.
  //! Property 'toUpperCase' does not exist on type 'number
}
