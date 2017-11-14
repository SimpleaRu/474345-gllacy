 var img1 = document.querySelector("#img1");
 var img2 = document.querySelector("#img2");
 var img3 = document.querySelector("#img3");
 var imgListner = document.querySelector(".carousel-img");
 var carouselBackground = document.querySelector('.carousel');

  var img1Pass = 'img/Icy_Front_1.png'
  var img2Pass = 'img/Icy_Front_2.png'
  var img3Pass = 'img/Icy_Front_3.png'

 imgListner.addEventListener('change', (e) => {
     if (img1.checked) {
        carouselBackground.style.backgroundImage = 'URL(' + img1Pass + ')';
        document.body.style.backgroundColor = '#849d8f';
     }
     if (img2.checked) {
        carouselBackground.style.backgroundImage = 'URL(' + img2Pass + ')';
        document.body.style.backgroundColor = '#8996a6';
     }
     if (img3.checked) {
        carouselBackground.style.backgroundImage = 'URL(' + img3Pass + ')';
        document.body.style.backgroundColor = '#9d8b84';
     }
 });

 