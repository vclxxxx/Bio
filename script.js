const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');

// Auto-play trick
document.addEventListener("DOMContentLoaded", () => {
  music.muted = true;
  music.play().then(() => {
    setTimeout(() => {
      music.muted = false;
    }, 500);
  }).catch(() => {
    console.log("Autoplay bị chặn, cần click để bật nhạc.");
  });
});

// Toggle mafia effect
toggleButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = '🔊';
    toggleButton.style.boxShadow = "0 0 20px #ff0000";
  } else {
    music.pause();
    toggleButton.textContent = '🔇';
    toggleButton.style.boxShadow = "none";
  }
});

// Click bất kỳ -> bật nhạc nếu bị chặn
document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    music.muted = false;
  }
}, { once: true });