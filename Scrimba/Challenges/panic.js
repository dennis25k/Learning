//Take a string and convert it to all caps
//insert the emoji 😱
//output message with ! at end

function panic(str){
    return str
        .split(' ') //splits each letter or word depending on the space inside
        .join(' 😱 ') //joins the letters or word inserting the emoji
        .toUpperCase() + "!"; //makes is uppercase and add !
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))