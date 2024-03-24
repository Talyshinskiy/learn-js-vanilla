// отфильтруйте технологии с показателем популярности выше 80
// и рассчитайте средний показатель популярности отфильтрованных технологий

const technologies = [
  { name: "AI", popularity: 90 },
  { name: "Blockchain", popularity: 85 },
  { name: "Quantum Computing", popularity: 78 },
  { name: "AR/VR", popularity: 82 },
  { name: "5G", popularity: 88 },
];

const popularTechnologies = technologies.filter(
  (technologie) => technologie.popularity > 80,
);
console.log(popularTechnologies);
const averagePopularity =
  // console.log(  "Trending technologies with popularity above 80:",popularTechnologies,);
  // console.log("Average popularity score of popular technologies:",averagePopularity,);

  // #2 Создайте функцию, которая принимает URL-адрес в виде строки и возвращает объект,
  // содержащий все параметры запроса в виде пар ключ-значение.

  function parseQueryParams(url) {
    const params = {};

    return params;
  };

const url = "https://www.example.com/page?name=John&age=30&city=NewYork";
// console.log(parseQueryParams(url)); // { name: 'John', age: '30', city: 'NewYork' }

// Вы заказываете рубашку для своего друга, на которой написано слово на языке жестов, вы хотели бы одурачить своего друга, заставив его думать, что на ней написано что-то отличное от того, что на самом деле написано.
// Ваш друг умен, но он не может знать того, чего еще не знает, он знает только определенное количество букв на языке жестов. Выясните, может ли он понять, что вы его дурачите. Верните значение true, если ваш друг сможет понять, что вы его дурачите, в противном случае верните значение false.
function gaslighting(shirtWord, yourWord, friendsLetters) {
  const words = shirtWord + yourWord;

  return words.split("").some((char) => !friendsLetters.includes(char));
}

// console.log( gaslighting("snack","snake","c")) // true
// console.log( gaslighting("ping","pong","png")) // false
// console.log( gaslighting("snack","snack","snack")) // false
