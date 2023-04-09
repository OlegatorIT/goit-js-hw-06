function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');
const divEl = document.querySelector("#boxes");
const btnCreateEl = document.querySelector("[data-create]");
const btnDistroyEl = document.querySelector("[data-destroy]");

btnDistroyEl.addEventListener("click", () => {
  const newBoxs = document.querySelectorAll("div [style]");
  newBoxs.forEach((el) => console.log(el.remove()));
});

btnCreateEl.addEventListener("click", () => {
  if (inputEl.value > 100) {
    return alert("max value 100");
  }
  if (inputEl.value <= 0) {
    return alert("min value 1");
  }
  createBoxes(inputEl.value);
  inputEl.value = "";
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const createdivEl = document.createElement("div");
    createdivEl.style.width = `${size}px`;
    createdivEl.style.height = `${size}px`;
    createdivEl.style.backgroundColor = getRandomHexColor();
    divEl.append(createdivEl);
    size += 10;
  }
}
