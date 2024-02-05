// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
// alert(user.ref.name);
// Каким будет результат? undefined ? потому что она вызываеться как функция а не точенный метод
function newMakeUser() {
  return {
    name: "BAHAHAHAH",
    ref() {
      return this;
    },
  };
}
let newUser = newMakeUser();
// console.log(newUser.ref().name); // BAHAHAHAH

// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// -----------------------------------------------------------------------------------

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// =============================================================================
// Tasks from chatGPT
// =============================================================================

// Калькулятор с использованием объекта:
// Создайте объект Calculator, который имеет методы add, subtract, multiply и divide.
// Каждый из этих методов должен принимать два аргумента и выполнять соответствующую математическую
// операцию. Затем создайте экземпляр Calculator и используйте его методы для выполнения нескольких
// примеров.

let calc = {
  add(a, b) {
    return (this.result = a + b);
  },
  subtract(a, b) {
    return (this.result = a - b);
  },
  multiply(a, b) {
    return (this.result = a * b);
  },
  divide(a, b) {
    return (this.result = a / b);
  },
};
console.log("equals", calc.add(2, 3));
console.log("equals", calc.subtract(66, 3));
console.log("equals", calc.multiply(2, 3));
console.log("equals", calc.divide(9, 3));

// Учет посещений:
// Создайте объект Visitor, который имеет свойства name и visitsCount, а также метод visit, который
// увеличивает visitsCount на 1. Затем создайте несколько экземпляров Visitor и вызовите метод visit
// у каждого. Выведите в консоль информацию о каждом посетителе.


// Реализация игры "Камень, ножницы, бумага":
// Создайте объект Game, который имеет свойства playerScore и computerScore, а также метод playRound,
// который принимает аргумент playerMove (строка с выбором игрока: "rock", "paper" или "scissors").
// Метод должен сравнить выбор игрока с выбором компьютера, увеличить счетчик побед соответствующего
// участника и вывести результат раунда в консоль. Игра должна продолжаться до достижения определенного
//  количества побед одного из игроков.
