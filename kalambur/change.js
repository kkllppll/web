// Отримуємо кнопки та контейнери за допомогою їх ID
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");

// Функція, яка відображає меню 1 та ховає меню 2 і меню 3
function showMenu1() {
  menu1.classList.remove("hidden");
  menu2.classList.add("hidden");
  menu3.classList.add("hidden");
  button1.classList.add("active");
  button2.classList.remove("active");
  button3.classList.remove("active");
}

// Функція, яка відображає меню 2 та ховає меню 1 і меню 3
function showMenu2() {
  menu1.classList.add("hidden");
  menu2.classList.remove("hidden");
  menu3.classList.add("hidden");
  button1.classList.remove("active");
  button2.classList.add("active");
  button3.classList.remove("active");
}

// Функція, яка відображає меню 3 та ховає меню 1 і меню 2
function showMenu3() {
  menu1.classList.add("hidden");
  menu2.classList.add("hidden");
  menu3.classList.remove("hidden");
  button1.classList.remove("active");
  button2.classList.remove("active");
  button3.classList.add("active");
}

// Викликаємо функцію для відображення першого меню
showMenu1();

// Налаштовуємо обробники подій для кнопок
button1.addEventListener("click", showMenu1);
button2.addEventListener("click", showMenu2);
button3.addEventListener("click", showMenu3);
