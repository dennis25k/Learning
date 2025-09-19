// JavaScript Guess the Number


//Functions

//This function gathers all the variables for the game to run
function getValues() {
    let range = parseInt(prompt("Guess numbers from 0 to ...?"));
    let guessNumber = prompt("How many guesses would you like?");
    let secretNumber = Math.round(Math.random() * range);

    let gameData = [guessNumber, secretNumber];
    return gameData;
}

//This function runs the guessing part of the game
function playGame(gameData) {
    let guessNumber = gameData[0];
    let secretNumber = gameData[1];

    for (let i = 0; i < guessNumber; i++) {
        let guess = prompt(`Guess ${i+1}: What is your guess number?`);
        if (guess < secretNumber) {
            alert(`${guess} is too low`);
        } 
        else if (guess > secretNumber) {
            alert(`${guess} is too high`);
        }
        else {
            return `Congratulation! You guessed the number was ${guess}.`;
        }
    }
    return `Sorry, you ran out of guesses. The correct number was ${secretNumber}.`;
}

//Main Game Loop brings the data together with the playing of the game
let playing = "yes";
while (playing === "yes") {
    let gameData = getValues();
    let result = playGame(gameData);
    alert(result);
    playing = prompt("Would you like to play again? (yes/no)?")
}
