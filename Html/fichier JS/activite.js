function Carousel(id, items) {
  this.id = id;
  this.items = items;
  this.currentIndex = 0;

  this.init = function () {
    this.showItem(this.currentIndex);
  };

  this.showItem = function (index) {
    this.items.forEach((item) => {
      item.classList.remove('active');
    });
    this.items[index].classList.add('active');
    this.currentIndex = index;
  };

  this.prevItem = function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.items.length - 1;
    }
    this.showItem(this.currentIndex);
  };

  this.nextItem = function () {
    this.currentIndex++;
    if (this.currentIndex > this.items.length - 1) {
      this.currentIndex = 0;
    }
    this.showItem(this.currentIndex);
  };

  this.addListeners = function () {
    const prevButton = document.querySelector(`#${this.id} .prev-button`);
    const nextButton = document.querySelector(`#${this.id} .next-button`);

    prevButton.addEventListener('click', () => this.prevItem());
    nextButton.addEventListener('click', () => this.nextItem());
  };

  this.init();
  this.addListeners();
}

const carouselItems1 = document.querySelectorAll('#carousel-1 .carousel-item');
const carouselItems2 = document.querySelectorAll('#carousel-2 .carousel-item');

new Carousel('carousel-1', carouselItems1);
new Carousel('carousel-2', carouselItems2);
