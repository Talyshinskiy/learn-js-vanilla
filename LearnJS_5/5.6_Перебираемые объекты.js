let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}

let strHello = "Hello";
let iterator = strHello[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

// Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.
// Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.

// _________________Array.from______________
let arrLike = {
  0: "Hi",
  1: "WD",
  length: 2,
};
let arr1 = Array.from(arrLike);
console.log(arr1, arr1.pop());
console.log(arr1.unshift("UNSHIFT"), arr1);

let objEx = {
  1: 2,
  2: 3,
  3: 4,
  length: 3
};

let arrObj = Array.from(objEx)
console.log(arrObj);

