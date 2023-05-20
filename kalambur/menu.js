// Отримуємо всі стовпці зображень
const columns = document.querySelectorAll('.row');

// Додаємо обробник події для кожного стовпця
columns.forEach(column => {
  column.addEventListener('click', () => {
    // Отримуємо зображення та заголовок зі стовпця
    const img = column.querySelector('img');
    const title = column.querySelector('h3');
    
    // Створюємо модальне вікно
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Створюємо контент модального вікна
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    // Вставляємо зображення та заголовок в контент модального вікна
    modalContent.innerHTML = `
      <img src="${img.src}" alt="${img.alt}">
      <h3>${title.textContent}</h3>
    `;
    
    // Додаємо контент модального вікна до модального вікна
    modal.appendChild(modalContent);
    
    // Додаємо модальне вікно до тіла документу
    document.body.appendChild(modal);
    
    // Додаємо обробник події для закриття модального вікна при кліку на нього
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
