const refs = {
  input: document.querySelector('#name-input'),
  outputTextEl: document.querySelector('#name-output'),
};

const onInput = (event) => {
    refs.input.value 
  ? refs.outputTextEl.textContent = event.currentTarget.value 
  : refs.outputTextEl.textContent = 'Anonymous';
};

refs.input.addEventListener('input', onInput);
