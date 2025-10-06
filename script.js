// Music toggle
const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');

document.addEventListener("DOMContentLoaded", () => {
  // Auto play nhạc khi load
  music.muted = false;
  music.play().catch(() => {
    console.log("Trình duyệt chặn autoplay, user phải bấm play");
  });
});

toggleButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    music.pause();
    toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});