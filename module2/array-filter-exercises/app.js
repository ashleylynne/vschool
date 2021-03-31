// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

function fiveAndGreaterOnly(numbers) {
    let newArr = numbers.filter(num => num >= 5)
    return newArr
} console.log(fiveAndGreaterOnly(numbers))

// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(numbers) {
    const evenArr = numbers.filter(num => num % 2 === 0)
    return evenArr
} console.log(evensOnly(numbers))

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const strings = ["all", "cops", "are", "bad", "fuck", "the", "police"]

function fiveCharactersOrFewerOnly(strings) {
    let newArr =  strings.filter(string => string.length <= 5)
    return newArr 
} console.log(fiveCharactersOrFewerOnly(strings))

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const people = [
    {name: "Justin Bieber", member: true},
    {name: "Ashley Stanley", member: false},
    {name: "All Those White Celebs That Made The 'I Take Responsibility' Video", member: true}
]

function uselessCelebrities(people) {
    const useless = people.filter(person => person.member === true)
    return useless
} console.log(uselessCelebrities(people))

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const ppl = [
    {name: "Jack Stanley", age: 4},
    {name: "Albus Dumbledore", age: 6000},
    {name: "Rita Waterice", age: 16},
    {name: "Barack Obama", age: 75}
]

function ofAge(ppl) {
    const oldEnough = ppl.filter(person => person.age >= 17)
    return oldEnough
} console.log(ofAge(ppl))