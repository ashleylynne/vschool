// Use the built-in .map() method on arrays to solve all of these problems

// Feel free to copy and paste the function and tests in this assignment.

// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
  // your code here
// }

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function doubleNumbers(numArr) {
    const result = numArr.map(num => num*2); {
        return result
    }
} console.log(doubleNumbers(numArr))


// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
  // your code here
// }

function stringItUp(numArr) {
    const makeStrings = numArr.map(num => num.toString()); {
        return makeStrings
    }
} console.log(stringItUp(numArr))


// 3) Capitalize each of an array of names
// function capitalizeNames(arr){
  // your code here
// }

nameArr = ["ashley", "jess", "ingrid"]

function capitalizeNames(nameArr) {
    const capNames = nameArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); {
        return capNames
    }
} console.log(capitalizeNames(nameArr)) 

// 4) Make an array of strings of the names
// function namesOnly(arr){
  // your code here
// }

const people = [{
    name: "Ashley Stanley", 
    age: 12
  },
  {
    name: "Missy Stanley",
    age: 5
  },
  {
    name: "John Stanley",
    age: 1000
  }]

  function namesOnly(people) {
    const newArr = people.map(person => person.name);
    return newArr
  } console.log(namesOnly(people))

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
  // your code here
// }

function makeStrings(people) {
  const newArr = people.map(person => {
    if (person.age < 18) {
      return person.name + " is under age!"
    } else {
      return person.name + " can go to the matrix!"
    }
  }); return newArr
} console.log(makeStrings(people))


// 6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
  // your code here
// }

function readyToPutInTheDOM(people){
  const newArr = people.map(person => {
    let h1s = `<h1>${person.name}</h1>`
    let h2s = `<h2>${person.age}</h2>` 
    return h1s + h2s 
  }); return newArr
} console.log(readyToPutInTheDOM(people))

