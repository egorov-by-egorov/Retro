export function getBlogPosts() {
  Promise.all([
    getPosts()
      .then(response => response.json())
      .then(arr => arr.splice(0, 3)),
    getPhotos()
      .then(response => response.json())
      .then(arr => arr.splice(0, 3))
  ])
    .then(([posts, photos]) => splitArraies(posts, photos))
    .then(posts => {
      showPosts(posts);
    })
    .catch(err => console.log(err));
}

function splitArraies(posts, photos) {
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    post.url = photos[index].url;
  }
  return posts;
}

const getPhotos = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos');
};

const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts');
};

function showPosts(posts) {
  const blogBtn = document.querySelector('.article__btn-add');
  blogBtn.addEventListener('click', () => {
    const articleBox = document.querySelector('.article');
    const list = document.querySelector('.article__list');

    for (const post of posts) {
      const article = createPost(post);
      list.appendChild(article);
    }

    articleBox.appendChild(list);
  });
}

function createPost(post) {
  const li = document.createElement('li');
  li.classList.add('article__item');

  const article = document.createElement('article');
  article.classList.add('article__article');

  const articleWindow = document.createElement('div');
  articleWindow.classList.add('article__window');

  const img = document.createElement('img');
  img.classList.add('article__img');
  img.setAttribute('src', post.url);
  img.setAttribute('alt', 'Article Photo');

  const articleDescBox = document.createElement('div');
  articleDescBox.classList.add('article__desc-box');

  const title = document.createElement('div');
  title.classList.add('article__title');
  title.textContent = post.title;

  const breadcrumbs = document.createElement('div');
  breadcrumbs.classList.add('article__breadcrumbs');

  const date = document.createElement('time');
  date.classList.add('article__data');
  date.setAttribute('date', '07.28.2014');
  date.textContent = post.id;

  const user = document.createElement('div');
  user.classList.add('article__user');
  user.textContent = post.id;

  const theme = document.createElement('div');
  theme.classList.add('article__theme');

  const answer = document.createElement('button');
  answer.classList.add('article__answer');
  answer.setAttribute('type', 'button');
  answer.textContent = post.id + ' ' + 'response';

  const line = document.createElement('div');
  line.classList.add('article__line');

  const desc = document.createElement('div');
  desc.classList.add('article__desc');
  desc.textContent = post.body;

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
  li.appendChild(article);

  return li;
}
