const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
]

function reverseString(str){
   let reversedString = "";
   for(let i = str.length - 1; i >= 0; i--){
       reversedString += str[i];
   }
   return reversedString
}


function reverseStringsInArray(arr){
    return arr.map(item => reverseString(item));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));