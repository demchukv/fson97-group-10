const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    scrollUpBtn.classList.add('scroll-up-btn--show');
  } else {
    scrollUpBtn.classList.remove('scroll-up-btn--show');
  }
}

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
