const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    if(!word.startsWith(":") && !word.endsWith(":")) return word; 

    const newWord = word.slice(1, -1);

    if(emojis[newWord]){
         return emojis[newWord]
    } else {
        return newWord;
    }
}

function emojifyPhrase(phrase){
    // split the passed in phrase into an array
    // map through the array and call emojifyWord() on each word in the phrase
    // join the array back together as a string, and return
    const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
    return newPhrase.join(" ");

}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flowers:"))
console.log(emojifyWord("heart"));
console.log(emojifyPhrase("I :heart: my :cat:"));