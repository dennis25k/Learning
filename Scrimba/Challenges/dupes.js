const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    let dupesRemoved = '';
    for(let i = 0; i < chars.length; i++){
        if(!dupesRemoved.includes(chars[i])){
            dupesRemoved += chars[i]
        }
    }  
    return dupesRemoved;
}

console.log(removeDupeChars(password));
