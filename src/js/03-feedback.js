import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateTextareaInput();

refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.getItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = event.target.value;
  formData[event.target.name] = message;
  console.log(message);
  const formDataStr = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataStr);
}

function populateTextareaInput() {
  let savedMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMassage) {
    refs.input.value = savedMassage.email;
    refs.textarea.value = savedMassage.message;
  }
}
