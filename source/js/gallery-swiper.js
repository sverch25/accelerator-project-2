import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const options = {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1440: {
      enabled: false,
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
};

export function flippingThroughTheSliderGallery() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 1440) {
    new Swiper('#swiper-gallery', options);
  }
}
