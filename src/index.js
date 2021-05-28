import Swiper from 'swiper';


const swiper = new Swiper('.about-us__swiper_info', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
})

const swiperImg = new Swiper('.about-us__swiper_pictures', {
  direction: 'horizontal',
  loop: true,
  speed: 300,
  autoplay: {
    delay: 500,
  },
  spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  }
})

const swiperDanilov = new Swiper('.manager__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  }
})
