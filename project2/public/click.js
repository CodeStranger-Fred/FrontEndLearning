"use strict";
(function () {
  const clickButton = document.querySelector(".navbar__icon");
  const localmenuList = document.querySelector(".localmenu__list");

  clickButton.addEventListener("click", function () {
    localmenuList.classList.toggle("localmenu__list--open");
  });
})();
