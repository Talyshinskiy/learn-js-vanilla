// Подключение js
// for(let i = 0; i < 5; i++){
//   alert(`${i} i love JavaScript`)
// }

// -----------------------------------

// Работа с переменными

// let name = "Bahtiyar"
// let admin = name
// alert(admin)

// -----------------------------------

// Шаблонные строки

// let name = "Ilya";

// alert( `hello ${1}` ); // ? hello l

// alert( `hello ${"name"}` ); // ? hello name

// alert( `hello ${name}` ); // ? hello Ilya

// -----------------------------------

// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

// let yourName = prompt()
// alert(yourName)

// -----------------------------------

//Чему будут равны переменные a, b, c и d в примере ниже?
// let a = 1, b = 1;

// let c = ++a; // ? 2
// let d = b++; // ? 1

// Чему будут равны переменные a и x после исполнения кода в примере ниже?

// let a = 2;

// let x = 1 + (a *= 2);
// a = 4, x = 5

// Какой результат будет у выражений ниже?
// "" + 1 + 0   // 10
// "" - 1 + 0   // -1
// true + false // 1
// 6 / "3"      // 2
// "2" * "3"    // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5  // $45
// "4" - 2      // 2
// "4px" - 2    // error
// "  -9  " + 5 // -9 5
// "  -9  " - 5 // 14
// null + 1     // 1
// undefined + 1 // NaN
// " \t \n" - 2 // - 2
// Исправьте сложение
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b);

// -----------------------------------

// Операторы сравнения
// Каким будет результат этих выражений?
// 5 > 4 // true
// "ананас" > "яблоко" //false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n"  // false
// null === +"\n0\n" // false

// -----------------------------------
// Название JavaScript
// let answer = prompt("Какое «официальное» название JavaScript?")
// if(answer === "ECMAScript"){
//   alert ("Верно!")
// } else {
//   alert('Не знаете? ECMAScript!')
// }

// Покажите знак числа
// let answer = prompt()
// if(+answer > 0) {
//    alert(1)
//   }
// if(+answer === 0) {
//   alert(0)
// }
// if(+answer < 0) {
//   alert(-1)
// }

// Перепишите конструкцию if с использованием условного оператора '?':

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// result = a + b < 4 ? 'Мало' : 'Много'

// let message;
// // if (login == 'Сотрудник') {
// //   message = 'Привет';
// // } else if (login == 'Директор') {
// //   message = 'Здравствуйте';
// // } else if (login == '') {
// //   message = 'Нет логина';
// // } else {
// //   message = '';
// // }
// message =
//   login == "Сотрудник"
//     ? Привет
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";

// -----------------------------------

// Что выведет alert (ИЛИ)?
// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // 1 2
// alert( 1 && null && 2 );  // null
// alert( alert(1) && alert(2) ) // 1 undefined
// alert( null || 2 && 3 || 4 ); // 3

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// alert(value); // 30

// Проверка значения из диапазона
// let age = 91
// if (age >= 14 && age <= 90){
//   alert ("yes")
// }

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// if (!(age >= 14 && age <= 90)) {
//   alert('done')
// }
// if (!(age >= 14 && age <= 90)) {
//   alert('done')
// }
// if (age < 14 || age > 90) {
//   alert('done')
// }

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// // 'first' 'third'

// Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».

// const checkLogin = () => {
//   let login = prompt("логин");
//   if (login === "Админ") {
//     let password = prompt("пароль");
//     if (password === "Я главный") {
//       alert("«Здравствуйте");
//     } else {
//       alert("Неверный пароль");
//     }
//   } else if (login === "" || login === null) {
//     alert("Отменено");
//   } else {
//     alert("Я вас не знаю");
//   }
// };
// checkLogin();

// -----------------------------------

// Последнее значение цикла
// Какое последнее значение выведет этот код? Почему?
// let i = 3;
// while (i) {
//   alert( i-- );
// }
// // 1, because i false

// -----------------------------------

// Какие значения выведет цикл while?

// let i = 0;
// while (++i < 5) alert( i );
// 1 2 3 4

// let i = 0;
// while (i++ < 5) alert( i );
// // 1 2 3 4 5

// -----------------------------------

// Какие значения выведет цикл for?
// for (let i = 0; i < 5; i++) alert( i );
// 0 1 2 3 4

// for (let i = 0; i < 5; ++i) alert(`${i} i`  );
// 0 1 2 3 4

// При помощи цикла for выведите чётные числа от 2 до 10.
// for(let i = 0; i <= 10; i++){
//   if( i % 2 === 0){
//     alert(i)
//   }
// }

// -----------------------------------

// Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
// либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа.
// Предусматривать обработку нечисловых строк в этой задаче необязательно.

// let numb
// while(true){
//   numb = prompt(`Write number bigest 100`)
//   if(numb === null || numb > 100) {
//     break
//   }
// }

// -----------------------------------

// Вывести простые числа

// let n = 10;
// function printPrimes(n) {
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let ii = 2; ii < i; ii++) {
//       if (i % ii === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       alert(i);
//     }
//   }
// }

// printPrimes(10);

// -----------------------------------

// Напишите "if", аналогичный "switch"
// важность: 5
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;

//   default:
//     alert("We hope that this page looks ok!");
// }

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// -----------------------------------

// Переписать условия "if" на "switch"
// Перепишите код с использованием одной конструкции switch:
// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');

// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// -----------------------------------

// Перепишите функцию, используя оператор '?' или '||'
// Используя оператор ?
// Используя оператор ||

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// 1
// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// 2
// function checkAge(age){
//   return age > 18 || confirm("Родители разрешили?");
// }

// -----------------------------------

// Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min (a, b){
//   return a > b ? b : a
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// -----------------------------------

// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// function pow(a, b) {
//   return a**b
// }

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));
// pow(3, 2); // 3 * 3 = 9
// pow(3, 3); // 3 * 3 * 3 = 27
// pow(1, 100); // 1 * 1 * ...* 1 = 1

// -----------------------------------
// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

