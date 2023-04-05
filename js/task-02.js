const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createEl(value) {
  const list = document.querySelector("#ingredients");
  value.map((el) => {
    const createLi = document.createElement("li");
    createLi.classList.add("item");
    createLi.textContent = `${el}`;
    list.append(createLi);
  });
  return list;
}

console.log(createEl(ingredients));
