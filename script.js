const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');
const clickEffect = document.querySelector('.click-effect');

let toggleWord = true; // xen kẽ Việt và 💓

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

// Hiệu ứng click màn hình: hiện chữ "Việt" hoặc "💓"
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

// Hiệu ứng click icon
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.85)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 200);
  });
});