const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');
const viewCountEl = document.getElementById('viewCount');

// --- Tự động phát nhạc khi vào web ---
document.addEventListener('DOMContentLoaded', () => {
  try {
    music.volume = 0.4;
    music.muted = true;
    music.play().then(() => {
      setTimeout(() => { music.muted = false; }, 500);
    }).catch(() => {});
  } catch(e){}

  // Đếm lượt xem (local)
  let count = localStorage.getItem('bio_view_count') || 0;
  count = Number(count) + 1;
  localStorage.setItem('bio_view_count', count);
  viewCountEl.textContent = count;

  // Hiệu ứng gõ chữ (typing)
  const text = "Class 9B - Trường Trung học cơ sở Đồng Ý";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      document.getElementById("typingText").textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 80);
    }
  }
  typeEffect();
});

// --- Nút bật/tắt nhạc ---
toggleButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = '🔊';
    toggleButton.style.boxShadow = '0 0 20px #ff0000';
  } else {
    music.pause();
    toggleButton.textContent = '🔇';
    toggleButton.style.boxShadow = 'none';
  }
});

// --- Hiệu ứng tim bay ---
document.body.addEventListener('click', (ev) => {
  const effect = document.querySelector('.click-effect');
  const span = document.createElement('span');
  span.textContent = '❤';
  span.style.left = ev.pageX + 'px';
  span.style.top = ev.pageY + 'px';
  effect.appendChild(span);
  setTimeout(() => span.remove(), 1000);
});

// --- Bấm phím M để bật/tắt nhạc ---
window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'm') toggleButton.click();
});
