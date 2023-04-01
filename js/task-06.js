const refs = {
  input: document.querySelector('#validation-input'),
};

const onInputBlur = (event) => {
  if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
    refs.input.classList.add('validation-input', 'valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('validation-input', 'invalid');
    refs.input.classList.remove('valid');
  }
};

refs.input.addEventListener('blur', onInputBlur);
