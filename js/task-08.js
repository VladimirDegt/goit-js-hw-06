const refs = {
  form: document.querySelector('.login-form'),
};

const onFormSubmit = (event) => {
  const element = event.currentTarget.elements;

  event.preventDefault();

  if (!element.email.value.trim() || !element.password.value.trim()) {
    if (document.querySelector('form p')) {
      document.querySelector('form p').remove();
    }
    document.querySelector('form').insertAdjacentHTML('afterbegin', '<p style="color: red">Будь ласка заповніть усі поля!</p>');
  } else {
    if (document.querySelector('form p')) {
      document.querySelector('form p').remove();
    }
    document.querySelector('form').insertAdjacentHTML('afterbegin', '<p style="color: blue">Дані відправлені</p>');

    const dataObject = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach ( (value, name) => {
      dataObject[name] = value.trim();
    });
    console.log(dataObject);

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



