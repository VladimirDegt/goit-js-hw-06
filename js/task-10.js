// ----------------функция нахождения рендомного цвета -----------------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ----------------функция удаления дивов -----------------------
function destroyBoxes() {
  while (refs.itemsBox.children.length !== 0) {
    refs.itemsBox.firstElementChild.remove();
  }
}

// ----------------функция создания дивов -----------------------
function createBoxes(amount) {
  const arrItem = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1){
    const itemEl = document.createElement('div');
    itemEl.style.width = `${width}px`;
    itemEl.style.height = `${height}px`;
    itemEl.style.backgroundColor = getRandomHexColor();
    arrItem.push(itemEl);
    width += 10;
    height += 10;
  }
  return arrItem;
}

const refs = {
  input: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  itemsBox: document.querySelector('#boxes'),
};

const onInput = (event) => {
  destroyBoxes();
  refs.itemsBox.append(...createBoxes(event.currentTarget.value));
};
const onBtnCreateClick = (event) => {
  refs.input.value = '';
};
const onBtnDestroyClick = (event) => {
  destroyBoxes();
};

refs.input.addEventListener('input', onInput);
refs.btnCreate.addEventListener('click', onBtnCreateClick);
refs.btnDestroy.addEventListener('click', onBtnDestroyClick);




