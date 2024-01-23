// Давайте представим, что у вас есть массив чисел, и
// вы хотите написать хвостовую рекурсивную функцию на JavaScript,
// которая находит сумму всех элементов массива.
// Вот задача:
// Сумма элементов массива с использованием хвостовой рекурсии**
// Напишите хвостовую рекурсивную функцию `calculateSumTailRec(arr, index, accumulator)`,
// которая принимает массив чисел `arr`, текущий индекс `index` и аккумулятор `accumulator`.
// Функция должна возвращать сумму всех элементов массива, начиная с указанного индекса.
// Пожалуйста, реализуйте функцию `calculateSumTailRec` так,
// чтобы она использовала хвостовую рекурсию.

function calculateSumTailRec(arr, index, accumulator) {
  if (index === arr.length) {
    return accumulator;
  }
  return calculateSumTailRec(arr, index + 1, accumulator + arr[index]);
}

const array = [1, 2, 3, 4, 5];
const sum = calculateSumTailRec(array, 0, 0);
console.log(sum); // Ожидаемый результат: 15

// Задача: Нахождение самой длинной строки в массиве с
// использованием хвостовой рекурсии
// Напишите хвостовую рекурсивную функцию
// findLongestStringTailRec(arr, index, currentLongest),
// которая принимает массив строк arr, текущий индекс index и
// текущую самую длинную строку currentLongest.
// Функция должна возвращать самую длинную строку в массиве.

function findLongestStringTailRec(arr, index, currentLongest) {
 if (index === arr.length){
  return currentLongest
 }

 let currentString = arr[index]
 if(currentString.length > currentLongest.length){
  return findLongestStringTailRec(arr, index + 1, currentString)
 } else {
  return findLongestStringTailRec(arr,index + 1, currentLongest)
 }
}

const stringArray = ["apple", "banana", "kiwi", "strawberry", "orange"];
const longestString = findLongestStringTailRec(stringArray, 0, "");
console.log(longestString); // Ожидаемый результат: "strawberry"


// Задача: Вычисление суммы цифр числа с использованием 
// хвостовой рекурсии
// Напишите хвостовую рекурсивную функцию 
// sumOfDigitsTailRec(number, currentSum), 
// которая принимает число number и текущую сумму currentSum. 

function sumOfDigitsTailRec(number, currentSum){

}

const number = 12345;
const digitSum = sumOfDigitsTailRec(number, 0);
console.log(digitSum); // Ожидаемый результат: 15
// console.log(number % 10);

// ------------------------------------------------


function sumOfArrayTailRec(arr, index, accumulator){
  if(index === arr.length){
    return accumulator
  }
return sumOfArrayTailRec(arr, index + 1, accumulator + arr[index])
}

const numberArray = [1, 2, 3, 4, 5];
const arraySum = sumOfArrayTailRec(numberArray, 0, 0);
console.log(arraySum); // Ожидаемый результат: 15
