// const readline = require("readline-sync");
// const name = readline.question("What is your name? ");
// console.log("Hi " + name + "!");
// readline.keyInYN("Would you like to play Escape Room?")
//     // "Y" key was pressed
// console.log("Hi " + name + " Let's go! Find the key! There's also a hole in the wall in the room.");
//     // "N" key was pressed
//     console.log("Exit");
// let isAlive = true
// let hasKey = false
// let isPlaying = true
// while (isPlaying) {
//     options = ["Put hand in hole", "Find the key", "Open the door"],
//     index = readline.keyInSelect(options, "Choose your next option: ");
//     if (index === 0) {
//         handInHole()
//     }else if (index === 1){
//         findTheKey()
//     }else if (index === 2){
//         openTheDoor();   
//     }
// }
// function handInHole() {
//     console.log("you died! GAME OVER!")
//     isAlive = false
//     isPlaying = false
// }

// function findTheKey() {
//     console.log("you've found the key!")
//     hasKey = true
// }

// function openTheDoor() {
//     if(hasKey){
//         console.log("you've opened the door! you won the game!")
//         isPlaying = false
//     } else {
//         console.log("you need to find the key first!")
//     }
// }

const readline = require("readline-sync")

const name = readline.question("what is your name? ")

console.log(`hi ${name}!`)
console.log("let's play")

let isPlaying = true
let isAlive = true
let hasKey = false

while(isPlaying) {
    const options = ["hand in hole", "find key", "open the door"]
    const action = readline.keyInSelect(options, "what will you choose?")

    if(action === 0){
        console.log("you died! GAME OVER")
        isPlaying = false
        isAlive = false
    } else if(action === 1) {
        console.log("you've found the key! now open the door!")
        hasKey = true
    } else if(action === 2) {
        openDoor()
    }
}

    function openDoor(){
        if(hasKey === true){
            console.log("you opened the door! you won!")
            console.log("GAME OVER")
            isPlaying = false
        } else{
            console.log("you must find the key first to open the door")
        }
    }