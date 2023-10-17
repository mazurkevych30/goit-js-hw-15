function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  btn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
}

elements.btn.addEventListener("click", handlerChangeColor);

function handlerChangeColor() {
  const hexColor = getRandomHexColor();
  elements.color.textContent = hexColor;
  elements.body.style.backgroundColor = hexColor;
}