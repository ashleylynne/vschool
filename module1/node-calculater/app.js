const readlineSync = require('readline-sync');

function mulNumbers(num1, num2) {
    return num1*num2;
}

function divNumbers(num1, num2) {
    return num1/num2;
}

function addNumbers(num1, num2) {
    return num1+num2;
}

function subNumbers(num1, num2) {
    return num1-num2;
}

var num1 = readlineSync.question("Please enter your first number ");

var num2 = readlineSync.question("Please enter your second number ");

var opp = readlineSync.question("Please enter your the operation to perform: add, sub, mul, div ");

 function myFunction() {

    if (opp === "add") {
        return sum;
    } else if (opp === "sub") {
        return dif;
    }   else if (opp === "mul") {
        return prod;
    }   else if (opp === "div") {
        return quot;
    }
} 

var prod = mulNumbers(num1, num2);

var quot = divNumbers(num1, num2);

var sum = addNumbers(num1, num2);

var dif = subNumbers(num1, num2);

var result = myFunction();
console.log("The result is " + [result]);





