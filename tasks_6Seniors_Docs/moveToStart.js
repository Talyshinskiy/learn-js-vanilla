// moveToStart

// Реализуйте функцию moveToStart, 
// которая принимает массив и число п. 
// Функция должна переставить n элементов массива 
// из конца в начало. Если второй аргумент больше или 
// равен длине массива, то должен быть возвращен новый массив, 
// порядок элементов которого совпадает с изначальным. 
// Функция должна возвращать новый массив, а не мутировать старый.

function moveToStart(array, number){
  let newArr = []
  for(let i = 0; i < array.length; i++){
  if(array[i] >= number){
      newArr.push(array[i])
  }
    else {
      newArr.unshift(array[i])
    }  
  }
return newArr
}

console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]