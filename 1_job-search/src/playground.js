const favoriteFood = "sushi";

const goodFoods = {
  [favoriteFood]: true,
};

console.log(goodFoods);

const interval = setInterval(() => {
  console.log("I will print each 2s after the prog starts");
}, 2000);

console.log(interval);

setTimeout(() => {
  clearInterval(interval);
  console.log("Ending interval timer");
  console.log(interval);
}, 8000);
