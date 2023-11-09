"use strict";
(function () {
  //submit
  const formEl = document.querySelector(".register-form");

  //value changes
  const emailEl = document.querySelector(".register-form__input--email");
  const confirmEmailEL = document.querySelector(
    ".register-form__input--confirm-email"
  );

  //error messages
  const emailError = document.querySelector(".register-form__error--email");
  const confirmError = document.querySelector(
    ".register-form__error--confirm-email"
  );

  //email pattern
  const emailPattern = /@/;

  //validation function
  function validateForm() {
    const emailValue = emailEl.value;
    const confirmEmailValue = confirmEmailEL.value;

    if (!emailValue) {
      //email should require input and the input border be red

      emailError.innerText = "This field is required";
      emailEl.classList.add("register-form__input--email-invalid");

      //remove the confirm text and border
      confirmError.innerText = "";
      confirmEmailEL.classList.remove(
        "register-form__input--confirm-email-invalid"
      );
    } else if (!emailPattern.test(emailValue)) {
      //email not valid and the input border be red

      emailError.innerText =
        "This field be a valid email address including a @";
      emailEl.classList.add("register-form__input--email-invalid");

      //remove the confirm text and border
      confirmError.innerText = "";
      confirmEmailEL.classList.remove(
        "register-form__input--confirm-email-invalid"
      );
    } else if (emailValue != confirmEmailValue) {
      //remove the validation text and the input red border

      emailError.innerText = "";
      emailEl.classList.remove("register-form__input--email-invalid");

      //mail not match confirm mail and the input border be red

      confirmError.innerText =
        "This field must match the provided email address";
      confirmEmailEL.classList.add(
        "register-form__input--confirm-email-invalid"
      );
    } else {
      return true;
    }
    return false;
  }

  //submit function
  formEl.addEventListener("submit", function (event) {
    let valid = false;

    valid = validateForm();

    if (!valid) {
      event.preventDefault();
    } else {
      //remove the validation text and the input red border
      emailError.innerText = "";
      emailEl.classList.remove("register-form__input--email-invalid");

      confirmError.innerText = "";
      confirmEmailEL.classList.remove(
        "register-form__input--confirm-email-invalid"
      );
    }
  });

  //change function which means when the value of input changes do some validation
  //email value changes but confirm email will not throw error
  emailEl.addEventListener("change", () => {
    const emailValue = emailEl.value;

    if (!emailValue) {
      //email should require input and the input border be red

      emailError.innerText = "This field is required";
      emailEl.classList.add("register-form__input--email-invalid");

      //remove the confirm text and border
      confirmError.innerText = "";
      confirmEmailEL.classList.remove(
        "register-form__input--confirm-email-invalid"
      );
    } else if (!emailPattern.test(emailValue)) {
      //email not valid and the input border be red

      emailError.innerText =
        "This field be a valid email address including a @";
      emailEl.classList.add("register-form__input--email-invalid");

      //remove the confirm text and border
      confirmError.innerText = "";
      confirmEmailEL.classList.remove(
        "register-form__input--confirm-email-invalid"
      );
    } else {
      //remove the validation text and the input red border
      emailError.innerText = "";
      emailEl.classList.remove("register-form__input--email-invalid");
    }
  });

  //confirm value changes but if email value has error then it will first report email error and not throw confirm email error
  confirmEmailEL.addEventListener("change", () => {
    let valid = false;

    valid = validateForm();

    if (valid) {
      //remove the validation text and the input red border
      emailError.innerText = "";
      emailEl.classList.remove("register-form__input--email-invalid");

      confirmError.innerText = "";
      confirmEmailEL.classList.remove(
        "register-form__input--confirm-email-invalid"
      );
    }
  });
})();
