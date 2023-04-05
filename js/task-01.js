const numCateroties = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${numCateroties.length}`);
numCateroties.forEach((el) =>
  console.log(`
  Category: ${el.querySelector("h2").textContent}
  Elements: ${el.querySelectorAll("ul li").length}
  `)
);

// const idCategories = document.querySelector("#categories");
// const allCategories = idCategories.querySelectorAll(".item").length;
// const category = idCategories.querySelectorAll("h2");
// const ulCategory = idCategories.querySelectorAll(".item ul ");

// console.log(`Number of categories: ${Number(allCategories)}

// Category: ${category[0].textContent}
// Elements: ${ulCategory[0].querySelectorAll("li").length}

// Category: ${category[1].textContent}
// Elements: ${ulCategory[1].querySelectorAll("li").length}

// Category: ${category[2].textContent}
// Elements: ${ulCategory[2].querySelectorAll("li").length}`);
