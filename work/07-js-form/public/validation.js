"use strict";
(function () {
  /*Username validation */
  /*bc of propogation choose formEl*/

  /*choose selector for the submit, username email error, username email input*/
  const formEl = document.querySelector(".register-form");
  const usernameEl = document.querySelector(".register-form__input--username");
  const emailEl = document.querySelector(".register-form__input--email");
  const confirmEl = document.querySelector(
    ".register-form__input--confirm-email"
  );

  const usernameErrorEl = document.querySelector(".register-form__error");
  const emailError = document.querySelector(".register-form__error--email");
  const confirmError = document.querySelector(
    ".register-form__error--confirm-email"
  );

  /*email Regular Expression*/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /*UserName Label*/
  const usernameLabel = document.querySelector(
    ".register-form__label--username"
  );

  /* for the submit Event validate username email confirm are all required*/
  formEl.addEventListener("submit", (event) => {
    let isInvalid = false;
    usernameErrorEl.classList.remove("register-form__error--username-invalid");
    const username = usernameEl.value;
    const emailValue = emailEl.value;
    const confirmValue = confirmEl.value;

    /*username is true means there is no input for username*/
    if (!username) {
      usernameErrorEl.classList.add("register-form__error--username-invalid");
      isInvalid = true;
      console.log("bad message");
    }

    /*emailValue is true means there is no input for email*/
    /*validate email satisfies the regular email standard*/
    if (!emailValue) {
      isInvalid = true;
      emailError.innerText = "Email is Required";
    } else if (!emailRegex.test(emailValue)) {
      isInvalid = true;
      emailError.innerText = "Email is not Valid.(include @)";
    } else {
      emailError.innerText = "";
    }

    /*confirmValue is true means there is no input for confirm email*/
    /*validate email matches the confirm email value*/
    if (!confirmValue) {
      console.log(confirmError);
      isInvalid = true;
      confirmError.innerText = "Confirm Mail is Required";
    } else if (emailValue != confirmValue) {
      isInvalid = true;
      confirmError.innerText = "Confirmemail doesn't match email";
    } else {
      confirmError.innerText = "";
    }

    /*prevent user to submit*/
    if (isInvalid) {
      event.preventDefault();
      console.log("Please Input Message");
    }
  });

  /*Add Event Listener for the username input*/
  usernameEl.addEventListener("input", (e) => {
    if (e.target.value) {
      usernameErrorEl.classList.remove(
        "register-form__error--username-invalid"
      );
      usernameLabel.classList.add("register-form__label--username-valid");
    } else {
      usernameErrorEl.classList.add("register-form__error--username-invalid");
      usernameLabel.classList.remove("register-form__label--username-valid");
    }
  });
})();
