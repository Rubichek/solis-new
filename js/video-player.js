// video-player.js
function playVideo(videoId) {
    const wrapper = document.querySelector('.video-player');
    wrapper.innerHTML = `<iframe class="video" width="870" height="539" src="https://www.youtube.com/embed/vnbN9V_2Guk?si=KIZhA0dUnXvCHf8_&amp;controls=0&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }
  