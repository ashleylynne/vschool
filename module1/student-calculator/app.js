const readlineSync = require("readline-sync");
function addNumbers(num1, num2) {
    return num1 + num2;
}
function subNumbers(num1, num2) {
    return  num1-num2;
}
function multiplyNumbers(num1, num2) {
        return num1*num2;
}
function divideNumbers(num1, num2) {
    return num1/num2;
}
var num1 = parseInt(readlineSync.question("enter the first number:"));
var num2 =  parseInt(readlineSync.question("enter the second number:"));
var operation = readlineSync.question("enter the operation you want to preform: add, sub, mul, div ");
function Calculator(num1, num2, operation) {
    if(operation === "add") {
       return sum;
    }
    else if(operation === "sub") {
        console.log (num1 + num2 +"the result is:" + subNumbers(num1, num2));
    }
    else if(operation === "mul") {
        console.log (num1 + num2 +"the result is:" + multiplyNumbers(num1, num2));
    }
    else if(operation ==="div") {
        console.log (num1 + num2 +"the result is:" + divideNumbers(num1, num2));
    }
}
var sum = addNumbers(num1, num2);
var result = Calculator(num1, num2, operation);
console.log ("the result is :" +result)