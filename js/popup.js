var link = document.querySelector(".js-link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var username = popup.querySelector("[name=name]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();
});

close.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
})