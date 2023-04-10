const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function addImg(value) {
  const list = document.querySelector(".gallery");
  const createImages = value
    .map(
      (el) =>
        `<li class="gallery-item"><img class="gallery-img"src = ${el.url} alt = ${el.alt} /></li>`
    )
    .join(" ");
  list.insertAdjacentHTML("beforeend", createImages);
  return list;
}

console.log(addImg(images));

// 3 завдання - так само, в мап робимо розмітку,
//   потім insertAdjacentHTML використовуємо 1 раз за циклом.
