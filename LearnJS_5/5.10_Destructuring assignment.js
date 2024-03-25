let arrName = ["Bahtiyar", "German"];

let [firstName, secondName] = arrName;
console.log(firstName);
console.log(typeof secondName);

let [firstName1, secondName1] = "Bahtiyar, German".split(" ");
console.log(firstName1, secondName1);

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

let user = {};
[user.name, user.surname] = "Bahtiyar, German".split(" ");
console.log(user.name);

let newUser = {
  name: "Bahtiyar",
  age: 27,
};

for (let [key, value] of Object.entries(newUser)) {
  console.log(`this is my name and age ${key} ${value}`);
}

let userMap = new Map();
userMap.set("name", "Bahahahahaha");
userMap.set("age", "27");

for (let [key, value] of userMap) {
  console.log(key, value);
}

let quest = "Quest";
let admin = "Admin";

[quest, admin] = [admin, quest];
console.table(quest, admin);

// ИТОГО //
// let {prop : varName = default, ...rest} = object

// -------------------------------------------
// _______________tasks_______________________

// Деструктурирующее присваивание

let userTask = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = userTask;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Создайте функцию topSalary(salaries),
// которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников,
// можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование,
// чтобы перебрать пары ключ/значение.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(Object.values(salaries).length);
function topSalary(salaries) {
  let arrSalary = [];
  if (Object.values(salaries).length === 0) return null;
  for (let [key, value] of Object.entries(salaries)) {
    arrSalary.push(value);
  }

  console.log(...arrSalary, 2);
  return Math.max(...arrSalary);
}
console.log(topSalary(salaries));

// or 

function topSalary2(salaries){
  let max = 0
  let maxName = null
  for(let [name, salary] of Object.entries(salaries)){
    if (max < salary){
      max = salary
      maxName = name
    }
  }
  return maxName
}