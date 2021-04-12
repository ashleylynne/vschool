var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var alphabet = "abcdefghijklmnopqrstuvwxyz";

let encodedString = "";

for (let i = 0; i < input.length; i++) {
    
    const index = alphabet.indexOf(input[i]); 
    const newIndex = (index + shift)%26;
    const newCharacter = alphabet[newIndex];
    encodedString += newCharacter;
} console.log(encodedString)




// Find index in alphabet and add shift variable
// before for loop: encodedString = ""
// in for loop:
// find index of current letter in alphabet
// add shift number to that index
// add letter from alphabet of shifted index to encodedString
