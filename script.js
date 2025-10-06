// Music toggle
const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('musicToggle');

toggleButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        music.pause();
        toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

// Lấy IP + Vị trí
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        fetch(`https://ipapi.co/${ip}/json/`)
            .then(response => response.json())
            .then(geo => {
                let location = geo.error ? 'Không xác định' : `${geo.city || 'Không xác định'}, ${geo.country_name || 'Không xác định'}`;
                const userInfo = document.getElementById('userInfo');
                userInfo.innerHTML = `IP: ${ip} <br> Vị trí: ${location}`;
                
                userInfo.addEventListener('click', () => {
                    if (location === 'Không xác định') {
                        location = 'Trong tim em';
                        userInfo.innerHTML = `IP: ${ip} <br> Vị trí: ${location}`;
                        userInfo.classList.add('changed');
                    }
                });
            })
            .catch(() => {
                const userInfo = document.getElementById('userInfo');
                userInfo.innerHTML = `IP: ${ip} <br> Vị trí: Không xác định`;
                userInfo.addEventListener('click', () => {
                    userInfo.innerHTML = `IP: ${ip} <br> Vị trí: Trong tim em`;
                    userInfo.classList.add('changed');
                });
            });
    });