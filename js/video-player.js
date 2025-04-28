// video-player.js
function playVideo(videoId) {
  const wrapper = document.querySelector(".video-player");
  wrapper.innerHTML = `<iframe class="video"
      src="https://www.youtube.com/embed/vnbN9V_2Guk?si=gzLtjGm5vVuxyRuN&amp;controls=0&autoplay=1&mute=1" 
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture;"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>`;
}
