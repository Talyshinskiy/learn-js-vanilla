// Methods Map

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);
console.log(recipeMap);

for (const vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (const amount of recipeMap.values()) {
  console.log(amount);
}

for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
  console.log(1, `${key}: ${value}`); // огурец: 500 и так далее
});

let map = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log(map, map.get("1")); // str1

let obj = {
  name: "John",
  age: 30,
};

let map1 = new Map(Object.entries(obj));
// console.log(3, Object.entries(obj));
console.log(map1.get("name")); // John

// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// Его основные методы это:

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.
// Set имеет те же встроенные методы, что и Map:

// set.values() – возвращает перебираемый объект для значений,
// set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
// set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.

let set = new Set(["апельсин", "яблоко", "банан"]);
console.log(set);
for (let value of set) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

// -------------------------------------------
// _______________tasks_______________________

// Создайте функцию unique(arr),
// которая вернёт массив уникальных,
// не повторяющихся значений массива arr.

function unique(arr) {
  let arrSet = Array.from(new Set(arr));
  return arrSet;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

// Напишите функцию aclean(arr),
// которая возвращает массив слов,
// очищенный от анаграмм.

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

let map2 = new Map();


// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, 
// например, применить метод .push.
map2.set("name", "John");
let keys = Array.from(map2.keys());
keys.push("more");
alert(keys); // name, more
