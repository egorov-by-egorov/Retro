const user1 = 'https://jsonplaceholder.typicode.com/users/1/posts';
const user2 = 'https://jsonplaceholder.typicode.com/users/2/posts';
const user3 = 'https://jsonplaceholder.typicode.com/users/3/posts';
// const photoURL = 'https://jsonplaceholder.typicode.com/photos';
function get(user) {
  fetch(user)
    .then(response => response.json())
    .then(posts => {
      showPosts(posts);
    })
    .catch(err => console.log(err));
}

// function getPhoto(photos) {
//   fetch(photos)
//     .then(response => response.json())
//     .then(photos => showPosts(photos))
//     .catch(err => console.log(err));
// }

function showPosts(posts) {
  posts.forEach((post, index) => {
    if (index >= 0 && index < 1) {
      createArticle(post);
    }
  });
}
const list = document.querySelector('.article__list');

function createArticle(obj) {
  const li = document.createElement('li');
  li.classList.add('article__item');

  const article = document.createElement('article');
  article.classList.add('article__article');

  const articleWindow = document.createElement('div');
  articleWindow.classList.add('article__window');

  const img = document.createElement('img');
  img.classList.add('article__img');
  img.setAttribute('src', '');
  img.setAttribute('alt', 'Article Photo');

  const articleDescBox = document.createElement('div');
  articleDescBox.classList.add('article__desc-box');

  const title = document.createElement('div');
  title.classList.add('article__title');
  title.textContent = obj.title;

  const breadcrumbs = document.createElement('div');
  breadcrumbs.classList.add('article__breadcrumbs');

  const date = document.createElement('time');
  date.classList.add('article__data');
  date.setAttribute('date', '07.28.2014');
  date.textContent = obj.id;

  const user = document.createElement('div');
  user.classList.add('article__user');
  user.textContent = obj.id;

  const theme = document.createElement('div');
  theme.classList.add('article__theme');

  const answer = document.createElement('button');
  answer.classList.add('article__answer');
  answer.setAttribute('type', 'button');
  answer.textContent = obj.id + ' ' + 'response';

  const line = document.createElement('div');
  line.classList.add('article__line');

  const desc = document.createElement('div');
  desc.classList.add('article__desc');
  desc.textContent = obj.body;

  list.appendChild(li);
  li.appendChild(article);
  articleWindow.appendChild(img);
  articleDescBox.appendChild(title);
  breadcrumbs.appendChild(date);
  breadcrumbs.appendChild(user);
  breadcrumbs.appendChild(theme);
  breadcrumbs.appendChild(answer);
  articleDescBox.appendChild(breadcrumbs);
  articleDescBox.appendChild(line);
  articleDescBox.appendChild(desc);

  article.appendChild(articleWindow);
  article.appendChild(articleDescBox);
}

const addBtn = document.querySelector('.article__btn-add');

addBtn.addEventListener('click', e => {
  get(user1);
  get(user2);
  get(user3);
  // getPhoto(photoURL);
  addBtn.style.display = 'none';
});
