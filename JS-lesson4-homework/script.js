// TASK 1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
// document.write('<div>HTML</div>');
// }

// TASK 2 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>CSS ' + i+'</div>');
// }

// TASK 3 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<=20){
//     document.write('<h1>JavaScript<h1>');
//     i++;
// }

// TASK 4 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<=20){
//     document.write(`<h1>Bootstrap${i}</h1>`);
//     i++;
// }

// TASK 5 - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// document.write('<ul>');
// for (let i = 0; i < listOfItems.length; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`);
// }
// document.write('</ul>');
// -----------------------------------------------
//
//  TASK 6 ---  Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     document.write(`
//         <div class="product-card">
//             <h3 class="product-title">${product.title} - ${product.price}</h3>
//             <img src="${product.image}" alt="" class="product-image">
//         </div>
//     `);
// }
//
//
//
//
// TASK 7 --------------------
//     є масив
// за допомоги циклу вивести:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// - користувачів зі статусом true
document.write('<div>');
document.write('<h3>користувачі зі статусом true</h3>');
document.write('<ul>');
for (const user of users) {
    if(user.status){
       document.write(`<li>${user.name}</li>`);
    }

}
document.write('</ul>');
document.write('</div>');

// - користувачів зі статусом false
document.write('<div>');
document.write('<h3>користувачі зі статусом false</h3>');
document.write('<ul>');
for (const user of users) {
    if(!user.status){
        document.write(`<li>${user.name}</li>`);
    }

}
document.write('</ul>');
document.write('</div>');

// - користувачів які старші за 30 років
document.write('<div>');
document.write('<h3>користувачі які старші за 30 років</h3>');
document.write('<ul>');
for (const user of users) {
    if(user.age > 30){
        document.write(`<li>${user.name}</li>`);
    }

}
document.write('</ul>');
document.write('</div>');