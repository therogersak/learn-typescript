// Typescript Enums

/* An enums is a special "class" that represent a group of contstant (unchangeable variables).

Enums come in two flavors string and numeric. */

//* Numeric Enums - Default

// by default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as "North" is not a valid enum
currentDirection = "North"; // Error: "North" is not assignable to type "CardinalDrections".

//* Numeric Enums - initialized

// You can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West,
}

console.log(CardinalDirections.North); // 1
console.log(CardinalDirections.West); // 4

//* Numeric Enums - Full initialized

/* You can assign unique number values for each enum value. Then the values will not incremented automatically. */

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCodes.NotFound); // logs 404
console.log(StatusCodes.Success); // 200

//* String Enums

/* Enums can also contain strings. This is more common than numeric enums, beacuse of their readability and intent. */

enum CardinalDirection3 {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

console.log(CardinalDirections.East); // logs "East"
console.log(CardinalDirections.West); // logs  "West"
