let id = Symbol();
console.log(id);

let id2 = Symbol("id");
console.log(id2);
// alert(id2.toString())
console.log(typeof id2);
console.log(id2.description);

let user = {
  name: "HAHA",
  [id2]: 234,
};

let userId = Symbol("IDDDD");

user[userId] = 123;

// alert(user[userId]);
console.log(user);

// глобальные символы Symbol.for(key) 
// Eсли вам нужен символ, доступный везде в коде – используйте глобальные символы.
let a = Symbol.for("a")
let b = Symbol.for("a")
console.table(a===b, a, b ,typeof a);


// Symbol.keyFor принимает глобальный символ и возвращает его имя.
let sym = Symbol.for("name")
let sym2 = Symbol.for("IIIDDD")
// получаем имя по символу
console.table(Symbol.keyFor(sym),Symbol.keyFor(sym2), "Symbol.keyFor" );
// Технически символы скрыты не на 100%. Существует встроенный 
// метод Object.getOwnPropertySymbols(obj) – с его помощью можно получить все свойства объекта 
// с ключами-символами. Также существует метод Reflect.ownKeys(obj), который возвращает 
//   все ключи объекта, включая символьные. Так что они не совсем спрятаны. 
//   Но большинство библиотек, встроенных методов и синтаксических конструкций 
//   не используют эти методы.
