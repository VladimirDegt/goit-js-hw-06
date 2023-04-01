const refs = {
  input: document.querySelector('#font-size-control'),
  textOutput: document.querySelector('#text'),
};

const onRangeInput = (event) => {
  refs.textOutput.style.fontSize = `${event.currentTarget.value}px`;
};

refs.input.addEventListener('input', onRangeInput);

