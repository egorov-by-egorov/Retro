export const getSkills = () => {
  return import('../data/data.skills.json')
    .then(data => {
      createSkills(data.default);
    })
    .catch(err => console.log(err));
};

function createSkills(skills) {
  const skillsBox = document.querySelector('.skills');

  const skillsList = document.createElement('ul');
  skillsList.classList.add('skills__list');

  for (const skill of skills) {
    const skillItem = createSkill(skill);
    skillsList.appendChild(skillItem);
  }

  skillsBox.appendChild(skillsList);
}

function createSkill(skill) {
  let skillsItem = document.createElement('li');
  skillsItem.classList.add('skills__item', 'skills--add');

  let article = document.createElement('article');
  article.classList.add('skills__article');

  let logo = document.createElement('div');
  logo.classList.add('skills__logo');

  var logoImg = document.createElement('img');
  logoImg.setAttribute('src', skill.imageURL);
  logoImg.classList.add('skills__img');

  let title = document.createElement('div');
  title.classList.add('skills__title');
  title.textContent = skill.title;

  let subtitle = document.createElement('div');
  subtitle.classList.add('skills__subtitle');
  subtitle.textContent = skill.subtitle;

  let desc = document.createElement('div');
  desc.classList.add('skills__desc');
  desc.textContent = skill.desc;

  logo.appendChild(logoImg);

  article.appendChild(logo);
  article.appendChild(title);
  article.appendChild(subtitle);
  article.appendChild(desc);

  skillsItem.appendChild(article);

  return skillsItem;
}
