"use strict";
let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
console.log(typeof num.toString()); // 11111111

// Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
console.log(Math.floor(3.1)); // 3
console.log(Math.floor(-1.1)); // -2

// Math.ceil
// Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-1.1)); // -1

// Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
console.log(Math.round(3.1)); // 4
console.log(Math.round(3.6)); // 4
console.log(Math.round(-1.1)); // -1

// Math.trunc (не поддерживается в Internet Explorer)
// Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
console.log(Math.trunc(3.1)); // 3
console.log(Math.trunc(3.6)); // 3
console.log(Math.trunc(-1.1)); // -1

// округлить число до 2-х знаков после запятой

// 1. Умножить и разделить.
// Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на 100,
// вызвать функцию округления и разделить обратно.

let num1 = 1.23456;
console.log(Math.round(num1 * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// 2. Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое
// представление результата.

let num3 = 12.236;
console.log(num3.toFixed(1)); // "12.3"

console.log(typeof num3.toFixed(5));

let sum = 0.1 + 0.2;
console.log(sum.toFixed(2));
console.log(0.1 + 0.2);

// isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(NaN === NaN); // false);!!!!!!!!!!!

// isFinite(value) преобразует аргумент в число и возвращает true,
// если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, потому что специальное значение: NaN
console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity

// Object.is(a, b)
let a = 1;
let b = a;
console.log("Object.is", Object.is(a, b));

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5

console.log(parseInt("12.3")); // 12, вернётся только целая часть
console.log(parseFloat("12.3.4")); // 12.3, произойдёт остановка чтения на второй точке

// console.log(parent("a123"));// NaN, на первом символе происходит остановка чтения

// Math.max(a, b, c...) / Math.min(a, b, c...)
// Возвращает наибольшее/наименьшее число из перечисленных аргументов.

console.table(
  "Math.max",
  Math.max(11, 23, 324, 3),
  "Math.min",
  Math.min(2, -1, 34, 43)
);

// Math.pow(n, power)
// Возвращает число n, возведённое в степень power

console.log(Math.pow(2, 3)); // 2 * 2 * 2 = 8

// Создайте скрипт,
// который запрашивает ввод двух чисел (используйте prompt)
// и после показывает их сумму.

function getSum() {
  let a = +prompt("Number 1", 0);
  let b = +prompt("Number 2", 0);
  return a + b;
}
// console.log(getSum());



console.log( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?
console.log( 6.35.toFixed(2) ); // 6.3


// Создайте функцию readNumber, которая будет запрашивать 
// ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
function readNumber(){
  let value 
  while(!isFinite(value)){
     value = +prompt("add value,", 0)
  }
  if( value === null || value === "")return null
  return +value
}

console.log(`Число: ${readNumber()}`);


// Напишите функцию random(min, max), 
// которая генерирует случайное число с плавающей 
// точкой от min до max (но не включая max).

function random(min, max){
  return min + Math.random() * (max - min)
}
console.log( random(1, 5) ); // 1.2345623452
console.log( random(1, 5) ); // 3.7894332423
console.log( random(1, 5) ); // 4.3435234525