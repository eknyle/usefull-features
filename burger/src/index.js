function burgerAction() {
    const burgerCheckbox = document.querySelector(".burger__toggle");
    const burgerItems = document.querySelectorAll(".burger__item");
    burgerItems.forEach((element) => {
      element.addEventListener("click", (e) => {
        burgerCheckbox.checked = false;
      });
    });
  }