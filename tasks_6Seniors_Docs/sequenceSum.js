// sequenceSum
// Реализуйте (с использованием рекурсии) функцию sequenceSum,
// которая находит сумму последовательности целых чисел.
// Последовательность задается двумя значениями:
// begin - начало последовательности,
// end - конец последовательности.
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

function sequenceSum(begin, end) {
  if (begin > end) return null;
  if (begin === end) return begin;
  else {
    return begin + sequenceSum(begin + 1, end);
  }
}
console.log(sequenceSum(1, 5));
console.log(sequenceSum(4, 10));
console.log(sequenceSum(-3, 2));
console.log(sequenceSum(7, 2));
console.log(sequenceSum(0, 0));
console.log(sequenceSum(6, 6));

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 - -3
// Подсказки:
// Последовательность, в которой begin > end,
// не содержит ни одного числа, т.е. является "пустой".
// Вычислить сумму чисел такой последовательности не представляется возможным,
// в этом случае возвращаем NaN
// Сумма чисел последовательности, в которой begin === end,
// равна begin (или end)
// NaN (т.к. это "пустая" последовательность)
sequenceSum(7, 2);
// 0 (т.к. это единственное число, входящее в последовательность)
sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
sequenceSum(6, 6);
// P.S. Для корректного прохождения проверку на рекурсию - вы должны
// вызывать именно функцию sequenceSum
