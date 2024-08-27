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
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },
  modules: [Navigation],
  breakpoints: {
    320: {
      initialSlide: 2,
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};

export function flippingThroughTheSliderTraining() {
  new Swiper('#swiper-training', options);
}
