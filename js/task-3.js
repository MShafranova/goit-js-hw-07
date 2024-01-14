const userInput = document.querySelector("input");
const outputElem = document.querySelector("span");

userInput.addEventListener("input", (event) => {
  const currentValue = event.currentTarget.value.trim();
  if (currentValue !== "") {
    outputElem.textContent = currentValue;
  }
});
