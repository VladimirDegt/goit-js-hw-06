function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let string = '';

  for (let i = 0; i < amount; i += 1){
    string += `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
    width += 10;
    height += 10;
  }

    return string;
}

function destroyBoxes() {
  while (refs.itemsBox.children.length !== 0) {
    refs.itemsBox.firstElementChild.remove();
  }
}

const refs = {
  input: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  itemsBox: document.querySelector('#boxes'),
};

const onBtnCreateClick = (event) => {
  if (refs.input.value >= 1 && refs.input.value <= 100) {  
    if (refs.itemsBox.children.length !== 0) {
      destroyBoxes();
    };
    refs.itemsBox.insertAdjacentHTML("afterbegin", createBoxes(refs.input.value));
  } else {
    if (document.querySelector('#boxes p')) {
      document.querySelector('#boxes p').remove();
    }
    refs.itemsBox.insertAdjacentHTML('afterbegin', '<p style="color: red">Будь ласка введіть число від 1 до 100</p>');
  }
};
const onBtnDestroyClick = (event) => {
  destroyBoxes();
};

refs.btnCreate.addEventListener('click', onBtnCreateClick);
refs.btnDestroy.addEventListener('click', onBtnDestroyClick);