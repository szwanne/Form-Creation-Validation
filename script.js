//Declaring the variables for DOM Manipulation

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
});
//
