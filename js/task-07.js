
const elements = {
    fontSize: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
}

elements.fontSize.addEventListener("input", handlerChangeSize)

function handlerChangeSize(evt) {
    elements.text.style.fontSize = `${evt.currentTarget.value}px`
}