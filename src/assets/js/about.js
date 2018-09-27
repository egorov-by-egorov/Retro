import Data from '../data/data.skills.json';

const skills = document.querySelector('.skills');

function createSkills(data) {
  var skillsList = document.createElement('ul');
  skillsList.classList.add('skills__list');

  data.forEach(elem => {
    let skillsItem = document.createElement('li');
    skillsItem.classList.add('skills__item', 'skills--add');

    let article = document.createElement('article');
    article.classList.add('skills__article');

    let logo = document.createElement('div');
    logo.classList.add('skills__logo');

    var logoImg = document.createElement('img');
    logoImg.setAttribute('src', elem.imageURL);
    logoImg.classList.add('skills__img');

    let title = document.createElement('div');
    title.classList.add('skills__title');

    let subtitle = document.createElement('div');
    subtitle.classList.add('skills__subtitle');

    let desc = document.createElement('div');
    desc.classList.add('skills__desc');

    skillsList.appendChild(skillsItem);
    skillsItem.appendChild(article);
    article.appendChild(logo);
    logo.appendChild(logoImg);
    article.appendChild(title);
    article.appendChild(subtitle);
    article.appendChild(desc);

    title.textContent = elem.title;
    subtitle.textContent = elem.subtitle;
    desc.textContent = elem.desc;
  });
  skills.appendChild(skillsList);
}
createSkills(Data);
