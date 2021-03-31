var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var arr = [people, alphabet]


function forception(people, alphabet) {
    for (var i = 0; i < people.length; i++); {
        for (var j = 0; j < alphabet.length; i++); {
            console.log(arr[i][j]);
        }
    }
}

// this doesn't return anything


// Write a function that takes two arrays as parameters. 
// The first array will be an array of people's names, and 
// the second array will be the alphabet. Using a for loop within 
// a for loop, create and return array that looks like this:

// function forception(people, alphabet){
//     // your code here
// }
// // Output: 
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"