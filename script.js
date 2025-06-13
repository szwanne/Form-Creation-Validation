//Declaring the variables for DOM Manipulation

document.addEventListener("DOMContentLoaded", (events) => {
  log.textContent += "DOMContentLoaded\n";
});

const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Validate the username

  const usernameInput = document.getElementById("username");
  const usernameInputTrim = usernameInput.value.trim();
  const usernameError = document.getElementById("usernameError");
  if (usernameInputTrim.value.length < 6) {
    usernameError.textContent = "Minimum characters should be greater 6";
    return;
  } else {
    usernameError.textContent = "";
  }

  //Validate the email

  const emailInput = document.getElementById("email");
  const emailInputTrim = emailInput.value.trim();
  const emailError = document.getElementById("emailError");
  if (
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInputTrim.value)
  ) {
    emailError.textContent = "Please enter a valid email.";
    return;
  } else {
    emailError.textContent = "";
  }

  //Valid the password

  const passwordInput = document.getElementById("password");
  const passwordInputTrim = passwordInput.value.trim();
  const passwordError = document.getElementById("passwordError");
  if (passwordInputTrim.value.length < 6) {
    passwordError.textContent = "Minimum characters should be 6";
  } else {
    passwordError.textContent = "";
  }

  //Submit the form if all the conditions passes

  form.submit();
});
//
