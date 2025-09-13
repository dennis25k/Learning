const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    //set a variable for highest vote
     let highestVote = 0;
    //set a variable for the winning item
    let winningItem = "";
    //loop over array for each food obj
        //if the vote is higher?
            //update highestVotes
            //update winner obj
        //if not move to next item
    for (let food in obj) {
        if (obj[food] > highestVote) {
            highestVote = obj[food];
            winningItem = food;
        }
    }
    //return winner and vote
    return `The winner is ${winningItem} with ${highestVote} votes.`

}

console.log(findTheWinner(gameNightFood));