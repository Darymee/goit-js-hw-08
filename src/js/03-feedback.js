import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateTextareaInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  
  localStorage.getItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const message = event.target.value;
  formData[event.target.name] = message;

  toStringifyFormData(formData);
}

function onInput(event) {
  const email = event.target.value;
  formData[event.target.name] = email;

  toStringifyFormData(formData);
}

function populateTextareaInput() {
  let savedMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMassage) {
    refs.input.value = savedMassage.email;
    refs.textarea.value = savedMassage.message;
  }
}

function toStringifyFormData() {
  const formDataStr = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataStr);
}
