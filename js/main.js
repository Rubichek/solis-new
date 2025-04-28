// Burger menu

document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("open");
});

// Color Theme

document.documentElement.dataset.themeName =
  localStorage.getItem("theme") || "light";

const themeButton = document.querySelector(".theme-button");

// вешаем событие на кнопку в которо лежат две SVG
themeButton.addEventListener("click", () => {
  //создаем переменную текушей темы
  const curretTheme = document.documentElement.dataset.themeName;

  const newTheme = curretTheme === "dark" ? "light" : "dark";
  document.documentElement.dataset.themeName = newTheme;
  localStorage.setItem("theme", newTheme);
});

// Play YouTube

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playBtn");
  const poster = document.getElementById("poster");
  const videoContainer = document.getElementById("videoContainer");
  const iframe = document.getElementById("videoFrame");

  playButton.addEventListener("click", () => {
    poster.style.opacity = "0";

    setTimeout(() => {
      poster.style.display = "none";
    }, 500);

    iframe.src =
      "https://www.youtube.com/embed/vnbN9V_2Guk?autoplay=1&mute=1&controls=1";
    videoContainer.style.opacity = "1";
  });
});
