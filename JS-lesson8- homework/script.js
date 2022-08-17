// TASK 1- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id_user, name, surname, email, phone){
//     this.id_user = id_user;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let mas = new User();
//   mas =  [
//         {id_user:7, name:'Ivanko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:3, name:'Petrus', surname:'Petrov', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:10, name:'Marichka', surname:'Ivanova', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:5, name:'Ivanka', surname:'Petrova', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:2, name:'Ganusja', surname:'Ivanova', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:4, name:'Semenko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:9, name:'Mykolko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:8, name:'Irynka', surname:'Ivanova', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:1, name:'Andrijko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123'},
//         {id_user:6, name:'Ivan', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123'}
//     ]
// console.log(mas);
//

// TASK 2- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let masFilter = mas.filter(value => value.id_user % 2 ===0 );
// console.log(masFilter);

// TASK 3- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let masSort = mas.sort((a,b) => a.id_user - b.id_user )
// console.log(masSort);

// TASK 4- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
// let arrClient = [
//         {id:7, name:'Ivanko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123',order:['tomato','carrot', 'lemon']},
//         {id:3, name:'Petrus', surname:'Petrov', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['potato','lemon']},
//         {id:10, name:'Marichka', surname:'Ivanova', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['potato','tomato','carrot', 'lemon']},
//         {id:5, name:'Ivanka', surname:'Petrova', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['lemon']},
//         {id:2, name:'Ganusja', surname:'Ivanova', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['watermelon','melon','tomato','carrot', 'lemon']},
//         {id:4, name:'Semenko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['potato','tomato','carrot', 'lemon', 'cucumber','lime']},
//         {id:9, name:'Mykolko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['potato','tomato','carrot', 'lemon', 'apple', 'plum', 'peach']},
//         {id:8, name:'Irynka', surname:'Ivanova', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['potato','carrot', 'lemon']},
//         {id:1, name:'Andrijko', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['potato','tomato','carrot', 'lemon', 'apple', 'plum']},
//         {id:6, name:'Ivan', surname:'Ivanov', email:'ivan.ivanov@gmail.com',phone:'567324123', order:['potato','tomato','carrot', 'lemon', 'pineapple']}
// ];
// console.log('NORMAL');
// for (const arrClientElement of arrClient) {
//     console.log(arrClientElement);
// }

//TASK 5  - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let  arrClientSort = arrClient.sort((a,b)=>a.order.length - b.order.length);
// console.log('SORT');
// for (const arrClientSortElement of arrClientSort) {
//     console.log(arrClientSortElement);
// }
//
//
// TASK 6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxspeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.volume = volume;
    this.maxspeed = maxspeed;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {
        for (const carElement of Car) {
            console.log(carElement);

        }
    }
    this.increaseMaxSpeed = function (newSpeed) {

    }
    this.changeYear = function (newValue){

    }
    this.addDriver = function (driver){

    }
}
let auto = new Car();
auto = [
    {model:'Golf', producer:'VW', year:2010, maxspeed:180, volume:2.0},
    {model:'A4', producer:'Audi', year:2011, maxspeed:280, volume:2.5},
    {model:'Passat', producer:'VW', year:2005, maxspeed:200, volume:2.2},
    {model:'6', producer:'Mazda', year:2008, maxspeed:280, volume:2.0},
    {model:'3', producer:'Mazda', year:2014, maxspeed:180, volume:1.6}

]
auto.info()
auto.drive();
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
