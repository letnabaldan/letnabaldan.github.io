$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/chevron_left_solid_980.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/chevron_right_solid_982.png"></button>',
      responsive: [{
         breakpoint: 768,
         settings: {
            dots: true,
            arrows: false
         }
      }]
   });
});