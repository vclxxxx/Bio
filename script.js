const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');

document.addEventListener("DOMContentLoaded", () => {
  music.muted = false;
  music.play().catch(() => {
    console.log("Trình duyệt chặn autoplay, user phải bấm play");
  });
});

toggleButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleButton.innerHTML = '🔊';
  } else {
    music.pause();
    toggleButton.innerHTML = '🔇';
  }
});