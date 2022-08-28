// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//

let url = new URL(location.href);
let id = url.searchParams.get('id');
let button = document.createElement('button');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(user =>{
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = 'User details'
        let ul = document.createElement('ul');
        let idf = document.createElement('li');
        idf.innerText =`id: ${user.id}`;
        let namef = document.createElement('li');
        namef.innerText = `name: ${user.name}`;
        let usernamef = document.createElement('li');
        usernamef.innerText = `username: ${user.username}`;
        let emailuser = document.createElement('li');
        emailuser.innerText = `email: ${user.email}`;
        let street = document.createElement('li');
        street.innerText = `street: ${user.address.street}`;
        let suite = document.createElement('li');
        suite.innerText = `suite: ${user.address.suite}`;
        let city = document.createElement('li');
        city.innerText = `city: ${user.address.city}`;
        let zipcode = document.createElement('li');
        zipcode.innerText = `zipcode: ${user.address.zipcode}`;
        let phone = document.createElement('li');
        phone.innerText =`phone: ${user.phone}`;
        let website = document.createElement('li');
        website.innerText = `website: ${user.website}`;
        let company = document.createElement('li');
        company.innerText = `company: ${user.company.name}`;
        ul.append(idf, namef, usernamef,emailuser, street, suite,city, zipcode,phone, website, company);
        button.innerText = 'All posts of user';
        div.append(h3, ul, button);
        document.body.appendChild(div);

    });

button.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then(posts => {
                    let divpost = document.createElement('div')
                    let h3post = document.createElement('h3');
                    h3post.innerText = 'All posts of user';
                    let olpost = document.createElement('ol');

                    for (const post of posts) {
                       let lipost = document.createElement('li');
                       lipost.innerText = post.title+'... ';
                       let aPost = document.createElement('a');
                       aPost.href =`post-details.html?id=${post.id}`;
                       let buttonPost = document.createElement('button');
                        buttonPost.innerText = 'Post details';
                        aPost.appendChild(buttonPost)
                       lipost.appendChild(aPost);
                       olpost.appendChild(lipost);
                    }
                    divpost.append(h3post,olpost);
                    document.body.appendChild(divpost);
                    button.disabled = true;

            });
}
