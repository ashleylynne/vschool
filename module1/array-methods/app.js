var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// Remove the last item from the vegetable array.

var veg = vegetables.pop()
console.log(vegetables)



// // Remove the first item from the fruit array.

var fruit2 = fruit.shift()

console.log(fruit)




// // Find the index of "orange."

var orangeIndex = fruit.indexOf("orange")

console.log(orangeIndex)



// // Add that number to the end of the fruit array.

var newArr = fruit.push(orangeIndex)

console.log(fruit)



// // Use the length property to find the length of the vegetable array.

var length = vegetables.length

console.log(length)






// // Add that number to the end of the vegetable array.

var newArr2 = vegetables.push(length)

console.log(vegetables)




// Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables)

console.log(food)




// Remove 2 elements from your new array starting at index 4 with one method.

var remove = food.slice(4, 6)

console.log(remove)


// Reverse your array.

var reverse = food.reverse("")
console.log(reverse)




// Turn the array into a string and return it.

var string = food.join("")
console.log(string)