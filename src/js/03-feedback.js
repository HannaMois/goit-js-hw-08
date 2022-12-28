import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput() {
    const formData = JSON.stringify({email: refs.email.value, message: refs.message.value})
    localStorage.setItem(LOCALSTORAGE_KEY, formData);
}

function onFormSubmit(evt) {
    evt.preventDefault();

    if (evt.target.email.value === '' ||
        evt.target.message.value === '') {
            alert('Заповніть поля форми!');
            return;
    }
        console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
        evt.currentTarget.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY);
}

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
     if (data) {
      email.value = data.email;
      message.value = data.message;
    }
}