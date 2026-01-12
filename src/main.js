/* Active Nav Link on Scrol */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY; // Поточне значення прокрутки

  if (top === 0) {
    // Якщо прокрутка на верхній частині
    navLinks.forEach(link => {
      link.classList.remove('active'); // Видаляємо активний клас у всіх посиланнях
    });

    // Додаємо активний клас до першого посилання
    navLinks[0].classList.add('active');
  } else {
    sections.forEach(sec => {
      let offset = sec.offsetTop - 150; // Верх секції
      let height = sec.offsetHeight; // Висота секції
      let id = sec.getAttribute('id'); // ID секції

      // Перевіряємо, чи прокрутка в межах секції
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active'); // Видаляємо активний клас у всіх посиланнях

          // Вибираємо посилання відповідно до ID секції
          document
            .querySelector("header nav a[href*='" + id + "']")
            .classList.add('active'); // Додаємо активний клас
        });
      }
    });
  }
};

/* Active block menu & logo & languages on Scrol */

let menuBlock = document.querySelector('.header__blocks');

let toggleMenuOnScroll = () => {
  let pos2 = document.documentElement.scrollTop;

  if (pos2 > 50) {
    // Прокручено більше ніж на 100px
    menuBlock.classList.add('active');
    menuBlock.classList.add('open');
  } else {
    menuBlock.classList.remove('active');
    menuBlock.classList.remove('open');
  }
};

let calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress__value');
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(var(--red-color) ${scrollValue}%, transparent ${scrollValue}%)`;
};

// Додаємо обидві функції для події onscroll
window.addEventListener('scroll', toggleMenuOnScroll);
window.addEventListener('scroll', calcScrollValue);

// Викликаємо функцію при завантаженні сторінки
window.onload = calcScrollValue;
