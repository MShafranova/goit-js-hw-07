const loginForm = document.querySelector("form.login-form");
loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {

  event.preventDefault();

  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  if (emailInput&&passwordInput) {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
  
  if (emailInput === "" || passwordInput === "") {
    alert("All form fields must be filled in");
  } else {
    const userInfo = {
        email: emailValue,
        password : passwordValue,
    };
    console.log(userInfo);
  }
  loginForm.reset();
}
}
