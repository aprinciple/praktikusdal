document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.header__toggle');
  toggle && toggle.addEventListener('click', () => toggle.classList.toggle('open'));
});