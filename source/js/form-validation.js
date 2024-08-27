const sectionForm = document.querySelector('.form');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');

export const validateForm = () => {
  sectionForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!phoneInput.validity.valid) {
      phoneInput.classList.add('error');
    } else {
      phoneInput.classList.remove('error');
    }
    if (!emailInput.validity.valid) {
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }
    if (phoneInput.validity.valid && emailInput.validity.valid) {
      sectionForm.submit();
    }
  });
};
