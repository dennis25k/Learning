function isPalindrome(str){
    //take word and split it
    //revere the word
    //compare the new word to the orgiginal
    let newStr = "";
    for (let i = str.length -1; i >= 0; i--) {
        newStr += str[i];
    }
    if (str === newStr) {
        return "This is a Palindrom";
    } else {
        return "This is not a Palindrom";
    }
    
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));