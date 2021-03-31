// ES6 Arrow Functions
// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}
// Task 2
// Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}
// Task 3
// Re-write the following functions to be arrow functions:

let doMathSum = (a, b) => a + b;


var produceProduct = (a, b) => a * b;

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

const person = {
    firstName: "Karen",
    lastName: "Irkbox",
    age: 42,
}

function printString() {
    return `Hi ${person.firstName} ${person.lastName}, how does it feel to be ${person.age}?`
}

// Extra Credit
// Use template literals to build the string

// Task 5
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

// const animals = [
//    {
//        type: "dog",
//        name: "theodore"
//    },
//    {
//        type: "cat",
//        name: "whiskers"
//    },
//    {
//        type: "pig",
//        name: "piglette"
//    },
//    {
//        type: "dog",
//        name: "sparky"
//    }
// ];

// function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }
// Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 