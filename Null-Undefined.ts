// TypeScript Null & Undefined

/* Typescript has a powerful system to deal with null or Undefined values.

! By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.

The rest of this page applies for when strictNullChecks is enabled.
*/

let value: string | undefined | null = null;
value = "hello";
value = undefined;

//* Optional Chaining

/*  optional Chaining is a JavaScript feature that works well with TypeScript's null handling. It allows accessing on an object, that may or may not exist, with a compact syntax. It can be used with the ?. operator when accessing properties. */


interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
};

printYardSize(home); // Prints 'No yard'