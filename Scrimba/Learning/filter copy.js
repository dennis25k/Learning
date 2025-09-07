const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

//Filter allows to search for results and put them in new array
const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
console.log(results);

//Can filter by multiple conditions
const results2 = restaurants.filter(restaurant => 
  restaurant.name.startsWith('C') && restaurant.milesAway < 3
)
console.log(results2);

//Find is case sensative so do toLowerCase first
const results3 = restaurants.find(restaurant => 
  restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
)
console.log(results3);