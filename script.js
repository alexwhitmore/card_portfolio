'use strict';

//PORTFOLIO SECTION
const items = document.querySelectorAll('.container-item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    removeActiveClass();
    item.classList.add('active');
  });
});

function removeActiveClass() {
  items.forEach((item) => {
    item.classList.remove('active');
  });
}
