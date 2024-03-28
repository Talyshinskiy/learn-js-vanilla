function recursionFun(x, n) {
  return n === 1 ? x : x * recursionFun(x, n - 1);
}

console.log(recursionFun(2, 4));

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function salarySum(department) {
  if (Array.isArray(department)) {
    return department.reduce((acc, cur) => acc + cur.salary, 0);
  } else {
    let sum = 0;
    for (let salary of Object.values(department)) {
      sum += salarySum(salary);
    }
    return sum;
  }
}
console.log(salarySum(company));
console.log(Object.values({ name: "John", salary: 1000 }));

let list = {
  // связанный список.
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// or
let list2 = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// --------------------------------Tasks--------------------------------
// ---------------------------------------------------------------------

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// console.log( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

function sumToRecursive(value) {
  if (value === 1) return value;
  return value + sumToRecursive(value - 1);
}
console.log(sumToRecursive(1));
console.log(sumToRecursive(2));
console.log(sumToRecursive(3));
console.log(sumToRecursive(4));
console.log(sumToRecursive(100));

function sumToCycle(value) {
  let sum = 0;
  for (let i = 0; i <= value; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToCycle(1));
console.log(sumToCycle(2));
console.log(sumToCycle(3));
console.log(sumToCycle(4));
console.log(sumToCycle(100));

function sumTo(value) {
  return (value * (value + 1)) / 2;
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));

// ---------------------------------------------------------------------

// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// ---------------------------------------------------------------------

// Числа Фибоначчи
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3)
// и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением
// и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы:

// function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро.
// Вызов fib(77) должен занимать не более доли секунды.

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// ---------------------------------------------------------------------

// Вывод односвязного списка
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?

let list3 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log("list.value", list.value);
  if (list.next) {
    printList(list.next);
  }
}

printList(list3);

//or

function printList2(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}
printList2(list);

// ---------------------------------------------------------------------
// Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания
// Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

function printList3(list) {
  if (list.next) {
    printList3(list.next);
  }
  console.log(list.value);
}

printList3(list3);
//or
function printList4(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log("arr", arr[i]);
  }
}
printList4(list);
