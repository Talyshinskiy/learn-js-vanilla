// 1. **Сортировка строк по длине:**
//    Напишите функцию `sortByLength`, которая принимает массив строк и
// сортирует его по длине строк, используя метод сортировки выбором.

function sortByLength(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].length < array[indexMin].length) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

const strings = ["apple", "banana", "kiwi", "orange", "grape"];
const sortedStrings = sortByLength(strings);
//  console.log(sortedStrings);
// Ожидаемый результат: ["kiwi", "grape", "apple", "banana", "orange"]

// 2. **Сортировка объектов по значению свойства:**
// Напишите функцию `sortByProperty`, которая принимает массив объектов
// и поле (например, "age"), по которому нужно провести сортировку.
// Функция должна отсортировать массив объектов по значению указанного свойства,
// используя метод сортировки выбором.

function sortByProperty(arr, property) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][property] < arr[indexMin][property]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
}
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
];

const sortedPeople = sortByProperty(people, "age");
// console.log(sortedPeople);
//    // Ожидаемый результат: [{ name: "Bob", age: 25 }, { name: "David", age: 28 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// 3. **Сортировка чисел в двумерном массиве:**
// Напишите функцию `sort2DArray`, которая принимает
// двумерный массив чисел и сортирует каждый подмассив по возрастанию,
// используя метод сортировки выбором.

function sort2DArray(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      let minIndex = j;
      for (let k = j + 1; k < matrix[i].length; k++) {
        if (matrix[i][k] < matrix[i][minIndex]) {
          minIndex = k;
        }
      }
      if (minIndex !== j) {
        [matrix[i][j], matrix[i][minIndex]] = [matrix[i][minIndex], matrix[i][j]];
      }
    }
  }
  return matrix;
}
const matrix = [
  [5, 2, 8, 1],
  [3, 9, 4, 7],
  [6, 1, 0, 2],
];

const sortedMatrix = sort2DArray(matrix);
console.log(sortedMatrix);
//    // Ожидаемый результат: [[1, 2, 5, 8], [3, 4, 7, 9], [0, 1, 2, 6]]

