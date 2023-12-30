// getStringCount

// Реализуйте (с использованием рекурсии) функцию getStringCount,
// которая должна принимать массив или объект и считать количество
// строк в массиве / значениях объекта с учетом вложенности.
// P.S. Для корректного прохождения проверку на рекурсию -
// вы должны вызывать именно функцию getStringCount

function getStringCount(value) {
  if (typeof value === "string") {
    return 1;
  } else if (Array.isArray(value)) {
    return value.reduce((acc, cur) => acc + getStringCount(cur), 0);
  } else if (typeof value === "object" && value !== null) {
    return Object.values(value).reduce((acc, cur) => acc + getStringCount(cur),0)
  } else {
    return 0;
  }
}
const obj = {
  first: "1",
  second: { prop: "2" },
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
}
console.log(getStringCount(obj));// 3
const arr = ["1", "2", ["3"]]
 console.log(getStringCount(arr)); // 3
