import DataFilter from '../data/data.filter.json';
// Глобальные переменные
const portfolioMenu = document.querySelector('.filter__menu');
const portfolio = document.querySelector('.filter__box');
const portfolioBtn = document.querySelector('.filter__btn-add');

// Функция создания структуры на базе json
function createFilter(data) {
  // Создание элемента
  var filterList = document.createElement('ul');
  filterList.classList.add('filter__list');

  // Перебор JSON и создание структуры относительно количества объектов в json
  data.forEach((elemFilter, index) => {
    // Событие на кнопку тэга
    portfolioMenu.addEventListener('click', e => {
      filterItem.classList.remove('vshidden');
      let liTag = filterItem.getAttribute('data-tag');
      let arrayTag = liTag.split(',');
      var currentTag = e.target.dataset.tag;
      filterItem.style.display = 'none';
      portfolioBtn.innerHTML = 'back';
      arrayTag.forEach(item => {
        if (currentTag === item) {
          filterItem.style.display = 'block';
        }
      });
    });
    let filterItem = document.createElement('li');
    filterItem.setAttribute('data-tag', elemFilter.tags);
    filterItem.classList.add('filter__item');
    // Условие на отображение первых восьми объектов
    if (index > 7) {
      filterItem.classList.add('vshidden');
    }
    // Создаем элементы
    let filterArticle = document.createElement('article');
    filterArticle.classList.add('filter__article');

    let filterWindow = document.createElement('div');
    filterWindow.classList.add('filter__window');

    var filterImg = document.createElement('img');
    filterImg.setAttribute('src', elemFilter.imageURL);
    filterImg.classList.add('filter__img');

    let filterlogo = document.createElement('div');
    filterlogo.classList.add('filter__logo');

    var filterlogoImg = document.createElement('img');
    filterlogoImg.setAttribute('src', elemFilter.iconURL);
    filterlogoImg.classList.add('filter__logo-img');

    let filterTitle = document.createElement('div');
    filterTitle.classList.add('filter__title');

    // Добавляем элементы
    filterList.appendChild(filterItem);
    filterItem.appendChild(filterArticle);
    filterArticle.appendChild(filterWindow);
    filterWindow.appendChild(filterImg);
    filterArticle.appendChild(filterlogo);
    filterlogo.appendChild(filterlogoImg);
    filterArticle.appendChild(filterTitle);
    // Добавляем содержимое в Title
    filterTitle.textContent = elemFilter.title;
    // Добавляем 8 новых объектов
    portfolioBtn.addEventListener('click', () => {
      portfolioBtn.innerHTML = 'browse all';
      filterItem.style.display = 'block';
      if (index > 7 && index <= 16) {
        filterItem.classList.toggle('vshidden');
      }
    });
  });
  // Добавляем filter__list к главному блоку
  portfolio.appendChild(filterList);
}
createFilter(DataFilter);
