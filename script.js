const hamburger = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu-options');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('open');
});
