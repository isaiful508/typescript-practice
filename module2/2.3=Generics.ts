{
//
//Generic type 

type GenericArray<T> = Array<T>; //dynamic generic type

// const rollNumbers : number[] = [3, 6, 8];
const rollNumbers : GenericArray<number> = [3, 6, 8];

// const mentors : string[] = ["Mr.", "x", "Y"];
const mentors : GenericArray<string> = ["Mr.", "x", "Y"];

const user1 : GenericArray <{name : string; age: number}> = [
    {
        name : "Mezab",
        age : 100
    },
    {
        name : "Jhankar Mahbub",
        age : 110
    },
]

// generic tuple

type GenericTuple<X, Y> = [X, Y];

const manush : GenericTuple<string, string> = ['Mr.X', 'Mr. Y']

interface User {
    name : string;
    age: number;
}


const user : GenericArray<User> = [
    {
        name : "Mezba",
        age : 100
    }
]

//
}