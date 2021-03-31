const readline = require('readline-sync');

let health = 100; //How do I make the minimum 0 so that the health never reaches a negative percentage?

// Greeting

console.log("Hello!");
const whatName = readline.question('What is your name? ');
const firstName = whatName.toUpperCase();

// Type play to start
const play = readline.question("Hello " + firstName + " Are you ready? Let's play! Type 'play' to continue.");
    if (play === "play") {
        console.log("You have just awoken in an asylum with no memory of how you arrived there. You must do your best to escape.")
         
        // Here will go the beginning of the game story. (Type 's' to skip)
    }

// Skip button
const skip = readline.keyIn("Type 'S' to SKIP")

skipHandler(skip);

function skipHandler() {
    if (skip === "s") {
        console.log("Game started!")
    }
}

// Commandkey

let commandKey = readline.keyIn("Type 'C' for 'COMMANDS' if you get stuck " )
    if (commandKey === "c") {
        let commands = readline.keyIn("COMMANDS:" + ["'WALK' = 'W', 'RUN' = 'R', 'ATTACK' = 'A', 'JUMP' = 'J' 'HELP' = 'H', 'SKIP' = 'S'"])
        skipHandler(commands)
    }

    const defaultOptions = ["W", "R", "A", "J", "H", "C", "S", "I"];
    const currentDefaultOptions = readline.setDefaultOptions({limit: defaultOptions})


// Walking

// Every time the player walks, a random algorithm will be run that determines 


let gameRunning = true;
let inBattle = false;
let isAlive = true;
let isRunning = false;
let underAttack = false;

let walkCommand = readline.keyIn('Please enter the letter "W" to WALK')    
    walkHandler(walkCommand)    

function walkHandler(walkCommand) {
    if(walkCommand === "w") {
        // Does the enemy appear?
        console.log("Walking... How tf do we get out of here?")
        return willEnemyAttack(); 
    }
}

// Enemy Ahead


function enemyAheadHandler() {
    if(enemyAhead === "r") {
        console.log("Hurry! He's much faster than you!")
    } else if(enemyAhead === "h") {
        console.log("Good job hiding from the enemy")
    }
}

const enemyAhead = readline.keyIn("Be careful! There's an enemy ahead! Type 'R' to 'RUN' or 'H' to 'HIDE");

enemyAheadHandler(enemyAhead);

// Random will enemy attack algorithm

function willEnemyAttack() {
    const chance = Math.floor(Math.random()* 4)
    return chance > 2
}


// Enemy Appears

const enemies = ["Staff", "Mad Dr", "Deranged Patient"];

// const enemyAlert = readline.keyIn(enemyCreate + " alerted! Type 'R' to 'RUN' or 'A' to 'ATTACK'")
// enemyAlertHandler(enemyAlert)
    
// Enemy Alerted while walking

while(gameRunning) {
    // Walking
    let walkCommand = readline.keyIn('Please enter the letter "W" to WALK')    
    const isAttacked = walkHandler(walkCommand)
    // Fight sequence
    if (isAttacked) {
        const enemyIndex = Math.floor(Math.random() * enemies.length);
        // Enemy created
        const enemyCreate = enemies[enemyIndex]
        let enemyHealth = 100;
        // The user can decide to attack or run
        const enemyAlert = readline.keyIn(enemyCreate + " alerted! Type 'R' to 'RUN' or 'A' to 'ATTACK'")
        enemyAlertHandler(enemyAlert, enemyHealth)
    } 

}

function enemyAlertHandler(enemyAlert, enemyHealth) {
    if(enemyAlert === "r") { 
        // If running, there will be a 50% chance of escaping
        const running = console.log("You're running away!")
        isRunning = true;
        while(isRunning === true) { 
            const escapeChance = Math.floor(Math.random() * 2)
            if (escapeChance===1) {
                const escape = console.log("You escaped! Good job!")
                return;
            }
            else {
                const caught = console.log("You've been caught by the enemy! You're under attack!")
                    console.log(caught);
                    isRunning = false;
                    // Monster could make first attack here
                    readline.keyIn("You've been hit! Type 'A' to 'ATTACK' the enemy")
            } 
        }
    }

    // Inventory

    const inventoryItems = ["Meds", "Master Key", "Traqulizer", "Knife", "Xanax"]

    let foundMasterKey = false;

        // Enemy battle function
    
        function enemyDie() {
            if(enemyHealth < 0 ) {
                underAttack = false;
                console.log("Enemy dead!")
                // When the enemy dies the user will collect inventory 
                // This will be an empty array that adds data into itself
                const inventoryIndex = Math.floor(Math.random() * inventoryItems.length)
                const randomItem = inventoryItems[inventoryIndex]
                const inventory = [] 
                const collect = readline.keyIn(randomItem + " found! Press any key to 'COLLECT INVENTORY'")
                const addItem = inventory.push(collect)
                if(collect === "Master Key") {
                    console.log("You've found the master key!")
                    readline.keyIn("Hit 'ENTER' to 'ESCAPE'")
                    console.log("You've escaped the asylum! YOU WON!")
                    foundMasterKey = true;
                    gameRunning = false;
                }
            }

        }
 
    // The Batlle
 

    isRunning = false;
    underAttack = true;
    while(underAttack === true) {
        console.log("Enemy hit!")
        const enemyDamage = Math.floor(Math.random() * 100);
        enemyHealth = enemyHealth - enemyDamage;
        console.log("Enemy health is at " + enemyHealth + "%!")
    // After the player attacks or runs the enemy attacks back for a random damage amount
    // If attacking, a random amount of damage will be delt between a min and max
        const damage = Math.floor(Math.random() * 100)
        health = health - damage;
        console.log("You've been hit! Your health is at " + health + "%!")
        const attack = readline.keyIn("Type 'A' to 'ATTACK' again")
        if (enemyHealth < 0) {
            underAttack = false;
            const enemyDead = console.log("Enemy defeated!")
            enemyDie(enemyDead)
            gameRunning = true;
        }
        if(health < 25) {
            console.log("Low health alert!")
        // If the enemy kills the player the console prints a cool death message and the game ends
        } if (health < 0) {
            underAttack = false;
            gameRunning = false;
            console.log("You're dead! GAME OVER")
        }
        
        

        // If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory.

    }
} 




// let isAttacked = false;
// while(isAttacked) {
//     enemyAlertHandler(enemyAlert)

// }

// function commandOptions() {

//     for (let i = 0; i < defaultOptions.length; i++) {
//         if (currentDefaultOptions === "r") {
//             console.log("You are running away!")
//         } else if (currentDefaultOptions === "a") {
//             console.log("Attack Enemy!")
//         } else if (currentDefaultOptions === "j") {
//             console.log("Jump command!")
//         }
         
    
//     }

// }



// Type "help" to understand premise of the game

// function helpKey() {
//     if (commands === "h") {
//         console.log("This is some help")
//     }
// }




























// actions needed:

// character creation
// walking
// running from a fight
// fighting
// enemy creation
// attacking enemy
// enemy attacking
// enemy dying (including dropping an item)
// character dying
// should I add a text inventory section? (keys, weapons, stuff you drink for "health")

// functions needed:


// function run(){

// }

// function fight(){

// }

// function attackEnemy(){

// }

// function enemyAttack(){

// }

// function die(){

// }

// function enemyDie(){

// }

// function enemyCreation(){

// }

// So, how to we continue walking after we fight a monster or run away with it?

// A while loop.

// I'd put one that calls walk:

// ask user for name and give greeting 
