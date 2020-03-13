document.addEventListener('DOMContentLoaded', () => {
  const rating = document.querySelectorAll('.rating');

  if(rating) {
    rating.forEach((item) => {
      let valueOfRating = +item.querySelector('.rating__value').textContent || 5;
      let itemsOfRating = item.querySelectorAll('.rating__item');

      for (let i = 0; i < valueOfRating; i++) {
        let icon = itemsOfRating[i].querySelector('.rating__icon'); 
        icon.style.fill = '#FDC03F';
      }
    });
  }
});