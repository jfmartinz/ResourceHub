
document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// For particles


particlesJS.load('particles-js', './assets/homeparticles.json', function () {
    console.log('callback - particles.js config loaded');
});