

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", hendlerTextValid);

function hendlerTextValid(evt) {
    const textLenght = evt.currentTarget.value.length;
    
    if (!textLenght)  {
        evt.currentTarget.classList.remove("valid", "invalid")
    } else if (textLenght === Number(evt.currentTarget.dataset.length)) {
        evt.currentTarget.classList.remove("invalid")
        evt.currentTarget.classList.add("valid");
    }
    else {
        evt.currentTarget.classList.add("invalid");
    }
  
}