let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList); // список гостей, состоящий из нескольких строк

// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";

// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;

console.log(str1 == str2); // true

let str = `Hello`;

// получаем первый символ
console.log(str[0]); // H
console.log(str.at(0)); // H

// получаем последний символ
console.log(str[str.length - 1]); // o
console.log(str.at(-1)); // o

// str.indexOf
let str22 = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let pos = -1;
while ((pos = str22.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

// str.lastIndexOf(substr, position) ищет с конца строки к её началу.
// Он используется тогда, когда нужно получить самое последнее вхождение:
// перед концом строки или начинающееся до (включительно) определённой позиции.
// str.lastIndexOf(substr, position)
let str12 = "Widget with id";

if (str12.indexOf("Widget") != -1) {
  console.log("Совпадение есть"); // теперь работает
}

// ___________includes, startsWith, endsWith_________________
//  метод str.includes(substr, pos) возвращает true,
// если в строке str есть подстрока substr, либо false, если нет

console.log("Midget".includes("id")); // true
console.log("Midget".includes("id", 3)); // false, поиск начат с позиции 3

// Методы str.startsWith и str.endsWith проверяют, соответственно,
// начинается ли и заканчивается ли строка определённой строкой:

console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget"

// _______________str.slice(start [, end])____________
// Возвращает часть строки от start до (не включая) end.

// ______________str.substring(start [, end])______________
// Возвращает часть строки между start и end (не включая) end.

// ________________str.substr(start [, length])____________
// Возвращает часть строки от start длины length.

// Строки кодируются в UTF-16. Таким образом, у любого символа есть соответствующий код.
//  Есть специальные методы, позволяющие получить символ по его коду и наоборот.
// str.codePointAt(pos)
// Возвращает код для символа, находящегося на позиции pos:

// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
console.log("z".codePointAt(0)); // 122
console.log("Z".codePointAt(0)); // 90

// String.fromCodePoint(code)
// Создаёт символ по его коду code

console.log(String.fromCodePoint(90)); // Z

// Вызов str.localeCompare(str2) возвращает число, которое показывает,
// какая строка больше в соответствии с правилами языка:
console.log("Österreich".localeCompare("Zealand")); // -1

//       tasks
//--------------------------------------------------------------------------
// Напишите функцию ucFirst(str), возвращающую строку str с
// заглавным первым символом. Например:

function ucFirst(str) {
  return str[0].toUpperCase() + str.substring(1, 4);
}
console.log(ucFirst("вася")); //== "Вася";

//--------------------------------------------------------------------------
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX',
// а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  str.toLowerCase();
  return str.includes("viagra") && str.includes("xxx") ? false : true;
}
console.table(
  checkSpam("buy ViAgRA now") == true,
  checkSpam("free xxxxx") == true,
  checkSpam("innocent rabbit") == false
);

//--------------------------------------------------------------------------

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
// если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо,
// если необходимо, усечённая строка.

function truncate(str, maxlength) {
  if (maxlength > str.length) return str;
  return str.substring(0, maxlength) + "…"  
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // "Вот, что мне хотело…"
console.log(truncate("Всем привет!", 20)); // "// "Всем привет!"

//--------------------------------------------------------------------------

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять 
// числовое значение и возвращать его.

function extractCurrencyValue(str){
  return +str.slice(1)
}

console.log( extractCurrencyValue('$120')  ); //=== 120