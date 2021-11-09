const udemy = "udemy";

//console.log(Array.from(udemy));

const text = document.querySelectorAll(".text");
const newText = Array.from(text).find((item) => item.textContent === "person");
console.log(newText);
// console.log(Array.from(text));

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

console.log(pages);
