const submit = document.querySelector('.form__submit');

// let newPost = {
//   title: 'hello world',
//   body: 'Some Text'
// };

submit.addEventListener('click', e => {
  e.preventDefault();
  let formData = e.target.formAction;

  fetch(formData, {
    method: 'post',
    body: JSON.stringify(/* newPost */)
  })
    .then(response => response.json())
    .then(data => console.log(data));
});
