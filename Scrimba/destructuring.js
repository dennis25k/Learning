//Build the Object
const user = {
    user: "Dennis",
    details: {
        job: "Programmer"
    }
}

//Destructure by pulling out keys into variables
const {details: {job} } = user;

//Build a function using the destructured object
function displayUser({details: {job} }) {
    console.log(`Your job is ${job}`);
}

displayUser(user);
