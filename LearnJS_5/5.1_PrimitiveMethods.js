"use strict"

let zero = new Number(55);

if (zero) {
  // zero возвращает "true", так как является объектом
  // alert("zero имеет «истинное» значение?!?");
}

console.log("zero", zero);

let str1 = Number(zero);
console.log("typeof",typeof str1);
console.log("str", str1);

// Все примитивы, кроме null и undefined, предоставляют множество полезных методов. 
let str = "Привет";

str.test = 5;

console.log(str.test);