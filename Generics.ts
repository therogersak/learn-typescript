//: TypeScript Generics Explained

/* Generics have been a major feature of strongly typed languages like Java and C#. In TypeScript, they allow the types of components and functions to be "SPECIFIED LATER" which allows them to be used in creating reusable components that can apply to different use cases */

//* Let's see why we need Generics Using the following example =>

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // OK
myStrArr.push(500); // OK

console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]

/* We may want to add the numbers to number array or the strings to the string array but not numbers to the string array or vice-versa.

To solve this, TypeScript introduced generics. Generics uses the type variable <T>, a special kind of variable that denotes types. The Type variable remembers the type that the user provides and works with that particular type only. This is called preserving the type information.

The above function can be rewritten as a generics function as below.*/

function getArray2<T>(itmes: T[]): T[] {
  return new Array<T>().concat(itmes);
}

let myNumArr2 = getArray2<number>([100, 200, 300]);
let myStrArr2 = getArray2<string>(["Hello", "World", "Name"]);

myNumArr2.push(500);
myStrArr2.push("Hi");

myNumArr2.push("Jai");
myStrArr2.push(400);

//* Multiple Type Variables
/* We can specify multiple type variables with different names as shown below. */

function displayType<T, U>(id: T, name: U): void {
  console.log(typeof id + ", " + typeof name);
}

displayType<number, string>(1, "Steve");

//? Generics type can also be used with other non-generics types.

function displayType2<T>(id: T, name: string): void {
  console.log(typeof id + ", " + typeof name);
}

displayType2<number>(1, "Steve"); // number, string

//* Methods and Properties of Generic Type

/* When using type variables to create generic components, TypeScript forces us to use only general methods which are available for every type. */

function displayType3<T, U>(id: T, name: U): void {
  id.toString(); // OK
  name.toString(); // OK

  id.toFixed(); // Compiler Error: 'toFixed' does not exists on type 'T'
  name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'

  console.log(typeof id + ", " + typeof name);
}

/* In the above example, id.toString() and name.toString() method calls are correct because the toString() method is available for all types. However, type specifc methods such as toFixed() for number type or toUppercase() for string type cannot be called. The compiler will give an error.

You can use array methods for the generics array.*/

function displayNames<T>(names: T[]): void {
  console.log(names.join(", "));
}

displayNames<string>(["Steve", "Bill"]); // Steve, Bill

//* Generic Constraint

/* As mentioned above, the generic type allow any data type. However, we can restrict it to certain types using constraints. Consider the following example: */

class Person {
  firstName: string;
  lastName: string;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

function display<T extends Person>(per: T): void {
  console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

display("Bill Gates"); //Compiler Error
