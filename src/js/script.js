// ------slick carousel-------
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="arrow" /></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="arrow" /></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

// ------tiny-slider-------
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    speed: 600,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    navPosition: "bottom"
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });