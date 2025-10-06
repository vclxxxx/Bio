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

// Fetch IP and location
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
                
                // Add click effect to change "Không xác định" to "Trong tim em"
                userInfo.addEventListener('click', () => {
                    if (location === 'Không xác định') {
                        location = 'Trong tim em';
                        userInfo.innerHTML = `IP: ${ip} <br> Vị trí: ${location}`;
                        userInfo.classList.add('changed'); // Add class for animation
                    }
                });
            })
            .catch(() => {
                const userInfo = document.getElementById('userInfo');
                userInfo.innerHTML = `IP: ${ip} <br> Vị trí: Không xác định`;
                
                // Add click effect even on error
                userInfo.addEventListener('click', () => {
                    userInfo.innerHTML = `IP: ${ip} <br> Vị trí: Trong tim em`;
                    userInfo.classList.add('changed');
                });
            });
    })
    .catch(() => {
        const userInfo = document.getElementById('userInfo');
        userInfo.innerHTML = 'Không thể lấy thông tin IP và vị trí.';
        
        // Add click effect on full error
        userInfo.addEventListener('click', () => {
            userInfo.innerHTML += '<br> Vị trí: Trong tim em';
            userInfo.classList.add('changed');
        });
    });

// Optional: Try GPS if user allows
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            // Use reverse geocoding API (e.g., OpenStreetMap Nominatim)
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                .then(response => response.json())
                .then(data => {
                    const location = data.display_name || 'Không xác định';
                    const userInfo = document.getElementById('userInfo');
                    userInfo.innerHTML += `<br> Vị trí GPS: ${location}`;
                    
                    // Add click effect for GPS part if "Không xác định"
                    userInfo.addEventListener('click', () => {
                        if (location === 'Không xác định') {
                            userInfo.innerHTML = userInfo.innerHTML.replace('Vị trí GPS: Không xác định', 'Vị trí GPS: Trong tim em');
                            userInfo.classList.add('changed');
                        }
                    });
                })
                .catch(() => {
                    // Fallback to IP location
                });
        },
        () => {
            // User denied GPS, stick with IP
        }
    );
}