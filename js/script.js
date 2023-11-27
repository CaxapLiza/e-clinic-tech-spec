function updateButtonText() {
  const button = document.getElementById('main_block__button');
  const screenWidth = window.innerWidth;

  if (screenWidth < 1250) {
    button.innerText = 'РЕГИСТРАЦИЯ';
  } else {
    button.innerText = 'ХОЧУ ВЫИГРАТЬ';
  }
}

window.addEventListener('load', updateButtonText);
window.addEventListener('resize', updateButtonText);
