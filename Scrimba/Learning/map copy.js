
//Map must be capitalized
const favouritePlaceMap = new Map([
    ['music', 'jazz'],
    ['name', 'Paris House'],
    ['visited', true]
]);

//Set adds a key value pair to map
favouritePlaceMap.set("averageBill", 50);

//Get can extract a value from a key with map
console.log(favouritePlaceMap.get('averageBill'));