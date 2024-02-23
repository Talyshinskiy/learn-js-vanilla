// ___________________Добавление/удаление элементов__________________________

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.

// ___________________splice__________________________

// arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr = ["Я", "изучаю", "JavaScript"];
let whatIs = arr.splice(1, 1);
console.log(arr, whatIs);

let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr2.splice(0, 3, "let", "danse");
console.log(arr2);

let arr3 = ["Я", "изучаю", "JavaScript"];
arr3.splice(2, 0, "difficult", "language");
console.log(arr3);

let arr4 = [1, 2, 5];
arr4.splice(-1, 0, 3, 4);
console.log(arr4);

// ___________________slice__________________________
// arr.slice([start], [end]) /// копирует все элементы с индекса start до end (не включая end)

let str = "123344ferferf";
let strSlice = str.slice(1, 6);
console.log(strSlice, str);

let arr5 = ["B", "a", "h", "t", "i", "y", "a", "r"];
arr5Slice = arr5.slice(0, 3);
console.log(arr5Slice, arr5, arr5.slice(-3));

let arr6 = [
  1,
  null,
  NaN,
  undefined,
  [2, 3, [4, true]],
  function inarr() {},
  { str: "yelow" },
];

let arr6Copy = arr6.slice(); //создать копию массива
console.log(arr6Copy);

// ___________________concat__________________________
// arr.concat(arg1, arg2...) //В результате – новый массив

let arr7 = [1, 2];
let arr8 = [3, 4];
let arr9 = arr7.concat(arr8);
console.log(arr7.concat(arr9));
console.log(arr7);
console.log(arr7, arr8, arr9);

let arr10 = [1, null, undefined, NaN, true];
let obj1 = {
  str: "string",
  func: () => {},
  numb: 123,
  [Symbol.isConcatSpreadable]: true,
};

let arrayLike = {
  0: "что-то",
  length: 1,
};

let arr11 = arr10.concat(obj1);
let arr12 = arr10.concat(arrayLike);
console.log("arr11", arr11);
console.log("arr12", arr12);

let arr13 = [1, 2];

console.log("arr13 ", arr13.concat(arrayLike));

// ___________________forEach__________________________
// arr.forEach(function(item, index, array) {
// ... делать что-то с item
// });Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
  console.log(`У ${item} индекс ${index} в ${array}`);
});

// ___________________Поиск в массиве__________________________
// ______________indexOf/lastIndexOf и includes__________________
// arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1.
// arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.
// методы используют строгое сравнение ===

// Метод includes правильно обрабатывает NaN

const arr14 = [NaN];
console.log(arr14.indexOf(NaN)); // -1 (неверно, должен быть 0)
console.log(arr14.includes(NaN));

// ___________________find и findIndex/findLastIndex__________________________

let result = arr.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
// Если функция возвращает true, поиск прерывается и возвращается item.
// Если ничего не найдено, возвращается undefined.

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Maria" },
];

let user = users.find((item) => item.id === 2);

console.log(user.name); // Петя

// __________________________________filter______________________________________
let results = arr.filter(function (item, index, array) {
  // если `true` -- элемент добавляется к results и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});

let someUsers = users.filter((item) => item.id > 1);
console.log(someUsers);

// __________________________Преобразование массива_________________________________
// __________________________________map______________________________________
let result1 = arr.map(function (item, index, array) {
  // возвращается новое значение вместо элемента
});

let lengths = users.map((item) => item.name.length);
console.log("lengths", lengths);

// __________________________sort(fn)_________________________________

// Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.
// Он также возвращает отсортированный массив, но обычно возвращаемое значение игнорируется,
//  так как изменяется сам arr.

let arr15 = [1, 2, 151, 23, 57, 6, 9, 7, 0, 8, 65, 4, 43, 53, 45, 451, 67987];

// метод сортирует содержимое arr
arr16 = arr15.sort((a, b) => a - b);

console.log("arr16", arr16);

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  console.log(a + " <> " + b);
  return a - b;
});

// __________________________reverse_________________________________
// Метод arr.reverse меняет порядок элементов в arr на обратный.

let arr17 = [1, 2, 3, 4, 5];
let arrReverse = arr17.reverse(); // возвращает массив arr с изменённым порядком элементов.

console.log(arrReverse); // 5,4,3,2,

// __________________________split и join_________________________________

let names = "Вася, Петя, Маша";

let arr18 = names.split(", ");
console.log(arr18);

for (const name of arr18) {
  console.log(name);
}

let arr19 = ["Вася", "Петя", "Маша"];

let str2 = arr19.join(", "); // объединить массив в строку через ;

console.log(str2);

// _________________________reduce_____reduceRight_______________________________
// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);
// Аргументы:
// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.

let arr20 = [1, 2, 3, 4, 5];

let sumArr20 = arr20.reduce((sum, current) => sum + current, 0);

console.log(sumArr20, arr20); // 15

// _________________________Array.isArray_______________________________
let isArray = Array.isArray([]);
console.log(Array.isArray({})); // false

console.log(Array.isArray([]), isArray); // true

// Шпаргалка по методам массива:

// _____________________________Для добавления/удаления элементов:
// push(...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.
// Если какой-то из items является массивом, тогда берутся его элементы.

// _____________________________Для поиска среди элементов:
// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.

// _____________________________Для перебора элементов:
// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

// _____________________________Для преобразования массива:
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

// _____________________________Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.
// Пожалуйста, обратите внимание, что методы push, pop, shift, unshift, sort, reverse и splice изменяют исходный массив.

//---------------------------------------------------------------------------------------------------------
//--------------------------------------------------tasks--------------------------------------------------
//---------------------------------------------------------------------------------------------------------

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

console.log(camelize("background-color")); // 'backgroundColor';
console.log(camelize("list-style-image")); // 'listStyleImage';
console.log(camelize("-webkit-transition")); // 'WebkitTransition';

// //--------------------------------------------------------------------------
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и
// возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && b >= item);
}

let array = [5, 3, 8, 1];

let filtered = filterRange(array, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(array); // 5,3,8,1 (без изменений)

//--------------------------------------------------------------------------
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и
// удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr21.length; i++) {
    const curElement = arr21[i];
    if (curElement < a || curElement > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr21 = [5, 3, 8, 1];

filterRangeInPlace(arr21, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr21); // [3, 1]

let arr22 = [5, 2, 1, -10, 8];
arr22.sort((a, b) => b - a);

console.log(arr22); // 8, 5, 2, 1, -10

//--------------------------------------------------------------------------
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr23 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let copy = arr.slice();
  return copy.sort();
}

let sorted = copySorted(arr23);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr23); // HTML, JavaScript, CSS (без изменений)

//--------------------------------------------------------------------------
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" ");
    (a = +split[0]), (operator = split[1]), (b = +split[2]);

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[operator](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result12 = powerCalc.calculate("2 ** 3");
console.log(result12); // 8

//--------------------------------------------------------------------------
// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25, status: false };
let petya = { name: "Петя", age: 30, status: true };
let masha = { name: "Маша", age: 28, status: false };

let users1 = [vasya, petya, masha];

let names1 = users1.map((user) => user.name);
let age = users1.map((user) => user.age);
let status1 = users1.map((user) => user.status);

console.log(names1, status1, Array.isArray(age)); // Вася, Петя, Маша

//--------------------------------------------------------------------------

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya1, petya1, masha1];

let usersMapped = users2.map((user) => ({
  fullName: user.name + " " + user.surname,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

//--------------------------------------------------------------------------
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr24 = [vasya2, petya2, masha2];

function sortByAge(users) {
  users.sort((a, b) => (a.age > b.age ? 1 : -1));
}

sortByAge(arr24);

// теперь: [vasya, masha, petya]
console.log(arr24[0].name); // Вася
console.log(arr24[1].name); // Маша
console.log(arr24[2].name); // Петя

//--------------------------------------------------------------------------
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr25 = [1, 2, 3];

function shuffle(arr) {
  arr.sort((a, b) => Math.random() - (a + b));
}

shuffle(arr25);
console.log(arr25);
shuffle(arr25);
console.log(arr25);
shuffle(arr25);
console.log(arr25);
shuffle(arr25);
console.log(arr25);
shuffle(arr25);
console.log(arr25);
shuffle(arr25);
console.log(arr25);
shuffle(arr25);
console.log(arr25);

//--------------------------------------------------------------------------
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr26 = [vasya3, petya3, masha3];

function getAverageAge(users) {
  return users.reduce((cur, user) => cur + user.age, 0) / users.length;
}

console.log(getAverageAge(arr26)); // (25 + 30 + 29) / 3 = 28

//--------------------------------------------------------------------------
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  let uniqueObj = {};
  let result = [];
  for (const name of arr) {
    if (!uniqueObj[name]) {
      result.push(name);
      uniqueObj[name] = true;
    }
  }
  return result;
}

let strings = [
  "кришна",
  "Bah",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O

//--------------------------------------------------------------------------
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(arr) {
  return arr.reduce((cur, user) => {
    cur[user.id] = user;
    return cur;
  }, {});
}

let users12 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users12);

console.log(usersById);
/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
