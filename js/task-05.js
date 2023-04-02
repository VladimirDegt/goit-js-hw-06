const refs = {
  input: document.querySelector('#name-input'),
  outputTextEl: document.querySelector('#name-output'),
};

const onInput = (event) => {
    refs.input.value.trim()  
  ? refs.outputTextEl.textContent = event.currentTarget.value.trim()
  : refs.outputTextEl.textContent = 'Anonymous';
};

refs.input.addEventListener('input', onInput);
