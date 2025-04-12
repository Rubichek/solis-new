document.getElementById("year").textContent = new Date().getFullYear()

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
});


// Color Theme

document.documentElement.dataset.themeName = localStorage.getItem('theme') || 'light';

const themeButton = document.querySelector('.theme-button')

// вешаем событие на кнопку в которо лежат две SVG
themeButton.addEventListener('click', () => {

  //создаем переменную текушей темы
  const curretTheme = document.documentElement.dataset.themeName;
  
  const newTheme = curretTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.themeName = newTheme;
  localStorage.setItem('theme', newTheme);
})










// const iconLight = document.querySelector('.icon-light')
// const ikonDark = document.querySelector('.icon-dark')

// iconLight.addEventListener('click', () => {
//   document.documentElement.dataset['themeName'] = 'light'
// });

// ikonDark.addEventListener('click', () => {
//   document.documentElement.dataset['themeName'] = 'dark'
// });



