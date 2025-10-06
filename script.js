const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');

// Khi DOM load xong
document.addEventListener("DOMContentLoaded", () => {
  // Trick để tự bật nhạc
  music.muted = true;
  music.play().then(() => {
    // Sau khi play thành công, bỏ mute để có tiếng
    setTimeout(() => {
      music.muted = false;
    }, 500);
  }).catch(() => {
    console.log("Autoplay bị chặn, cần click để bật nhạc.");
  });
});

// Toggle
toggleButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = '🔊';
  } else {
    music.pause();
    toggleButton.textContent = '🔇';
  }
});

// Nếu user click bất kỳ trên trang thì bật nhạc
document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    music.muted = false;
  }
}, { once: true });