// TASK 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squarep(a,b) {
//     return a*b;
// }
// console.log(squarep(5,7));

// TASK 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squarer(r) {
//     return 3.14*r*r;
// }
// console.log(squarer(5));

// TASK 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squarec(h,r) {
//    return 2*3.14*h*r;
// }
// console.log(squarec(5,6));

// TASK 4 - створити функцію яка приймає масив та виводить кожен його елемент
// let mas = [2,4,-5,10,45,-9,6,4,7];
//  function arrayel(array) {
//      for (let i = 0; i < array.length; i++) {
//          console.log(mas[i]);
//      }
//  }
// arrayel(mas);

// TASK 5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('Lorem ipsum dolor sit amet');

// TASK 6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list3(text) {
//     document.write(`<ul> <li>${text}</li> <li>${text}</li> <li>${text}</li> </ul>`);
// }
// list3('okten');

// TASK 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listn(text,n) {
//     document.write(`<ul>`);
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listn('javascript',4);

// TASK 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),та будує для них список
// function ArrayOfElem(...array) {
//     console.log(arguments);
//
// }
// ArrayOfElem(1, 4, 'west', true, 5, 'okten');
// TASK 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 202201, name: 'Anya', age: 26 },
//     {id: 202202, name: 'Andrij', age: 30},
//     {id: 202203, name: 'Ira', age: 29},
//     {id: 202204, name: 'Igor', age: 39},
//     {id: 202205, name: 'Ura', age: 35},
//     {id: 202206, name: 'Oleg', age: 30},
//     {id: 202207, name: 'Vasylyna', age: 28},
//     {id: 202208, name: 'Olesya', age: 27},
//     {id: 202209, name: 'Ulya', age: 36}
// ];
// function arrayToDocum(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} --- ${arrayElement.name} --- ${arrayElement.age} </div>`)
//     }
// }
// arrayToDocum(users);
// TASK 10 - створити функцію яка повертає найменьше число з масиву
// без використання математичний функцій
// let mas = [2,4,-5,10,45,-9,6,4,7];
//  function arraymin1(array) {
//       let min = array[0];
//      for (let i = 1; i < array.length; i++) {
//          if (min > array[i]){
//              min = array[i];
//          }
//      }
//      return min;
//  }
// console.log(arraymin1(mas));

// з використанням математичної функції min
// let mas = [2,4,-5,10,45,-9,6,4,7];
// function arraymin2(array) {
//     return Math.min(...array);
// }
// console.log(arraymin2(mas));

// TASK 11 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let mas = [2,4,-5,10,45,-9,6,4,7];
//  function sumarray(array) {
//       let sum =0;
//      for (let i =0; i < array.length; i++) {
//          sum+=array[i];
//      }
//      return sum;
//  }
// console.log(sumarray(mas));