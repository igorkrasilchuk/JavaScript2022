// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
            let divMain = document.createElement('div')
            divMain.classList.add('divMain');
            let divMainUsers = document.createElement('div')
            divMainUsers.classList.add('divMainUsers');
            let h2 = document.createElement('h2');
            h2.innerText = 'List of users';
            document.body.appendChild(divMain);
            divMain.append(h2,divMainUsers);
            let userIdDiv = document.createElement('div');
            userIdDiv.classList.add('userDiv');
            let userNameDiv = document.createElement('div');
            userNameDiv.classList.add('userNameDiv');
            let userDivA = document.createElement('div');
            userDivA.classList.add('userDivA');
            for (const user of users) {
                  let divUser = document.createElement('div');
                  divUser.classList.add('user');
                  divUser.innerText = user.id;
                  userIdDiv.appendChild(divUser);
                  let divUserName = document.createElement('div');
                  divUserName.classList.add('user');
                  divUserName.innerText = user.name;
                  userNameDiv.appendChild(divUserName);
                  let userA = document.createElement('a');
                  userA.href =`user-details.html?id=${user.id}`;
                  let button = document.createElement('button');
                  button.innerText = 'More information';
                  userA.appendChild(button);
                  let divUserA = document.createElement('div');
                  divUserA.classList.add('userA');
                  divUserA.appendChild(userA)
                  userDivA.appendChild(divUserA);
            }
            divMainUsers.append(userIdDiv, userNameDiv, userDivA);
    });


// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)