let user = {
  name: "GOK",
  age: 12,
};
function A() {
  return user;
}
function B() {
  return user;
}

let a = new A();
let b = new B();

// console.log(a === b); // true

// ----------------------------------------------------------------------------------------------

// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator() {
  this.read = function () {
    this.a = +prompt("number 1", 0);
    this.b = +prompt("number 1", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a - this.b;
  };
}

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// ----------------------------------------------------------------------------------------------

// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается
// в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений,
// с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("numb", 0);
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

// ----------------------------------------------------------------------------------------------
