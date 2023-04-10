const numCateroties = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${numCateroties.length}`);
numCateroties.forEach((el) =>
  console.log(`
  Category: ${el.querySelector("h2").textContent}
  Elements: ${el.querySelectorAll("ul li").length}
  `)
);
