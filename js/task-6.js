function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesCollection = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const userAmount = Number(userInput.value);
  if (userAmount >= 1 && userAmount <= 100) {
    createBoxes(userAmount);
    userInput.value = "";
  }
});
destroyBtn.addEventListener("click", () => {
  boxesCollection.innerHTML = "";
});

function createBoxes(amount) {
  boxesCollection.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesCollection.appendChild(box);
  }
}
