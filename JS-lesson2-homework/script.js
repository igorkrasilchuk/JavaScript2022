// TASK 1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [12, 3, 'west', 'tesy',-18, true, 2 ,'w', 10, -5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// TASK 2- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 =  {
    title: 'Finansist',
    pageCount: 670,
    genre: 'novel'
}
console.log(book1);
let book2 =  {
    title: 'How to find friends',
    pageCount: 450,
    genre: 'psychology'
}
console.log(book2);
let book3 =  {
    title: 'Around the World in Eighty Days',
    pageCount: 378,
    genre: 'novel'
}
console.log(book3);

// TASK 3- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 =  {
    title: 'Finansist',
    pageCount: 670,
    genre: 'novel',
    autor: ['Teodor Drajzer', 79]
}
console.log(book4);
let book5 =  {
    title: 'How to find friends',
    pageCount: 450,
    genre: 'psychology',
    autor: ['Borys Jonson', 55]
}
console.log(book5);
let book6 = {
    title: 'Around the World in Eighty Days',
    pageCount: 378,
    genre: 'novel',
    autor: ['Jules Verne', 87]
}
console.log(book6);

// TASK 4- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
// 'Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Ivan', username: 'Ivan37', password:'qazswx' },
    {name: 'Jack', username: 'Jackson2009', password:'edsw' },
    {name: 'Olga', username: 'Oljusyk', password:'edr332' },
    {name: 'Igor', username: 'Igor2222', password:'7556yhg' },
    {name: 'Galyna', username: 'Galyktyka', password:'4433edffrf' },
    {name: 'Olenka', username: 'OlenkaYoung', password:'fhjvcsws34' },
    {name: 'Ira', username: 'Ira2001', password:'dde453df' },
    {name: 'Petro', username: 'Petucio', password:'saw233as' },
    {name: 'Vasyl', username: 'Vlastylin', password:'234poijjh' },
    {name: 'Semen', username: 'Oprimus', password:'00ssd77d0' },
]
console.log(users[0].username, users[0].password);
console.log(users[1].username, users[1].password);
console.log(users[2].username, users[2].password);
console.log(users[3].username, users[3].password);
console.log(users[4].username, users[4].password);
console.log(users[5].username, users[5].password);
console.log(users[6].username, users[6].password);
console.log(users[7].username, users[7].password);
console.log(users[8].username, users[8].password);
console.log(users[9].username, users[9].password);