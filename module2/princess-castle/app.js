// Requirements:

// // gameActive of type Boolean, true by default, becomes false when status is Dead
const gameActive = true;


// Create a class for a player that has the following properties:

class player{
    // name of type String
    // totalCoins of type Number NOTE: Idk what this means 'of type Number'
    constructor(status, totalCoins){
        this.status = status;
        this.totalCoins = totalCoins;
    };
    // hasStar of type Boolean (Is a star active?)
    // NOTE: I'm not sure what this "star" is exactly. Just trying to follow directions.
    hasStar = true;

    // Range function goes here that returns 0, 1, or 2
    
    // // print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
    // // Name: Luigi,
    // // Status: Small, etc, etc
    // // Use that class to create the object.
}


// // setName of type function - Has a parameter called namePicked where you pass in "Mario" or "Luigi". Sets name to "Mario" or "Luigi".
function setName(namePicked) {
    let names = ["Mario", "Luigi"];
    namePicked = names.map((namea, nameb) => player.namea - player.nameb); //NOTE: Can't quite figure this line out
    console.log(namePicked);
};
    Test
    console.log(setName(namePicked)) // NOTE: Returns: SyntaxError: Identifier 'namePicked' has already been declared or undefined depending on what little changes I attempt to run

// // // Create a random range function that returns either 0, 1, or 2.

function randomRange(min, max) {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}; //NOTE: This function works perfectly just have to add it to the character class now

// status of type String (options are Powered Up, Big,Small, and Dead)
let statusArray = ["Powered Up", "Big", "Small", "Dead"]

// gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
function gotHit(statusArray) {
        const status = statusArray.map((statusa, statusd) => statusa - statusd) //NOTE: Here I'm trying to run a loop through the status array to return one of the four options in the array. I can see the loop is looping but it's just returning '[ NaN, NaN, NaN, NaN ]'
        console.log(status)
    }; 
        // Test:
        console.log(gotHit(statusArray)); //This returns 'undefined'

    // // gotPowerup of type function - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
    function gotPowerUp(statusArray){
        const [ fourthStatus ] = statusArray //NOTE: Trying to use ES6 here but it doesn't seem to be working
        console.log(`You have a Power Up! Your status is now ${statusArray}`) //NOTE: This returns the entire array which is not what we want

    } 
        // Test:
        console.log(gotPowerUp(statusArray))
    // // addCoin of function - adds a coin to totalCoins
    
    function addCoin(totalCoins) {
        // I don't think I actually know how to do this. Will look at old homework and return.
        // const coinFound = console.log(`You have found a new coin! Your total coins now equals ${totalCoins}`) //NOTE: This line should probably be outside of this function, only to be called when the function itself is run
    }



    
    
    
    // // If the value is 0 call the gotHit() function on the object.
    // // If the value is 1 call the gotPowerup() function on the object
    // // If the value is 2 call the addCoin() function
    
    // // Then call the print method on the object.
    
    // // Now put the random range function inside a setInterval function that ends after gameActive === false












