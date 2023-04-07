const checkLengthSymbols = document.querySelector("[data-length]");
const lengthSymbols = Number(checkLengthSymbols.dataset.length);

checkLengthSymbols.addEventListener("input", (event) => {
  const textLength = event.currentTarget.value.length;
  if (textLength >= lengthSymbols) {
    return checkLengthSymbols.classList.replace("invalid", "valid");
  }
  checkLengthSymbols.classList.add("invalid");
});
