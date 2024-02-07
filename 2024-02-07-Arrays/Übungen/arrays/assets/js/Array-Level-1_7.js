const person = ["Tony", "Stark", "Superreich"];
const friends = ["Farid", "Christian", "Sergio"];
const favoriteFood = ["Burger", "Sushi", "Pizza"];

console.table(friends);
friends.unshift("Stefan", "Marzio");
console.table(friends);

console.table(favoriteFood);

favoriteFood.unshift("Manti", "Lasagne");
console.table(favoriteFood);
