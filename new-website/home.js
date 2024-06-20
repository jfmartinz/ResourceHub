
document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    // Check if dark mode is enabled
    const isDarkModeEnabled = document.documentElement.classList.contains('dark');
    // Get the image element
    const orgLogoImg = document.getElementById('org-logo');
    // Set the new image source based on dark mode state
    orgLogoImg.src = isDarkModeEnabled ? 'assets/GSSocDark.png' : 'assets/GSSocLight.png';
    const footerImg = document.getElementById('logo-image');
    footerImg.src = isDarkModeEnabled ? 'assets/footerDark.png' : 'assets/footer-light.png';
}

// For particles


particlesJS.load('particles-js', './assets/homeparticles.json', function () {
    console.log('callback - particles.js config loaded');
});