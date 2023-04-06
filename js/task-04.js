let counterValue = 0;

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const startValue = document.querySelector("#value");

btnPlus.addEventListener("click", plus);
btnMinus.addEventListener("click", minus);

function plus() {
  startValue.textContent = counterValue += 1;
}

function minus() {
  startValue.textContent = counterValue -= 1;
}
