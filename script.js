//Declaring the variables for DOM Manipulation

document.addEventListener("DOMContentLoaded", (events) => {
  log.textContent += "DOMContentLoaded\n";
});

const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Validate the username

  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("usernameError");
  if (usernameInput.value.length < 6) {
    usernameError.textContent = "Minimum characters should be greater 6";
    return;
  } else {
    usernameError.textContent = "";
  }

  //Validate the email

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    return;
  } else {
    emailError.textContent = "";
  }

  //Valid the password

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Minimum characters should be 6";
  } else {
    passwordError.textContent = "";
  }

  //Submit the form if all the conditions passes

  form.submit();
});
//
