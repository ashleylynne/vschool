// Write a function that takes an array of numbers and returns the largest (without using Math.max())

// largest([3, 5, 2, 8, 1]) // => 8

let numbers = [3, 5, 8, 1, 9];
let largestNum = 8



for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > largestNum) {
        largestNum = numbers[i]
        console.log(largestNum)
    } 

} 


// Write a function that takes an array of words and a character and returns each word that has that character present.

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

const lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
// const query = "!"

for (let i = 0; i < lettersWithStrings.length; i++) {
    for (let j = 0; j < lettersWithStrings[i].length; j++) {
        if(lettersWithStrings[i].includes("!") === true) {
            console.log(lettersWithStrings[i][j])
        }   
    }
} 









// // Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// // isDivisible(4, 2) // => true
// // isDivisible(9, 3) // => true
// // isDivisible(15, 4) // => false



function isDivisible(num1, num2) {
    if(num1%num2 === 0) {
        return "true";
    } else return "false";
} console.log(isDivisible(10, 2))

