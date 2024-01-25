
// Задачи:

// 1. При создании своего "Меню Путешественника" вы решили добавить в него новые блюда. 
//    Добавьте несколько уникальных блюд в конец меню.

const travelerMenu = ["Pasta", "Pizza", "Salad"];
const newDishes = ["Sushi", "Burger", "Curry"];

travelerMenu.push(...newDishes);
console.log('Меню Путешественника после добавления блюд:', travelerMenu);

// 2. В вашем городе прошло музыкальное событие, и несколько артистов решили подарить вам свои CD. 
//    Удалите последний полученный CD из вашей коллекции.

const cdCollection = ["Artist1 CD", "Artist2 CD", "Artist3 CD"];
const removedCd = cdCollection.pop();
console.log('Удаленный CD:', removedCd);
console.log('Коллекция CD после удаления последнего:', cdCollection);

// 3. Вы решили поддержать идею вегетарианства и удалить из своего рациона первый завтрак.
//    Удалите первый прием пищи из вашего "Рациона Здоровья".

const healthyDiet = ["Oatmeal", "Fruit Salad", "Smoothie"];
const removedBreakfast = healthyDiet.shift();
console.log('Удаленный первый завтрак:', removedBreakfast);
console.log('Рацион Здоровья после удаления первого завтрака:', healthyDiet);

// 4. Ваш друг шеф-повар предложил вам попробовать новое блюдо, которое он только что приготовил.
//    Добавьте это блюдо в начало вашего "Особенного Меню".

const specialMenu = ["Special Soup", "Special Pasta", "Special Dessert"];
const newDish = "Special Curry";

specialMenu.unshift(newDish);
console.log('Особенное Меню после добавления нового блюда:', specialMenu);

// 5. Вы решили объединить меню вашего ресторана с меню соседнего ресторана и создать новый.
//    Объедините оба меню в одно "Эклектичное Меню".

const yourMenu = ["Appetizer", "Main Course", "Dessert"];
const neighborMenu = ["Soup", "Salad", "Side Dish"];
const eclecticMenu = yourMenu.concat(neighborMenu);
console.log('Эклектичное Меню:', eclecticMenu);

// 6. Перечислите все блюда в вашем меню и выделите их с помощью пригласительной речи 
//    для ваших дорогих посетителей.

const invitingSpeech = `Дорогие гости, добро пожаловать в наш ресторан! Позвольте представить вам наше меню:\n${yourMenu.join('\n')}`;
console.log(invitingSpeech);

// 7. Вы устроили вечеринку с викториной, и каждый участник получил уникальный номер.
//    Найдите номер участника с правильным ответом.

const quizParticipants = [123, 456, 789, 101, 202];
const correctAnswerParticipant = 789;
const correctAnswerIndex = quizParticipants.indexOf(correctAnswerParticipant);
console.log('Номер участника с правильным ответом:', correctAnswerIndex);

// 8. Ваша кухня теперь ориентирована на заботу о клиенте, и вы решили предложить 
//    только блюда для тех, кто следит за своим здоровьем.
//    Оставьте только те блюда, которые подходят под концепцию "Здоровой Еды".

const healthAwareMenu = ["Salad", "Grilled Chicken", "Quinoa Bowl", "Fruit Smoothie"];
const healthyOptions = healthAwareMenu.filter(dish => dish !== "Grilled Chicken");
console.log('Блюда для Здоровой Еды:', healthyOptions);

// 9. Вы решили создать кулинарный блог и поделиться своими кулинарными экспериментами.
//    Удвойте количество уникальных рецептов, чтобы порадовать своих читателей.

const culinaryExperiments = ["Chocolate Cake", "Vegan Pasta", "Smoothie Bowl"];
const doubledRecipes = culinaryExperiments.concat(culinaryExperiments);
console.log('Удвоенные рецепты для кулинарного блога:', doubledRecipes);

// 10. Ваш ресторан приобрел новый статус "Звезда Гида Мишлен", и теперь вы должны предоставить 
//    ваши блюда в алфавитном порядке, чтобы поразить критиков.
//    Отсортируйте блюда в алфавитном порядке.

const michelinStarMenu = ["Dessert", "Appetizer", "Main Course", "Salad"];
michelinStarMenu.sort();
console.log('Блюда в алфавитном порядке:', michelinStarMenu);
