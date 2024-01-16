function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", changeColorRandom);
function changeColorRandom() {
  const randomColor = getRandomHexColor();
  const spanColor = document.querySelector("p span.color");
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}