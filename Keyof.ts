// TypeScript Keyof

/* Keyof is a keyword in TypeScript which is used to extract the key type from an object type. */

//* Keyof with explicit keys
/* When used on an object type with explicit keys, keyof creates a union type with those keys. */

interface Person {
  name: string;
  age: Number;
}

function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person = {
  name: "Ankit",
  age: 18,
};

printPersonProperty(person, "name");

//* Keyof with index signatures

type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
