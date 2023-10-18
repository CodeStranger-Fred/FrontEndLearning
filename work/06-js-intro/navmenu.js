"use strict";
(function () {
  const menuItem = document.querySelector(".localmenu__item");
  const submenuListShown = document.querySelector(".submenu__list");
  const localMenuLink = document.querySelector(".localmenu__button");
  menuItem.addEventListener("click", function () {
    submenuListShown.classList.toggle("open");
    localMenuLink.classList.toggle("open");
  });
})();
