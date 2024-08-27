const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navLinks = document.querySelectorAll('.site-list__link');

export function clickMenu() {
  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      document.body.style.overflow = 'hidden';
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
      document.body.style.overflow = 'auto';
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('main-nav--opened')) {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
        document.body.style.overflow = 'auto';
      }
    });
  });
}
