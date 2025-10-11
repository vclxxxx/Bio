const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');
const viewCountEl = document.getElementById('viewCount');

// --- Đếm lượt xem ---
document.addEventListener('DOMContentLoaded', () => {
  let count = localStorage.getItem('bio_view_count') || 0;
  count = Number(count) + 1;
  localStorage.setItem('bio_view_count', count);
  viewCountEl.textContent = count;
});

// --- Nút nhạc ---
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

// --- Bấm phím M bật/tắt nhạc ---
window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'm') toggleButton.click();
});

// --- Hiệu ứng Itachi xuất hiện ---
window.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.itachi-avatar');
  const overlay = document.querySelector('.dark-overlay');
  const crows = document.querySelectorAll('.crow');
  const sound = document.getElementById('crowSound');

  setTimeout(() => {
    overlay.style.opacity = '1';
    sound.volume = 0.7;
    sound.play().catch(()=>{});
  }, 500);

  // Quạ bay ra
  setTimeout(() => {
    crows.forEach(c => c.style.opacity = '1');
  }, 1000);

  // Avatar hiện dần
  setTimeout(() => {
    avatar.style.opacity = '1';
    overlay.style.opacity = '0';
  }, 2800);
});
