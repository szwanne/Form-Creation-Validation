//Declaring the variables for DOM Manipulation
// const log = document.querySelector(".event-log-contents");
// document.addEventListener("DOMContentLoaded", (events) => {
//   log.textContent += "DOMContentLoaded\n";
// });

const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
let messages = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  messages = [];

  const usernameInput = document.getElementById("username");
  const usernameInputTrim = usernameInput.value.trim();
  const usernameError = document.getElementById("usernameError");

  const isValid = true;
  if (!isValid) {
    if (usernameInputTrim.value.length < 6) {
      messages.push("Minimum characters should be greater 6");
      usernameError.textContent = "Minimum characters should be greater 6";
    }
  }

  //Validate the username

  //   const usernameInput = document.getElementById("username");
  //   const usernameInputTrim = usernameInput.value.trim();
  //   const usernameError = document.getElementById("usernameError");
  //   if (usernameInputTrim.value.length < 6) {
  //     usernameError.textContent = "Minimum characters should be greater 6";
  //     return;
  //   } else {
  //     usernameError.textContent = "";
  //   }

  //   const isValid = true;
  //   if (!isValid) {
  //     if(emailError) {
  //         messages.forEach(function(message){
  //             let errorItem = document.createElement("p");
  //             errorItem.textContent = message;
  //             emailError.appendChild(errorItem)
  //         })
  //     }
  //   } else {
  //   }

  //Validate the email

  //   const emailInput = document.getElementById("email");
  //   const emailInputTrim = emailInput.value.trim();
  //   const emailError = document.getElementById("emailError");
  //   if (
  //     !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInputTrim.value)
  //   ) {
  //     emailError.textContent = "Please enter a valid email.";
  //     return;
  //   } else {
  //     emailError.textContent = "";
  //   }

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

console.log(messages);

//
