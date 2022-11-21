// TypeScript Casting

/* There are times when working with types where it's neccessary to override the type of a variable, such as when incorrect types are provided by a library

Casting is the process of overriding a type.*/

//* Casting with as

/* A straightforward way to cast a variable is using the as keyword, which will drectly change the type of the given variable. */

let x: unknown = "hello";
console.log((x as string).length);

/* Casting doesn't actually change the type of the data within the variable, for Example the following code with not work as expected since the variable x is still holds a number */

let y: unknown = 5;
console.log((y as string).length); // prints undefined since numbers don't have length

/* TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doen't makes sense without converting the data: */

console.log((4 as string).length); //! Error: Conversion of type "number" to type "string" may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to "number" first.

//* Casting with <>
// Using <> works the same as casting with <>

let a: unknown = "Hello";
console.log((<string>x).length);

/* This type of casting will not work with TSX, such as when working on React files. */

//* Force casting

/* To override type error that TypeScript may throw when casting. first cast to unkown then to the target type */

let b = "Hello";
console.log((x as unknown as number).length); //! x is not actually a number so this will return undefined     
