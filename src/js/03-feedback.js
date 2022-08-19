import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateTextareaInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
}

function onTextareaInput(event) {
    const message = event.target.value ;
  console.log(message);
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextareaInput() {
  const savedMassage = localStorage.getItem(STORAGE_KEY);
  if (savedMassage) {
    refs.textarea.value = savedMassage;
  }
}
