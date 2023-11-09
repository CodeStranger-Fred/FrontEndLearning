"use strict";
(function () {
  const accordionbuttonList = document.querySelectorAll(".accordion__button");
  const accordiontextList = document.querySelectorAll(".accordion__content");
  const accordionsignList = document.querySelectorAll(".gg-chevron-down");

  accordionbuttonList.forEach((accordionbutton, index) => {
    accordionbutton.addEventListener("click", function () {
      accordiontextList[index].classList.toggle("accordion__content--active");
      accordionsignList[index].classList.toggle("gg-chevron-down--active");

      //change aria-expanded value
      if (accordionbutton.getAttribute("aria-expanded") == "false") {
        accordionbutton.setAttribute("aria-expanded", "true");
      } else {
        accordionbutton.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
