const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будьласка заповніть всі поля !");
  }

  const newUser = {
    Login: `${email.value}`,
    Password: `${password.value}`,
  };

  console.log(newUser);
  event.currentTarget.reset();
}
