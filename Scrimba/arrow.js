const userName = "dennis";

//Arrow function uses variable no function and return is implied
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`; 

    console.log(capitalize(userName));

    //Callback Functions

    function greetUser(name, callback) {
        return callback(capitalize(name));
    }

const result =greetUser(userName, name => `Hi There ${name}`);

    console.log(result);

