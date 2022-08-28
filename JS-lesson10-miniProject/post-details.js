//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then(posts => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = `Details of post number ${id}`;
        let divPost = document.createElement('div');
        for (const post in posts) {
            let p = document.createElement('p');
            p.innerText = `${post}: ${posts[post]}`;
            divPost.appendChild(p);
        }
        div.append(h3, divPost);
        document.body.appendChild(div);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then(comments => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = `All comments for this post`;
        let divComment = document.createElement('div');
        let x = 1;
        for (const comment of comments) {
            let pNumber = document.createElement('p');
            pNumber.innerText =x++;
            let pName = document.createElement('p');
            pName.innerText =`Name: ${comment.name}`;
            let pEmail = document.createElement('p');
            pEmail.innerText =`Email: ${comment.email}`;
            let pBody = document.createElement('p');
            pBody.innerText =`Body: ${comment.body}`;
            divComment.append(pNumber, pName, pEmail, pBody);
        }
        div.append(h3, divComment);
        document.body.appendChild(div);
    });
