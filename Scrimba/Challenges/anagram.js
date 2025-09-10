function isAnagram(str1, str2){
    if (str1.length !== str2.length) return "Its not an Anagram";

    const word1 = str1.split("").sort().join("");
    const word2 = str2.split("").sort().join("");
    if (word1 === word2) {
        return "Its and Anagram"
    } else  {
        return "Its not an Anagram"
    }

}
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("inch", "chin"));
console.log(isAnagram("night", "thing"));