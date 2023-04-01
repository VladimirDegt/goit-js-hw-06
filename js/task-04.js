const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('#value'),
};

let counterValue = 0;

const onBtnDecrementClick = (event) => {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
};
const onBtnIncrementClick = (event) => {
    counterValue += 1;
    refs.counter.textContent = counterValue;
};

refs.btnDecrement.addEventListener('click', onBtnDecrementClick);
refs.btnIncrement.addEventListener('click', onBtnIncrementClick);
