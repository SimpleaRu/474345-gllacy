var modalForm = document.querySelector(".feed-back");
var feedBackButton = document.querySelector("#feed-back-show");
var feedBackClose = document.querySelector(".feed-close-button");
var slide1Button = document.querySelector("#img1");
var slide2Button = document.querySelector("#img2");
var slide3Button = document.querySelector("#img3");
var contentWraper = document.querySelector(".content-wraper");
var siteWrapper = document.querySelector(".site-wrapper");
var slide1Text = document.querySelector(".slide1");
var slide2Text = document.querySelector(".slide2");
var slide3Text = document.querySelector(".slide3");

feedBackButton.addEventListener('click', function (e) {
  e.preventDefault();
  modalForm.classList.add("feed-back-show");
});
feedBackClose.addEventListener('click', function (e) {
  e.preventDefault();
  modalForm.classList.remove("feed-back-show");
});

contentWraper.addEventListener('click', function (e) {
  if (slide1Button.checked) {
    siteWrapper.style.backgroundImage = "url('./img/Icy_Front_1.png')";
    document.body.style.backgroundColor = "#849d8f";
    slide1Text.style.display = "block";
    slide2Text.style.display = "none";
    slide3Text.style.display = "none";
  }
  else if (slide2Button.checked) {
    siteWrapper.style.backgroundImage = "url('./img/Icy_Front_2.png')";
    document.body.style.backgroundColor = "#909faf";
    slide1Text.style.display = "none";
    slide2Text.style.display = "block";
    slide3Text.style.display = "none";
  }
  else if (slide3Button.checked) {
    siteWrapper.style.backgroundImage = "url('./img/Icy_Front_3.png')";
    document.body.style.backgroundColor = "#9d8b83";
    slide1Text.style.display = "none";
    slide2Text.style.display = "none";
    slide3Text.style.display = "block";
  }
});