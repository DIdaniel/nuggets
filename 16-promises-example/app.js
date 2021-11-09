//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
    .then(() => addColor(1500, ".second", "blue"))
    .then(() => addColor(2000, ".third", "green"))
    .catch((err) => console.log(err));
});

function addColor(time, selector, color) {
  const elem = document.querySelector(selector);

  return new Promise((res, rej) => {
    if (elem) {
      setTimeout(() => {
        elem.style.color = color;
        res();
      }, time);
    } else {
      rej(`There is not elem : ${selector}`);
    }
  });
}
