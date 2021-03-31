
const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// // // Returns a list of everyone older than 18, which is
// // // sorted alphabetically by last name, and where
// // // each name and age is embedded in a string that looks like an HTML <li> element.

// // /*
// // Output: 
// // [ 
// //     "<li>Kyle Mooney is 27</li>",
// //     "<li>Sarah Palin is 47</li>",
// //     "<li>Rick Sanchez is 78</li>",
// //     "<li>Morty Smith is 29</li>",
// //     "<li>Lev Tolstoy is 82</li>" 
// // ]
// // */

function sortedOfAge(peopleArray) {
    return peopleArray.filter(person => person.age > 18)
} 
// console.log(sortedOfAge(peopleArray))

function alphabetically(peopleArray) {
    // Code that alphabetizes here
    let alphabetizes =  peopleArray.sort((persona, personb) => persona.lastName.localeCompare(personb.lastName))
    return alphabetizes
} 

// console.log(alphabetically(peopleArray))

function addHTML(peopleArray) {
    let html = peopleArray.map(person => "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>")
    return html
} 
    // console.log(addHTML(peopleArray))

function allFunctions(peopleArray) {
    return sortedOfAge(peopleArray), alphabetically(peopleArray), addHTML(peopleArray);
} console.log(allFunctions(peopleArray))
