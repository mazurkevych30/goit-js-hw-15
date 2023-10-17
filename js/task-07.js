
const elements = {
    fontSize: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
}

elements.fontSize.addEventListener("input", handlerChangeSize)
elements.text.style.fontSize = `${elements.fontSize.value}px`;

function handlerChangeSize(evt) {
    elements.text.style.fontSize = `${evt.currentTarget.value}px`
}