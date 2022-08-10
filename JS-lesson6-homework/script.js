// TASK 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 ='hello world';
// console.log(str1.length);
// let str2 ='lorem ipsum';
// console.log(str2.length);
// let str3 ='javascript is cool';
// console.log(str3.length);

// TASK 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 ='hello world';
// console.log(str1.toUpperCase());
// let str2 ='lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 ='javascript is cool';
// console.log(str3.toUpperCase());

// TASK 3- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 ='HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 ='LOREM IPSUM\'';
// console.log(str2.toLowerCase());
// let str3 ='JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());

// TASK 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.length);
// str = str.substring(str.indexOf(' ')+1, str.lastIndexOf(' ')-1);
// console.log(str);
// console.log(str.length);


// TASK 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);
//
//
//TASK 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let str = arr.map(value => value.toString());
// console.log(str);


// TASK 7- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//let nums = [11,21,3];
// function sortNums(array,text) {
//     switch (text) {
//         case 'ascending':
//             return array.sort((a,b) => a-b );
//         case 'descending':
//             return array.sort((a,b) => b-a );
//     }
//
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));

// TASK 8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//     ]
// let arraySort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(arraySort);
// let arrayFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(arrayFilter);
//
// TASK 9 - описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let cards = [
//     { value:'6', cardSuit:'spade', color:'black'},
//     { value:'6', cardSuit:'diamond', color:'red'},
//     { value:'6', cardSuit:'heart', color:'red'},
//     { value:'6', cardSuit:'clubs', color:'black'},
//     { value:'7', cardSuit:'spade', color:'black'},
//     { value:'7', cardSuit:'diamond', color:'red'},
//     { value:'7', cardSuit:'heart', color:'red'},
//     { value:'7', cardSuit:'clubs', color:'black'},
//     { value:'8', cardSuit:'spade', color:'black'},
//     { value:'8', cardSuit:'diamond', color:'red'},
//     { value:'8', cardSuit:'heart', color:'red'},
//     { value:'8', cardSuit:'clubs', color:'black'},
//     { value:'9', cardSuit:'spade', color:'black'},
//     { value:'9', cardSuit:'diamond', color:'red'},
//     { value:'9', cardSuit:'heart', color:'red'},
//     { value:'9', cardSuit:'clubs', color:'black'},
//     { value:'10', cardSuit:'spade', color:'black'},
//     { value:'10', cardSuit:'diamond', color:'red'},
//     { value:'10', cardSuit:'heart', color:'red'},
//     { value:'10', cardSuit:'clubs', color:'black'},
//     { value:'jack', cardSuit:'spade', color:'black'},
//     { value:'jack', cardSuit:'diamond', color:'red'},
//     { value:'jack', cardSuit:'heart', color:'red'},
//     { value:'jack', cardSuit:'clubs', color:'black'},
//     { value:'queen', cardSuit:'spade', color:'black'},
//     { value:'queen', cardSuit:'diamond', color:'red'},
//     { value:'queen', cardSuit:'heart', color:'red'},
//     { value:'queen', cardSuit:'clubs', color:'black'},
//     { value:'king', cardSuit:'spade', color:'black'},
//     { value:'king', cardSuit:'diamond', color:'red'},
//     { value:'king', cardSuit:'heart', color:'red'},
//     { value:'king', cardSuit:'clubs', color:'black'},
//     { value:'joker', color:'black'},
//     { value:'joker', color:'red'}
// ]
//
// TASK 10 Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу по пакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let cardSuit = cards.reduce(function (accum,card){
//     switch (card.cardSuit) {
//         case 'spade': {
//             accum.spades.push(card);
//             break;
//         }
//         case 'diamond': {
//             accum.diamonds.push(card);
//             break;
//         }
//         case 'heart': {
//             accum.hearts.push(card);
//             break;
//         }
//         case 'clubs': {
//             accum.clubs.push(card);
//             break;
//         }
//     }
//     return accum;
// }, {spades: [], diamonds:[], hearts:[], clubs:[]});
// console.log(cardSuit);
