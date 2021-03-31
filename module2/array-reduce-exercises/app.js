// 1) Turn an array of numbers into a total of all the numbers
// function total(arr) {
//    // your code here
// }

// console.log(total([1,2,3])); // 6

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function total(numbers) {
    const result = numbers.reduce(function(final, num){
        final += num
        return final
    }, 0); console.log(result)
} console.log(total(numbers)) 

// 2) Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//    // your code here 
// }

// console.log(stringConcat([1,2,3])); // "123"

function stringConcat(numbers) {
    const result = numbers.reduce(function(final, num){
        final += num.toString()
        console.log(final)
        return final
    }, 0); console.log(result)
} console.log(stringConcat(numbers))


// 3) Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//    // your code here    
// }


// console.log(totalVotes(voters)); // 7
// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(voters) {
    const voteCount = voters.reduce(function(final, voter){
        if(voter.voted) {
            final.didVote++
        } else {
            final.didntVote++
        } return final
    }, {didVote : 0, didntVote: 0});
        console.log(voteCount)
} console.log(totalVotes(voters))




// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// function shoppingSpree(arr) {
//    // your code here    
// }


const wishlist = [
    {title: "PS5", price: 500},
    {title: "Farcry 6", price: 50},
    {title: "La Columbe Triple Shot Draft Latte", price: 3},
    {title: "Dior 1s", price: 500}
];

function shoppingSpree(wishlist) {
    const totalPrice = wishlist.reduce(function(final, item){
        final += item.price
        return final
    }, 0); console.log(totalPrice)
} console.log(shoppingSpree(wishlist))


// 5) Given an array of arrays, flatten them into a single array
// function flatten(arr) {
//    // your code here    
// }


// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
// Note: Take a look at Array.concat() to help with this one


var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arrays) {
    const newArr = arrays.reduce(function(final, array){
        final = final.concat(array)
        return final
    }); console.log(newArr);
} console.log(flatten(arrays))





// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. 
// The resulting object containing this data should have 6 properties. See the example output at the bottom.


function voterResults(voters) {
   const voterAge = voters.reduce(function(final, voter){
       if(voter.age >= 18 && voter.age <= 25) {
           final.youngVotes++
       } else if(voter.age >= 26 && voter.age <= 35) {
            final.youth++
       } else {
            final.midVotes++
       } return final
   }, {youngVotes: 0, youth: 0, midVotes: 0}); console.log(voterAge);
} console.log(voterResults(voters))

// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { youngVotes: 1,
//   youth: 4,
//   midVotes: 3,
//   mids: 4,
//   oldVotes: 3,
//   olds: 4 
// }
// */



