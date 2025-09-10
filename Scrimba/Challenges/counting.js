function countChars(str){
   const count = {};
   const name = str.toLowerCase().split(" ").join("");
   for(let i = 0; i < name.length; i++){
        if(!count[name[i]]){
            count[name[i]] = 1; 
        } else {
          count[name[i]] += 1;
        }
   }

   return count
}

console.log(countChars("Dennis Krammes"));