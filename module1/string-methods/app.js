
// Make a function that will return any given string into all caps 
// followed by the same string all lowercase.

// capilizeAndLowercase("Hello") // => "HELLOhello"

var string = "hello"

var newString = string.toUpperCase() + string;

console.log(newString) 




// Make a function that returns a number half the length, and rounded down. 
// You'll need to use Math.floor().

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

var halfLength = string.indexOf("l")

// var rounded = halfLength.Math.floor(string) this does not work. I'm not sure the proper syntax for this problem

console.log(halfLength)


// Make a function that uses slice() and the other functions 
// you've written to return the first half of the string

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"



var firstHalf = string.slice(0, 3)

console.log(firstHalf)






// Make a function that takes a string and returns that string 
// where the first half is capitalized, and the second half is lower cased.

// hint: If the half way point is a decimal, or rather, your string 
// length is odd. Use Math.floor to round down.

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"



var myString = "Hello World"

var upperCase = myString.slice(0, 6).toUpperCase()

var capilizeAndLowercase = upperCase + myString.slice(6, 11)

console.log(capilizeAndLowercase)





// notes:


// toUpperCase & toLowerCase

// concat: concatenates strings

// split: turns a string into an array

// Ex:

// var animal = "tiger"
// var characterArr = animal.split("")
// console.log(characterArr)


// slice: lets you cut up a string

// Ex:

//     var phoneNumber = "6764567890"
//     var first3 = phoneNumber.slice(0, 3)
//     console.log(first3)
 


// indexOf: can use to find where a piece of data exists 