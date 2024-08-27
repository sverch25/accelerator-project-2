import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const options = {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  loop: false,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export function flippingThroughTheSliderTours() {
  new Swiper('#swiper-tours', options);
}
