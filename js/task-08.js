const refs = {
  form: document.querySelector('.login-form'),
};

const onFormSubmit = (event) => {
  const element = event.currentTarget.elements;

  event.preventDefault();

  if (!element.email.value || !element.password.value) {
    alert('Будь ласка заповніть усі поля!');
  } else {
    alert('Дані завантажені!');

    const formData = new FormData(event.currentTarget);
    formData.forEach ( (value, name) => {
      console.log(`${name}: ${value}`);
    });

    event.currentTarget.reset();
  }
};

const onEscClick = (event) => {
  if (event.code === 'Escape') {
    document.querySelector('.login-form [name="email"]').value = "";
    document.querySelector('.login-form [name="password"]').value = "";
  }
};

refs.form.addEventListener('submit', onFormSubmit);
window.addEventListener('keyup', onEscClick);



