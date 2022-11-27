const favFood = "sushi";

const goodFoods = {
  favFood: true,
  [favFood]: true,
};

console.log(goodFoods);

/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((x) => x * x);

console.log(squares);
*/
/*
export const evenOrOdd = (number) => {
  if (number % 2 == 0) {
    return "Even";
  }
  return "Odd";
};

export const multiply = (n1, n2) => n1 * n2;
*/
/*
const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish"];

console.log([...fruits, ...vegetables]);

const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary *= 2;
    this.lookingForWork = false;
  },
};

console.log(developer);
developer.doubleSalary();
console.log(developer);
*/
