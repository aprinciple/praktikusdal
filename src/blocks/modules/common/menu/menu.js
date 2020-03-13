document.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu');

	if (menu) {
    let itemOfMenu = menu.querySelectorAll('.menu__item');
    let toggle = document.querySelector('.header__toggle');
    itemOfMenu.forEach((item) => {
      item.addEventListener('click', () => {
        toggle.classList.remove('open');
      });
    });
	}
});