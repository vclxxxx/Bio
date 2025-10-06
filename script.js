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
                const location = geo.error ? 'Không xác định' : `${geo.city || 'Không xác định'}, ${geo.country_name || 'Không xác định'}`;
                document.getElementById('userInfo').innerHTML = `IP: ${ip} <br> Vị trí: ${location}`;
            })
            .catch(() => {
                document.getElementById('userInfo').innerHTML = `IP: ${ip} <br> Vị trí: Không xác định`;
            });
    })
    .catch(() => {
        document.getElementById('userInfo').innerHTML = 'Không thể lấy thông tin IP và vị trí.';
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
                    document.getElementById('userInfo').innerHTML += `<br> Vị trí GPS: ${location}`;
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