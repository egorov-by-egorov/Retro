const form = document.querySelector('.form');
const formElements = form.querySelectorAll('input, textarea');
document.addEventListener('click', () => {
  document.title = 'Retro|Portfolio';
});
// Validation form
document.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();
  for (const element of formElements) {
    element.oninvalid = function(e) {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        const errorText = e.target.title;
        e.target.setCustomValidity(errorText);
        document.title = 'Ошибка ввода';
      }
    };
    element.oninput = function(e) {
      e.target.setCustomValidity('');
      document.title = 'Retro|Portfolio';
      if (e.target.name === 'phone' && !e.target.validity.valid) {
        e.target.setCustomValidity('Пример: +7(999)999-9999');
      } else if (e.target.name === 'email' && !e.target.validity.valid) {
        e.target.setCustomValidity('Пример: petrov@mail.ru');
      } else if (e.target.name === 'name' && !e.target.validity.valid) {
        e.target.setCustomValidity('Пример: Иван');
      }
    };
  }
});
// Create FormData
const createFormData = elements => {
  const info = {};
  for (const element of elements) {
    info[element.name] = element.value;
  }
  return info;
};
// Submit button
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = createFormData(formElements);
  // console.log(formData);
  submitForm(formData);
});
// Fetch request
function submitForm(data) {
  fetch('../../server.php', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

// function networkFunc(res) {
//   if (res.status === 404) {
//     console.log(res);
//   } else if (res.status === 200) {
//     console.log('Статус 200. Все ок!=)');
//   }
// }

// function submitForm(data) {
//   fetch('/server.php', {
//     method: 'POST',
//     body: JSON.stringify(data)
//   })
//     .then(response => networkFunc(response))
//     .catch(err => console.log(err));
// }

// function submitForm(data) {
//   fetch('../../server.php', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       payload: data
//     })
//   });
//   .then(response => networkFunc(response))
//   .catch(err => console.log(err));
// }
