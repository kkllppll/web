const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-button--prev');
const nextButton = document.querySelector('.carousel-button--next');
const imageWidth = images[0].clientWidth + 50; // Додаємо 50px для margin-right
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  // При досягненні першого зображення приховуємо кнопку "Prev"
  if (currentIndex === 0) {
    prevButton.style.display = 'none';
  }
  // При досягненні останнього зображення приховуємо кнопку "Next"
  if (currentIndex === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
});

nextButton.addEventListener('click', () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : images.length - 1;
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  
 // Зупинка прокрутки після досягнення останнього зображення
 if (currentIndex === images.length - 1) {
  nextButton.style.display = 'none';
}
// При досягненні останнього зображення приховуємо кнопку "Next"
if (currentIndex === images.length - 1) {
  nextButton.style.display = 'none';
}
// При досягненні першого зображення приховуємо кнопку "Prev"
if (currentIndex === 0) {
  prevButton.style.display = 'none';
} else {
  prevButton.style.display = 'block';
}
});

prevButton.style.display = 'none'; // Приховуємо кнопку "Prev" на початку
 // Показуємо кнопку "Next", якщо є більше одного зображення
if (images.length > 1) {
  nextButton.style.display = 'block';
}