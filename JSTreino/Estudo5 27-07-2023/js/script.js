const paragrafos = document.querySelector(".primeira-div");
let ps = paragrafos.querySelectorAll("p");

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

console.log(backgroundColorBody);

for (let i of ps) {
  i.style.backgroundColor = backgroundColorBody;
  i.style.color = "#FFFFFF";
}
