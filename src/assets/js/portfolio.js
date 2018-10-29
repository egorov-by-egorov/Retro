// // Глобальные переменные.
// const filterBox = document.querySelector('.filter__box');
// const portfolioMenu = document.querySelector('.filter__menu');
// const filterList = document.createElement('ul');
// filterList.classList.add('filter__list');
// const portfolioBtn = document.querySelector('.filter__btn-add');

// // Получаем JSON.
// export const getFilter = () => {
//   return import('../data/data.filter.json')
//     .then(data => {
//       createFilter(data.default);
//     })
//     .catch(err => console.log(err));
// };

// // Функция по фильтру элементов
// // function createFilterItems(params) {}

// // Функция по созданию базовых элементов
// function createBasicView(data) {
//   const basicView = data.splice(0, 8);
//   for (const item of basicView) {
//     const filterItem = createElemFilter(item);
//     filterList.appendChild(filterItem);
//   }
// }

// // Функция по созданию дполнительных 8 элементов и добавлению их к базовым элементам.
// function createAddView(data) {
//   const addView = data.splice(8, 16);
//   for (const item of addView) {
//     const filterItem = createElemFilter(item);
//     filterList.appendChild(filterItem);
//   }
// }

// // Функция по созданию элементов.
// function createElemFilter(item) {
//   const filterItem = document.createElement('li');
//   filterItem.setAttribute('data-tag', item.tags);
//   filterItem.classList.add('filter__item');
//   const filterArticle = document.createElement('article');
//   filterArticle.classList.add('filter__article');

//   const filterWindow = document.createElement('div');
//   filterWindow.classList.add('filter__window');

//   const filterImg = document.createElement('img');
//   filterImg.setAttribute('src', item.imageURL);
//   filterImg.classList.add('filter__img');

//   const filterlogo = document.createElement('div');
//   filterlogo.classList.add('filter__logo');

//   const filterlogoImg = document.createElement('img');
//   filterlogoImg.setAttribute('src', item.iconURL);
//   filterlogoImg.classList.add('filter__logo-img');

//   const filterTitle = document.createElement('div');
//   filterTitle.classList.add('filter__title');

//   // Добавляем элементы
//   filterItem.appendChild(filterArticle);
//   filterArticle.appendChild(filterWindow);
//   filterWindow.appendChild(filterImg);
//   filterArticle.appendChild(filterlogo);
//   filterlogo.appendChild(filterlogoImg);
//   filterArticle.appendChild(filterTitle);
//   filterTitle.textContent = item.title;

//   return filterItem;
// }

// // Главная функция по созданию элементов.
// function createFilter(data) {
//   basicView = data.splice(0, 8);
//   // Вызываем функцию для отрисовки базовых элементов.
//   createBasicView(data);
//   // Событие на кнопку для добавление элементов.
//   portfolioBtn.addEventListener('click', e => {
//     if (filterList.childElementCount === 8) {
//       portfolioBtn.style.display = 'none';
//       // Вызываем функцию для отрисовки дополнительных элементов.

//       createAddView(data);
//     }
//   });
//   // Событие на кнопку меню.
//   portfolioMenu.addEventListener('click', e => {
//     // const currentTag = e.target.dataset.tag;
//     // createFilterItems(fullView);
//   });
//   // Добавляем готовый List к блоку
//   filterBox.appendChild(filterList);
// }

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
