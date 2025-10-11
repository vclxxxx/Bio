const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');
const viewCountEl = document.getElementById('viewCount');

// Khi trang load
document.addEventListener('DOMContentLoaded', () => {
  // Nhạc nền
  try {
    music.volume = 0.35;
    music.muted = true;
    music.play().then(() => {
      setTimeout(() => { music.muted = false; }, 500);
    }).catch(() => {});
  } catch (e) { console.log(e); }

  // Đếm lượt xem (local)
  let count = localStorage.getItem('bio_view_count') || 0;
  count = Number(count) + 1;
  localStorage.setItem('bio_view_count', count);
  viewCountEl.textContent = count;
});

// Nút bật/tắt nhạc
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

// Hiệu ứng click tim bay
document.body.addEventListener('click', (ev) => {
  const effect = document.querySelector('.click-effect');
  const span = document.createElement('span');
  span.textContent = '❤';
  span.style.left = ev.pageX + 'px';
  span.style.top = ev.pageY + 'px';
  effect.appendChild(span);
  setTimeout(() => span.remove(), 1000);
});

// Bấm phím M để bật/tắt nhạc
window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'm') {
    toggleButton.click();
  }
});
