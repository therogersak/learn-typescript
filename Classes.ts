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

//* Parameter Properties

/* TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameters. */

class Car {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const car = new Car("Land Rover");
console.log(car.getName());

//* Readonly

/* Similar to arrays, the readonly keyword can prevent class members from being changed. */

class Game {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initail definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const game = new Game("PUBG");
console.log(game.getName());
