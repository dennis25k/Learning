const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
        ]

function removeDupesFromArray(arr){
    //create a new array
    //go over the existing array 
        //if not in new array push it in
        //if it is then move to next item
    //return new array
    const uniqueItems = [];
    arr.forEach(item => {
        if(!uniqueItems.includes(item)) {
            uniqueItems.push(item);
        }
    });
    return uniqueItems;

}

function removeDupesFromArray2(arr){
    //create a new obj
    //use filter to loop through each item in array
        //for each item in array
            //look up item in the look up table
            //if item does not exist then add it and return true
        //if item is in the obj then return false
        
    const trackDupes = {};
    return arr.filter(item => {
        if (!trackDupes[item]){
            trackDupes[item] = true;
            return true;
        }
        return false;
    });
}

function removeDupesFromArray3(arr){
    return [...new Set(arr)];
}

//console.log(removeDupesFromArray(eggScrambleRecipe));
//console.log(removeDupesFromArray2(eggScrambleRecipe));
console.log(removeDupesFromArray3(eggScrambleRecipe));
