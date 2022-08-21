//  TASK 1   - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     div.className = 'simpson';
//     let img = document.createElement('img');
//     img.src = simpson.photo
//     let h2 = document.createElement('h2');
//     h2.innerText = `${simpson.name} ${simpson.surname}`;
//     let h4 = document.createElement('h4');
//     h4.innerText = `Age: ${simpson.age}`;
//     let p = document.createElement('p');
//     p.innerText = simpson.info;
//     div.append(img,h2,h4,p);
// }

// TASK 2 ---- Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//
// for (const coursesArrayElement of coursesArray) {
//     let divMain = document.createElement('div');
//     document.body.appendChild(divMain);
//     let divTitle = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = coursesArrayElement.title;
//     divTitle.appendChild(h2);
//     let divDuration = document.createElement('div')
//     divDuration.className = 'duration';
//     let divMonth = document.createElement('div');
//     divMonth.className = 'monthDuration';
//     let h3Month = document.createElement('h3');
//     h3Month.innerText = coursesArrayElement.monthDuration;
//     divMonth.appendChild(h3Month);
//     let divHour = document.createElement('div');
//     let h3Hour = document.createElement('h3');
//     h3Hour.innerText = coursesArrayElement.hourDuration;
//     divHour.appendChild(h3Hour);
//     divDuration.append(divMonth,divHour);
//     let divListModules = document.createElement('div');
//     let ulModules = document.createElement('ul');
//     for (const divListModule of coursesArrayElement.modules) {
//         let liModul = document.createElement('li');
//         liModul.innerText = divListModule;
//         ulModules.appendChild(liModul);
//     }
//     divListModules.appendChild(ulModules);
//     divMain.append(divTitle,divDuration,divListModules);
// }

// TASK 3    - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let blok = document.createElement('div');
// blok.classList.add('wrap');
// blok.classList.add('collapse');
// blok.classList.add('alpha');
// blok.classList.add('beta');
// blok.style.background = 'green';
// blok.style.color= 'yellow';
// blok.style.fontSize = '26px';
// document.body.appendChild(blok);
// blok.innerText = 'JavaScript';
// document.body.appendChild(blok.cloneNode(true));

// TASK 4 !!! Для цього завдання код у файлі templateScript.js- Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

// TASK 5 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let divMain = document.createElement('div');
// document.body.appendChild(divMain);
// for (const element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     let h2Element = document.createElement('h2');
//     h2Element.innerText = `${element.title} ----- ${element.monthDuration}`;
//     divElement.appendChild(h2Element);
//     divMain.appendChild(divElement);
// }


//TASK 6 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// let divMain = document.createElement('div');
// document.body.appendChild(divMain);
// for (const element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     let h1Element = document.createElement('h1');
//     h1Element.classList.add('heading');
//     h1Element.innerText = `${element.title}`;
//     let pElement = document.createElement('p');
//     pElement.classList.add('description');
//     pElement.innerText = `${element.monthDuration}`;
//     divElement.append(h1Element,pElement);
//     divMain.appendChild(divElement);
//  }
//
// -----------


//  TASK 7  - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".
// let h1 = document.createElement('h1');
//     h1.id = 'text';
//     h1.innerText = 'JavaScript';
//     document.body.appendChild(h1);
// let button= document.createElement('button');
//     button.innerText = 'Click Me';
//     document.body.appendChild(button);
// let foundText = document.getElementById('text');
//     button.onclick = function (){
//         h1.hidden=true;
//     }
//

//   TASK 8  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
//     на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
// let f1 = document.createElement('form');
//     f1.name = 'f1';
//     document.body.appendChild(f1);
// let inputText = document.createElement('input');
//     inputText.type = 'number';
//     inputText.name = 'age';
//     inputText.placeholder = 'Enter your age';
// let button = document.createElement('button');
//     button.name = 'button';
//     button.innerText = 'Click Me';
// let br = document.createElement('br')  ;
// let cloneBr = br.cloneNode(true);
//     f1.append(inputText,br, cloneBr, button);
//     button.onclick = function () {
//         if (inputText.value < 18){
//             alert('You are under 18');
//         }
//         else if (inputText.value > 18){
//             alert('You are over 18');
//         }
//         else {
//             alert('You are 18');
//         }
//     }
//

//TASK 9 *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let f1 = document.createElement('form');
    f1.name = 'f1';
    document.body.appendChild(f1);
let inputRows = document.createElement('input');
    inputRows.type = 'number';
    inputRows.name = 'row';
    inputRows.placeholder = 'Enter the number of rows';
let inputCols = document.createElement('input');
    inputCols.type = 'number';
    inputCols.name = 'col';
    inputCols.placeholder = 'Enter the number of cols';
let inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.name = 'text';
    inputText.placeholder = 'Enter the contents of the cells';
let button = document.createElement('button');
    button.name = 'button';
    button.innerText = 'Build a table';
    f1.append(inputRows, inputCols, inputText, button);
    button.onclick = function (e){
let table = document.createElement('table');
    for (let i = 0; i < inputRows.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < inputCols.value; j++) {
            let td = document.createElement('td');
            td.innerText = inputText.value;
            tr.appendChild(td);
        }
    }
    document.body.appendChild(table);
 e.preventDefault();
}


