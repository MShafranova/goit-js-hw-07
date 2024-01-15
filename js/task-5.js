function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
colorBtn.addEventListener("click", changeColorRandom);
function changeColorRandom() {
  const randomColor = getRandomHexColor();
  const spanColor = document.querySelector("p span.color");
  colorBtn.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
