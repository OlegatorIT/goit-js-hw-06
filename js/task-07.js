const changeSizeText = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
changeSizeText.setAttribute("value", "16");
changeSizeText.addEventListener(
  "input",
  (event) => (textEl.style.fontSize = `${event.currentTarget.value}px`)
);
