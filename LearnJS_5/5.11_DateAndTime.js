let sumSecond = Date.prototype;
console.log(sumSecond);

let start = Date.now();
for (let i = 0; i < 10000; i++) {
  // console.log(i);
}

let end = Date.now(); //Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп (англ. timestamp).

let elapsed = end - start;

console.log(elapsed);

var t0 = performance.now(); //число с плавающей запятой, с точностью до микросекунд.
for (let i = 0; i < 10000; i++) {
  // console.log(i);
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

let today = new Date();
let time = today.getTime();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();
let second = today.getSeconds();
let milliseconds = today.getMilliseconds();

console.log(today);
console.log(year);
console.log(month);
console.log(hours);
console.log(minutes);
console.log(second);
console.log(milliseconds);
console.log(time);

// Метод Date.parse(str) считывает дату из строки.

// -------------------------------------------
// _______________tasks_______________________

let date2012 = new Date(2012, 1, 20, 3, 12);
console.log(date2012);

// Напишите функцию getWeekDay(date),
// показывающую день недели в коротком
// формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
  let month = {
    0: "ВС",
    1: "ПН",
    2: "ВТ",
    3: "СР",
    4: "ЧТ",
    5: "ПТ",
    6: "СБ",
  };
  // console.log(date2014.getDate());
  return month[date.getDate()];
}
let date = new Date(2014, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date));
// ---------------------------------------------------------------
function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}
// ---------------------------------------------------------------
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28

// ---------------------------------------------------------------

// апишите функцию getSecondsToday(),
// возвращающую количество секунд с начала
// сегодняшнего дня.
// Например, если сейчас 10:00,
// и не было перехода на зимнее/летнее время, то:

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}
console.log(getSecondsToday());

// ---------------------------------------------------------------

// Создайте функцию getSecondsToTomorrow(),
// возвращающую количество секунд до завтрашней даты.
function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondInDay = 86400;
  return totalSecondInDay - totalSecondToday;
}
console.log(getSecondsToTomorrow());

// ---------------------------------------------------------------
// Напишите функцию formatDate(date), форматирующую date
function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) return "rigth now";
  let second = Math.floor(diff / 1000);

  if (second < 60) return second + " second before";
  let min = Math.floor(diff / 60000);
  if (min < 60) return min + "minutes ago";
  let d = date;
  // console.log(d, "its d");
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "0" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}
console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
