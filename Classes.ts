// TypeScript Classes

/* TypeScript adds types and visibility modifiers to JavaScript classes */

//* Members: Types

/* The members of a class (properties & methods) are typed using type annotations similar to variables. */

class Person {
  name: string;
}

const person = new Person();
person.name = "Ankit";

//* Members: Visibility
// Class members also be given special modifiers which affect visibility.

/* There are three visibility modifires in TypeScript.
   1.public - (default) allows access to the class member from anywhere.
   2.private - only allows access to the class members from within class.
   3.protected - allows access to the class members from itself and any classes that inherit it, which is covered in the inheritance section below.
*/

class User {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const user = new User("Ankit");
console.log(person.getName()); //! Error: person.name isn't accessible from outside the class since it's private


// the this keyword in a class usually refers to the instance of the class.

