let john = { name: "John" };

let array = [john];

john = null;
console.log(array, john);

// В WeakMap присутствуют только следующие методы:

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// Хранение отметок "не прочитано"

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log(readMessages.has(messages[1]));

// Хранение времени прочтения

let readMap = new WeakMap();
readMap.set(messages[0], new Date());
console.log(readMap);
