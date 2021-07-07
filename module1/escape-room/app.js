const readline = require("readline-sync");

const name = readline.question("What is your name? ");
console.log("Hello " + [name])

const escape = readline.question("Where are you going? ");
console.log("Sorry, I don't think you'll be going to " + [escape] + " anytime soon...");

console.log("Unless...");

console.log("You can find escape the room");

var play = readline.question("Ready? Type 'yes' or 'no' ");

while (play !== "yes") {
    console.log(" You must type 'yes' to play " );
    play = readline.question("Ready? Type 'yes' or 'no' ");
    if (play === "yes") {
        console.log(" Ok! Let's play..");
        break;
    }
} 

console.log("You are stuck in a dark room with three options:")
var options = ["Put hand in hole", "Find the key", "Open the door"]
console.log(options)



//keyInSelect returns index of option selected

let hasKey = false;
let isPlaying = true;

while(isPlaying) {
    const choice = readline.keyInSelect( options, "Which will you choose? ");
    if (choice === 0) {
        console.log("You died! GAME OVER ");
    } else if(choice === 2 && hasKey === false) {
        console.log("The door is locked! ");
        continue;
    } else if (choice === 1) {
        hasKey = true;
        console.log("You've found the key! You have two options: " + options[0, 2]);
        continue;
    } else if(choice === 2 && hasKey === true) {
        console.log("You've unlocked the door! You are free to go to" + escape);
        break;
    }
}


//keep presenting the questions until certain conditions are met
// enter while loop (did they die or are they alive?)
// think about what needs to be remembered (variables)
// if the user goes to open the door we want to know whether or not the key has been found
//use boolean to represent whether or not found