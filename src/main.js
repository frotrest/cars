// Активные ссылки при скролле
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  if (top === 0) {
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[0]) {
      navLinks[0].classList.add('active');
    }
  } else {
    sections.forEach(sec => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));

        const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (targetLink) {
          targetLink.classList.add('active');
        }
      }
    });
  }
});

// Меню при скролле
const menuBlock = document.querySelector('.header__blocks');

function toggleMenuOnScroll() {
  const pos2 = document.documentElement.scrollTop;

  if (pos2 > 50) {
    menuBlock.classList.add('active', 'open');
  } else {
    menuBlock.classList.remove('active', 'open');
  }
}

// Прогресс-бар скролла
const scrollProgress = document.getElementById('progress');

function calcScrollValue() {
  const pos = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }

  scrollProgress.style.background = `conic-gradient(var(--red-color) ${scrollValue}%, transparent ${scrollValue}%)`;
}

// Клик по прогресс-бару → наверх
scrollProgress.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Подписки на события
window.addEventListener('scroll', toggleMenuOnScroll);
window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);
