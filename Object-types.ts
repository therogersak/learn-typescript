// TypeScript Object Types

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2008,
};

//* Object types like can also be written separately, and even be reused, look at interfaces

//* Type Inference

// TypeScript can infer the types of properties based on their values.

const car2 = {
  type: "Toyota",
};

car2.type = "Ford"; // no error
car2.type = 2; // Error: type "number" is not assignable to type "string"

//* Optional Properties

// optional properties are properties that don't have to be defined in the object definition.

const car3: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type "{type: string}" but required in type "{type: string, mileage: number}"
  type: "Toyota",
};

car3.mileage = 3000;

// Example with an optional property

const car4: { type: string; mileage?: number } = {
  // NO ERROR
  type: "car",
};

car4.mileage = 4000;

//* index Signatures

// Index signatures can be used for objects without a defined list of properties

const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 40; // nO ERROR
NamedNodeMap.Mark = "Fifty"; // Error: Type "string" is not assignable to type

