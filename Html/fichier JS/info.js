const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentItemIndex = 0;

function showItem() {
  carouselItems.forEach((item) => {
    item.classList.remove('active');
  });
  carouselItems[currentItemIndex].classList.add('active');
}

function prevItem() {
  currentItemIndex--;
  if (currentItemIndex < 0) {
    currentItemIndex = carouselItems.length - 1;
  }
  showItem();
}

function nextItem() {
  currentItemIndex++;
  if (currentItemIndex > carouselItems.length - 1) {
    currentItemIndex = 0;
  }
  showItem();
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

showItem();
