// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = new Object();

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// console.log(user.name);

// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

let schedule = {};

function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

// alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;

function sumSalaries(salaries) {
  if (Object.keys(salaries).length === 0) return sum;
  for (const name in salaries) {
    if (name) {
      sum += salaries[name];
    }
  }
  return sum;
}

console.log(sumSalaries(salaries));

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu));

const a = {
  a: 1,
};
const b = {
  a: 1,
};
console.log(a == b);
console.log();
// --------------------------------
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
console.log(1, returnedTarget);
console.log(returnedTarget === target);
// Expected output: true
