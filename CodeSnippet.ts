//: DON'T USE "PUBLIC" ACCESSOR

class Ankit extends Person {
  public followers() {
    return 25_550;
  }

  public followUser(userId: string) {
    twitterClient.follow(userId);
  }
}

/*
A method is public by default.
Don't introduce unnecessary pattern to ypur codebase.
Also, the public accessor is not idiomatic JavaScript.
There's no good reason to use it. 
*/

//: USE UNKNOWN Instead of any

const someFunction = (): any => {};

//* Right

const someFunction2 = (): unknown => {};

/* If you cannot infer or define the type, use 'unknown' instead of "any".

Using the unknown type force you to null-check or narrowing the type before using it.

'unknown' is the type-safe counterpart of "any"*/

//: Construct A Readonly type from Interface

interface TwitterUser {
  username: string;
}

const user: Readonly<TwitterUser> = {
  username: "therogersak",
};

user.username = "FakeUser";
// Cannot assign to "username" because it
// is a read only property

/* You can use the TypeScript utility-type Readonly to construct a type with all properties set to readonly.

Trying to reassign a property of a ReadOnly will result in a compile-time error.*/

//: Create A Readonly Array (Using a typescript utility type)

const foo: number[] = [1, 2, 3, 4, 5, 6];
const bar = (ReadonlyArray<number> = foo);

bar[0] = 43; // error
bar[1] = 50; // error

/*
 TypeScript comes with a utility type, ReadonlyArray<T>.
   It's equivalent to Array<T>, but with all mutating methods removed.
   In this way, you can make sure you don't change your arrays after creation.
*/

//: GET RID OF ABSOLUTE PATHS

import SignUp from "../../../components/signup";
import { userState } from "../../../components/signup";

//* Right

import SignUp from "components/signup";
import { userState } from "store/user";

//? Add this to your tsconfig.json file

{
    "compilerOptions": {
        "baseUrl": './src'
    }
}


/* By Adding a "baseUrl" property in your tsconfig.json, you can specify a base directory to resolve non-absolute module names.

This is a great way  to fix the leading "../.." on all your imports, and prevents you from having to change imports when you move files around.*/


//: Use Record To Make An Object Indexable

interface User { name: string };

const users: { [key: string]: User } = {
    AnkitYadav: {
        name: "therogersak"
    }
}

//* Right

interface User2 { name: string };

const users2: Record<string, User2> = {
    AnkitYadav: {
        name:"therogersak"
    }
}


/* Use the utility type 'Record' to make an object indexable, instead of typing it
out manually.
It's more clean, and becomes handy if you want to map the properties of one
type to another. */


//: Create a new type using pick

interface User3 {
    id: string;
    username: string;
    followers: number;
    isBlocked: boolean;
}

const updateUser = (user: Pick<User3, 'id' | "username">) => {
    updateUserFromApi(user.id, user.username)
}

updateUser({id:'21323', username:'therogersak'})

/* You can use Pick to quickly create new types.
And the cool thing is...
Pick is an inbuilt utility type.
We have that available natively in TypeScript */