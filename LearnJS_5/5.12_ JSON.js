// JavaScript предоставляет методы:

// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json); //JSON-форматированным или сериализованным объектом

// пропускает свойства объектов JavaScript

// Свойства-функции (методы).
// Символьные ключи и значения.
// Свойства, содержащие undefined.
// не должно быть циклических ссылок.

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers); // 1

// -------------------------------------------
// _______________tasks_______________________

// Преобразуйте user в JSON, затем
// прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user2);
// -------------------------------------------
// Исключить обратные ссылки
// Напишите функцию replacer для JSON-преобразования,
// которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    /* ваш код */
    return (key != "" && value == meetup) ? undefined : value;
  })
);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
