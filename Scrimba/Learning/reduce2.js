const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const total = cars.reduce((accumulator, carWeight) => {
  return accumulator + carWeight.weight;  
}, 0);

console.log(total);

//Can use reduce to find the weight of just the EV cars
const evTotal = cars.reduce( (accumulator, car) => {
    if (car.isElectric){
        return accumulator + car.weight;
    }
    else {
        return accumulator;
    }
}, 0);

console.log(evTotal);