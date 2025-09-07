const temperatures1 = [69, 82, 73, 64];

//Index of will tell you if its in the array and where
const doesExist = temperatures1.indexOf(82);
console.log(doesExist);

//Includes will tell you if it exist using true or false
const doesItExist = temperatures1.includes(50);
console.log(doesItExist);

//An Array of Objects
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    {degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

//Some using a callback function
const result = temperatures.some(temperature => temperature.isRecordTemp);
console.log(result);

const result2 = temperatures.every(temperature => !temperature.isRecordTemp);
console.log(result2);
