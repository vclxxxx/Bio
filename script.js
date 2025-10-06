const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');
const clickEffect = document.querySelector('.click-effect');
let toggleWord = true; // xen kẽ Việt và 💓

// Auto-play nhạc (muted trước, bật lại sau click đầu tiên)
document.addEventListener("DOMContentLoaded", () => {
  music.play().catch(() => {});
});

// Bỏ muted khi user click lần đầu
document.body.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
  }
}, { once: true });

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

// Hiệu ứng click màn hình (Việt / 💓)
document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const span = document.createElement("span");
  span.style.left = x + "px";
  span.style.top = y + "px";
  span.textContent = toggleWord ? "Việt" : "💓";
  toggleWord = !toggleWord;
  clickEffect.appendChild(span);
  setTimeout(() => { span.remove(); }, 1000);
});