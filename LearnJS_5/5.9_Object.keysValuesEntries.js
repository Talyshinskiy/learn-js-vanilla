let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

console.log(recipeMap.keys());
console.log(recipeMap.values());
console.log(recipeMap.entries());

// Для простых объектов доступны следующие методы:
let objExample = {
  1: 100,
  2: 200,
  3: 400,
  4: 400,
};
let whatIs = Object.keys(objExample); //– возвращает массив ключей.
Object.values(objExample); //– возвращает массив значений.
Object.entries(objExample); //– возвращает массив пар [ключ, значение].
console.log(Object.keys(objExample));
console.log(Object.values(objExample));
console.log(whatIs);

let user = {
  name: "John",
  age: 30,
};
console.log(Object.entries(user));

Object.getOwnPropertySymbols; // возвращающий массив только символьных ключей.
Reflect.ownKeys(objExample); //  возвращает все ключи.

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log(doublePrices);

// -------------------------------------------
// _______________tasks_______________________

// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств,
// содержащих заработные платы.
// Напишите функцию sumSalaries(salaries),
// которая возвращает сумму всех зарплат
// с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  if (salaries.length === 0) return 0;
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}
console.log(sumSalaries(salaries)); // 650
// or with reduce
function sumSalaries2(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}
console.log(sumSalaries2(salaries));

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user1 = {
  name: "John",
  age: 30,
};

function count(user){
return Object.keys(user).length
}

console.log(count(user1)); // 2
console.log(Object.keys(user)); // 2
