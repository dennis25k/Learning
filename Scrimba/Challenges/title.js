//Sets upper case to the begging of a word
function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

function toCaps(str) {
    //splits sentence into an array
    const newArray = str.split(" ");
    //maps over array using the capitalize function on it
    return newArray.map(word => capitalizeWord(word)).join(" ");
}

console.log(capitalizeWord("pumpkin"));
console.log(toCaps("pumpkin pranced purposefully across the pond"));