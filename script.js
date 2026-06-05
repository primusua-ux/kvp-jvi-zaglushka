document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. System Clock
    // ----------------------------------------------------
    const timeElement = document.getElementById('system-time');
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // ----------------------------------------------------
    // 2. Interactive Emblem Parallax (3D Tilt)
    // ----------------------------------------------------
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('mousemove', (e) => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within element
            const y = e.clientY - rect.top;  // y position within element
            
            // Calculate tilt percentages relative to center (-15 to 15 degrees)
            const tiltX = -((y - rect.height / 2) / (rect.height / 2)) * 15;
            const tiltY = ((x - rect.width / 2) / (rect.width / 2)) * 15;
            
            logo.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    }
});
