const carousel2 = document.querySelector('.carousel2');
const images2 = document.querySelectorAll('.carousel-image2');
const prevButton2 = document.querySelector('.carousel-button--prev2');
const nextButton2 = document.querySelector('.carousel-button--next2');
const imageWidth2 = images2[0].clientWidth + 60; // Додаємо 60px для margin-right
let currentIndex2 = 0;

prevButton2.addEventListener('click', () => {
  currentIndex2 = currentIndex2 > 0 ? currentIndex2 - 1 : 0;
  carousel2.style.transform = `translateX(-${currentIndex2 * imageWidth2}px)`;
  // При досягненні першого зображення приховуємо кнопку "Prev"
  if (currentIndex2 === 0) {
    prevButton2.style.display = 'none';
  }
  // При досягненні останнього зображення приховуємо кнопку "Next"
  if (currentIndex2 === images2.length - 1) {
    nextButton2.style.display = 'none';
  } else {
    nextButton2.style.display = 'block';
  }
});

nextButton2.addEventListener('click', () => {
  currentIndex2 = currentIndex2 < images2.length - 1 ? currentIndex2 + 1 : images2.length - 1;
  carousel2.style.transform = `translateX(-${currentIndex2 * imageWidth2}px)`;
  
 // Зупинка прокрутки після досягнення останнього зображення
 if (currentIndex2 === images2.length - 1) {
  nextButton2.style.display = 'none';
}
// При досягненні останнього зображення приховуємо кнопку "Next"
if (currentIndex2 === images2.length - 1) {
  nextButton2.style.display = 'none';
}
// При досягненні першого зображення приховуємо кнопку "Prev"
if (currentIndex2 === 0) {
  prevButton2.style.display = 'none';
} else {
  prevButton2.style.display = 'block';
}
});

prevButton2.style.display = 'none'; // Приховуємо кнопку "Prev" на початку
 // Показуємо кнопку "Next", якщо є більше одного зображення
if (images2.length > 1) {
  nextButton2.style.display = 'block';
}