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

// alert( sumTo(100) ); // 5050
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