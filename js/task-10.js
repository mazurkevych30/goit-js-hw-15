function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

const [ number, create, destroy ] = controls.children;

create.addEventListener("click", hendlerBoxes);
destroy.addEventListener("click", hendlerBoxes);

function hendlerBoxes(evt) {
  for (const attr of evt.currentTarget.attributes) {
    switch (attr.name) {
      case "data-create":
        createBoxes(number.value);
        break;
      case "data-destroy":
        destroyBoxes();
    }
  }
}

function destroyBoxes() {
  const child = boxes.children;

  for (let i = child.length-1; i >= 0; i -= 1){
    child[i].remove();
  }
}

function createBoxes(amount) {
  destroyBoxes();
  const colors = [];
  let height = 30;
  let width = 30;

  for (let i = 0; i < amount; i += 1){
    colors.push(getRandomHexColor());
  }

  const markup = colors.map(color => {
    const div = document.createElement("div");

    div.style.height = `${height}px`;
    div.style.width = `${width}px`;
    div.style.backgroundColor = color;

    height += 10;
    width += 10;

    return div;
  });

  boxes.append(...markup);  
}