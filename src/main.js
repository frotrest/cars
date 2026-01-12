let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  if (top === 0) {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    navLinks[0].classList.add('active');
  } else {
    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      // Перевіряємо, чи прокрутка в межах секції
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');

          // Вибираємо посилання відповідно до ID секції
          document
            .querySelector("header nav a[href*='" + id + "']")
            .classList.add('active');
        });
      }
    });
  }
};

let menuBlock = document.querySelector('.header__blocks');

let toggleMenuOnScroll = () => {
  let pos2 = document.documentElement.scrollTop;

  if (pos2 > 50) {
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

window.addEventListener('scroll', toggleMenuOnScroll);
window.addEventListener('scroll', calcScrollValue);

window.onload = calcScrollValue;
