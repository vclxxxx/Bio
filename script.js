const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');
const clickEffect = document.querySelector('.click-effect');

// Auto-play nhạc
document.addEventListener("DOMContentLoaded", () => {
  music.muted = true;
  music.play().then(() => {
    setTimeout(() => { music.muted = false; }, 500);
  }).catch(() => {});
});

// Nút nhạc
toggleButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = '🔊';
  } else {
    music.pause();
    toggleButton.textContent = '🔇';
  }
});

// Hiệu ứng click màn hình
document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const span = document.createElement("span");
  span.style.left = (x - 100) + "px";
  span.style.top = (y - 100) + "px";
  clickEffect.appendChild(span);
  setTimeout(() => { span.remove(); }, 600);
});

// Hiệu ứng click icon
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.8)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 150);
  });
});