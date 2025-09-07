const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

//Spread operator can create new arrays from other arrays
const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];
console.log(allMenuIdeas);

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

console.log(saladIndex);

const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

//Slice can cut parts of an array to form a new array
const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1)
]

console.log(finalMenuIdeas);