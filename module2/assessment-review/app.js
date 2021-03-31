// // Forms
// // How do I use the name attribute to select a form

//     const form = document.myForm;


// // How do I use the name attribute of a form and input to select and input

//     const input = form.value;

// // Which property holds the entered input of an input box?

//     value

// // What method do I need to call to prevent my page from reloading on a submit event?

//     e.preventDefault();


// // What element to I add the submit event listener too?

//     // the button


// // Why would I use the submit event listener instead of an onclick?

//     // it gives more options for what the user can do (checkbox, enter button, click, etc)

// // What's the difference between localStorage and sessionStorage?


//     // localStorage is on the machine and sessionStorage is in the browser


// // What's the difference between localStorage and cookies?

//     // localStorage is on the machine and cookies are stored in the browser



// // For .map, .filter, .find, .findIndex, .every, .some, .sort, .reduce:
// // what do they take as an argument? 

//     // they take in a function as an argument

// // What argument does the callback function?

    

// // What does the iterator method return?

//     // it returns a new array and each string features a new change

// // What does our callback take as a parameter?

//     // the original array


// // What data type should the callback return?

//     // a new array


// // What does it do to the original array? 


//     // it changes items in the array



// // Code Challenge options
// // Given an array of animal objects with a name, species, and weightInPounds use iterator methods to: 
// // create an array of strings that follow the pattern, "My name is Spot, I am a canine who weighs 29 pounds"

let dogs = [
    {
        name: "lucky",
        species: "black lab",
        weightInPounds: 19,
    },
    {
        name: "spot",
        species: "pug",
        weightInPounds: 10,
    },
]

const result = dogs.map(dog => dog)

console.log(`My name is ${result.name}, I am a ${result.species} who weights ${result.weightInPounds}lbs`)

// // return an array of all the felines

let animals = [
    {
        name: "lucy",
        species: "feline"
    },
    {
        name: "jack",
        species: "canine"
    },
    {
        name: "snape",
        species: "feline"
    }
]

const felines = animals.filter(animal => animal.species==="feline")
console.log(felines)

// // return the index of the dog named "Spot"

const spotIndex = dogs.findIndex(dog => dog.name === "spot")
console.log(spotIndex)

// // return a boolean confirming all the animals weigh more than 10 pounds

const moreThan10LbsTrue = dogs.find(dog=>dog.weightInPounds >= 10)
console.log(moreThan10LbsTrue)

// // HTTP
// // what does it stand for? 

//     // hypertext transfer protocol

// // what are protocols? 

//     // rules/regulations

// // what is an api? 

//     // application programming intferace

// // what do we use postman for? 

//     // testing apis, submitting api requests

// // What does CRUD stand for? How do the HTTP methods (get, post, put delete) match up in CRUD?


