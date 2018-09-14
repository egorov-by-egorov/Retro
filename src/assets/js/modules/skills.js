const skills = document.querySelector('.skills');
const skillsBtn = document.querySelector('.skills__btn-add');
const skillsItem = document.querySelectorAll('.skills--add');

skills.addEventListener('click', e => {
  let target = e.target;
  if (target.className === 'skills__btn-add') {
    skillsItem.forEach(item => {
      item.classList.toggle('skills__item--hidden');
      skillsBtn.style.display = 'none';
    });
  }
});
