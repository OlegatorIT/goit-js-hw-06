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
  const listItems = value.map((el) => {
    const createLi = document.createElement("li");
    createLi.classList.add("item");
    createLi.textContent = `${el}`;
    return createLi;
  });
  list.append(...listItems);
  return list;
}

createEl(ingredients);
