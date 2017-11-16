  var imgListner = document.querySelector(".carousel-img");
  var carouselBackground = document.querySelector('.carousel');
  var img1Pass = 'img/Icy_Front_1.png'
  var img2Pass = 'img/Icy_Front_2.png'
  var img3Pass = 'img/Icy_Front_3.png'

 imgListner.addEventListener('change', (e) => {
     let activeRadio = e.target.value;
     if (activeRadio == 'img1') {
        carouselBackground.style.backgroundImage = 'URL(' + img1Pass + ')';
        document.body.style.backgroundColor = '#849d8f';
     }
     if (activeRadio == 'img2') {
        carouselBackground.style.backgroundImage = 'URL(' + img2Pass + ')';
        document.body.style.backgroundColor = '#8996a6';
     }
     if (activeRadio == 'img3') {
        carouselBackground.style.backgroundImage = 'URL(' + img3Pass + ')';
        document.body.style.backgroundColor = '#9d8b84';
     }
 });

 