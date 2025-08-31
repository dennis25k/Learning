const user = {
    name: "Dennis",
    age: 55,
    city: "Pine Grove"
}

//For In loop
for (const key in user) {
    console.log(key, user[key]);
}

//Object Keys
console.log(Object.keys(user));

//Object Values
console.log(Object.values(user));

//Object Entry
console.log(Object.entries(user));