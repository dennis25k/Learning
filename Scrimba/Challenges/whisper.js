//Takes in a string and returns a string
//Returns all lower case
//Add Shh... at the beginning

function whisper(str) {
    //if statement finds the ! annd then remove it using slice
    if(str.endsWith("!")){
        return "shh... " + str
        .slice(0, str.length - 1)
        .toLowerCase();
    }
    return "shh.." + str
    .toLowerCase();
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));