"use strict";
(function () {
  const modalEl = document.querySelector(".form-modal");
  const openElGroup = document.querySelectorAll(".card__subscribe");
  const closeEl = document.querySelector(".register-form__button-close");

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

  //We should use looping technique to addevent listener for each card subscribe button
  for (const openEl of openElGroup) {
    openEl.addEventListener("click", () => {
      //open form
      modalEl.showModal();
    });
  }

  closeEl.addEventListener("click", () => {
    modalEl.close();
  });
})();
