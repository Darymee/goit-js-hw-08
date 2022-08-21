import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

refreshTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

// Записывает значение инпутов в LocalStorage

function onInput(e) {
  // console.log(e.target.name);
  // console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  // console.log(formData);
  const formDatatoStringify = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDatatoStringify);
}

//  Чистит LocalStorage и инпуты после события submit

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Лёша заполни все поля, быстро!');
  }

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// Обновляет значение инпутов при перезагрузке страницы

function refreshTextarea() {
  const savedInputs = localStorage.getItem(STORAGE_KEY);
  const savedInputsToParse = JSON.parse(savedInputs);

  if (savedInputsToParse) {
    console.log(savedInputsToParse);
    refs.form.email.value = savedInputsToParse.email
      ? savedInputsToParse.email
      : '';
    refs.form.message.value = savedInputsToParse.message
      ? savedInputsToParse.message
      : '';
  }
}

// let savedMessage = localStorage.getItem(STORAGE_KEY);
// let savedMessageToParse = JSON.parse(savedMessage);
// console.log(savedMessageToParse);
// console.log(savedMessageToParse.email);
// console.log(savedMessageToParse.message);

// console.log(formData.email);

//

console.log(refs.form.elements);
