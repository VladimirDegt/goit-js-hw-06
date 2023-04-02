const refs = {
  input: document.querySelector('#validation-input'),
};

const onInputBlur = (event) => {
  if (event.currentTarget.value.trim().length === Number(refs.input.dataset.length)) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
  }
};

refs.input.addEventListener('blur', onInputBlur);
