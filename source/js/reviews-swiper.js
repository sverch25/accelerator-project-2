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
  slideClass: 'reviews__item',
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 1.7,
      spaceBetween: 120,
    },
  },
};

export function flippingThroughTheSliderReviews() {
  new Swiper('#swiper-reviews', options);
}
