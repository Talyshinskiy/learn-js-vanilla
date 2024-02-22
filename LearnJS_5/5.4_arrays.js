let arr = new Array(20);
console.log(arr.length);

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.at(-1));

// __________Очередь_____________
// push добавляет элемент в конец.
// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.

// ___________стек______________
// push добавляет элемент в конец.
// pop удаляет последний элемент.

let fruitLust = fruits.pop();
// console.log(fruitLust, fruits);

fruits.push("avakado");

let firstFruit = fruits.shift("");
console.log("shift: ", firstFruit, fruits);

let thing = [];
thing[9999999] = 5;
thing.age = 30;
console.table("thing", thing, thing.length);

let cars = ["bmw", "omoda", "tesla"];

// проходит по значениям
for (let car of cars) {
  console.log(car);
}
console.log(cars.toString(), cars);

//______________________tasks____________________________

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
let styles = new Array("Джаз", "Блюз");
styles.push("Рок-н-ролл");
styles[(styles.length - 1) / 2] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);

//--------------------------------------------------------------------------

let arr1 = ["a", "b"];

arr1.push(function () {
  alert(this);
});

// arr1[2]()// return array with all values

//--------------------------------------------------------------------------

// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let arrNumbers = [];
  while (true) {
    let value = prompt("use keyboard...", 0);
    if (value === "" || value === null || !isFinite(value)) {
      break;
    } else {
      arrNumbers.push(+value);
    }
  }
  let sum = 0;
  for (const numb of arrNumbers) {
    sum += numb;
  }
  return sum;
}
console.log(sumInput());

//--------------------------------------------------------------------------

function getMaxSubSum(arr) { // оценка сложности O(n).
  let maxSum = 0;
  let curSum = 0;
  for (const num of arr) {
    curSum += item;
    maxSum = Math.max(maxSum, curSum);
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0
