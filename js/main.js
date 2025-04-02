document.getElementById("year").textContent = new Date().getFullYear()

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
});


// Color Theme
const buttonThemeLight = document.querySelector('.theme-button-light')
const buttonThemeDark = document.querySelector('.theme-button-dark')

buttonThemeLight.addEventListener('click', () => {
  document.documentElement.dataset['themeName'] = 'light'
});

buttonThemeDark.addEventListener('click', () => {
  document.documentElement.dataset['themeName'] = 'dark'
});



