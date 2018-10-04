const form = document.querySelector('.form');
const submitBtn = document.querySelector('.form__submit');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const formData = getFormData(form);
  submitForm(formData);
});

function getFormData(form) {
  const info = {};
  const formElements = form.querySelectorAll('input, textarea');
  for (const element of formElements) {
    info[element.name] = element.value;
  }
  return info;
}
function networkFunc(res) {
  if (res.status === 404) {
    console.log(res);
  }
}
function submitForm(data) {
  fetch('../php/form_introduction.php', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => networkFunc(response))
    .catch(err => console.log(err));
}
