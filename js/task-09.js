function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnChangeColor: document.querySelector('button.change-color'),
  textColor: document.querySelector('span.color'),
};

const onBtnClick = (event) => {
  const randomColor = getRandomHexColor();
  
  document.body.style.backgroundColor = `${randomColor}`;
  refs.textColor.textContent = `${randomColor}`;
};

refs.btnChangeColor.addEventListener('click', onBtnClick);
