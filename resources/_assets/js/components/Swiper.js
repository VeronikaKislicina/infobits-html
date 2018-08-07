/* eslint-disable */
var swiper = new Swiper ('.swiper-container', {
  slidesPerView: 6,
  slidesPerColumn: 2,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
  breakpoints: {
      1170: {
        slidesPerView: 5,
        slidesPerColumn: 2,
      },
        1024: {
          slidesPerView: 4,
          slidesPerColumn: 2,
        },
        768: {
          slidesPerView: 3,
          slidesPerColumn: 2,
        },
        640: {
          slidesPerView: 2,
          slidesPerColumn: 2,
        },
        320: {
          slidesPerView: 1,
          slidesPerColumn: 2,
        }
      }
    })
