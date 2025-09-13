const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    return arr.flat();
}

function flatter(arr){
    //initialize a new empty array
    //loop through array and check for array or string
        //if string push into new array
        //if it is an array loop through it pushing each item
    //return new array

     const newArr = [];
    
    arr.forEach(element => {
        if(Array.isArray(element)){
            element.forEach(item => newArr.push(item))
        } else {
            newArr.push(element);
        }
    });
    return newArr;

}

console.log(flatter(kittyPrizes));
console.log(flatter(kittyScores));
