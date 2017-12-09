var modalForm = document.querySelector(".feed-back");
var feedBackButton = document.querySelector("#feed-back-show");
var feedBackClose = document.querySelector(".feed-close-button");

feedBackButton.addEventListener('click', function(e) {
  e.preventDefault();
  modalForm.classList.add("feed-back-show");
});
feedBackClose.addEventListener('click', function(e) {
  e.preventDefault();
  modalForm.classList.remove("feed-back-show");
});