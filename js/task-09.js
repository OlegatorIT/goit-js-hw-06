function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.body;
const spanColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  console.log((spanColor.textContent = bodyColor.style.backgroundColor));
  console.log(bodyColor.style.backgroundColor);
});
