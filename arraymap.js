const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

//Map allows you to change all variables in an array

//Sets all isRecordTemp to true
const newTemps = temperatures.map(temperature => {
   temperature.isRecordTemp = true; 
   return temperature;
})

console.log(newTemps);

//Adds is High to only those over 70
const newTemps2 = temperatures.map(temperature => 
    temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
);
console.log(newTemps2);

//Adds a whole new isHigh value
const isHigh = temperatures.map(temperature => {
    temperature.isHIgh = true;
    return temperature;
})
console.log(isHigh);

