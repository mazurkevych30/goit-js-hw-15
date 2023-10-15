
const form = document.querySelector(".login-form");

form.addEventListener("submit", hendlerSubmit);

function hendlerSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const data = {};

    if (email.value && password.value) {
        data.email = email.value;
        data.password = password.value;

        console.log(data);

        event.currentTarget.reset();
        return;
    }

    alert("Всі поля повинні бути заповнені!!")
}