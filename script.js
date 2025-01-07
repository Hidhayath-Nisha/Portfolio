// THEME TOGGLE FUNCTIONALITY
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
  // Toggles the .dark-theme class on the entire body
  document.body.classList.toggle('dark-theme');
});
