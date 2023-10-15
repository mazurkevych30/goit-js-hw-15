function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  btn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  widget: document.querySelector(".widget"),
}

elements.btn.addEventListener("click", handlerChangeColor);

function handlerChangeColor() {
  const hexColor = getRandomHexColor();
  elements.color.textContent = hexColor;
  elements.widget.style.backgroundColor = hexColor;
}