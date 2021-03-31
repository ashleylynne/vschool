// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y){
//   //check data types first and throw error
//   return x + y;
// }
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.


var readlineSync = require('readline-sync');

let x = readlineSync.question("Please enter 1 number ");
let y = readlineSync.question("Please enter a second number ");

x = Number(x)
y = Number(y)

function sum(x, y) {
    try {      
        if(isNaN(x) || isNaN(y)) {
            throw new Error("This is not a number!")
        } else{
            return x + y;  
        }
    }
    catch(error) {
        console.log(error);
    }
} 

console.log(sum(x, y))

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

// var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   //check credentials
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
 
let user = {username: "ashsauce", password: "drip0rdr0wn"};

const inputUserName = readlineSync.question("Please enter your username ");
const inputPassword = readlineSync.question("Please enter your password ");


function login(inputUserName, inputPassword){
    try {
        if(inputUserName!==user.username || inputPassword !== user.password) {
            throw new Error("Incorrect username or password")
        } 
        return "You are logged in!"

    } 
        catch (error) {
        console.log(error) 
    }
} 

console.log(login(inputUserName, inputPassword))