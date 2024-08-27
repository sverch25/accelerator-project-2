import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const options = {
  slidesPerView: 'auto',
  spaceBetween: 30,
  initialSlide: 2,
  centeredSlides: true,
  loop: true,
  slidesPerGroup: 2,
  simulateTouch: false,
  modules: [Navigation],
  navigation: {
    nextEl: '.advantages__button--next',
    prevEl: '.advantages__button--prev',
  },
};

const initializeSwiper = () => {
  const swiperAdvantages = document.querySelector('#swiper-advantages');
  if (swiperAdvantages) {
    return new Swiper(swiperAdvantages, options);
  }
  return null;
};

export function flippingThroughTheSliderAdvantages() {
  let swiperInstance = null;
  const checkScreenSize = () => {
    const desktopWidth = window.matchMedia('(min-width: 1440px)');
    return desktopWidth.matches;
  };

  if (checkScreenSize()) {
    swiperInstance = initializeSwiper();
  }

  window.addEventListener('resize', () => {
    if (checkScreenSize()) {
      if (!swiperInstance) {
        swiperInstance = initializeSwiper();
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  });
}
