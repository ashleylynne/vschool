// 1) Sort an array from smallest number to largest
// function leastToGreatest(arr) {
//   // your code here
// }

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 9

const numArr = [1, 3, 10, 5, 27, 34, 12]

function leastToGreatest(numArr) {
    return numArr.sort((a, b) => a - b)
} console.log(leastToGreatest(numArr))

// 2) Sort an array from largest number to smallest
// function greatestToLeast(arr) {
//   // your code here
// }

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2

function greatestToLeast(numArr) {
    return numArr.sort((a, b) => b - a)
} console.log(greatestToLeast(numArr))


// 3) Sort an array from shortest string to longest
// function lengthSort(arr) {
//   // your code here
// }

// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))

const acab = ["fuck", "the", "police"]

function lengthSort(acab) {
    return acab.sort((a, b) => (a.length - b.length))
} console.log(lengthSort(acab))


// 4) Sort an array alphabetically
// function alphabetical(arr) {

// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 

const words = ["comment", "ça", "va"]

function alphabetical(words) {
    return words.sort()
} console.log(alphabetical(words))


// 5) Sort the objects in the array by age
// function byAge(arr){
//   // your code here
// }

// console.log(byAge([
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]));
// // => [ { name: 'Misunderstood Observer', age: 2 },
// //  { name: 'Quiet Samurai', age: 22 },
// //  { name: 'Unlucky Swami', age: 77 },
// //  { name: 'Arrogant Ambassador', age: 100 } ]


const theGirls = [
    {name: "Tia Feliz", age: 23},
    {name: "Jess Delos", age: 26},
    {name: "Ingrid Quiros", age: 24},
]

function byAge(theGirls) {
    return theGirls.sort((persona, personb) => persona.age - personb.age)
} console.log(byAge(theGirls))