const hamburger = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu-options');
const closeButton = document.getElementById('close-btn');


hamburger.addEventListener('click', function() {
  menu.classList.toggle('open');
});

closeButton.addEventListener('click', function() {
  menu.classList.remove('open');
});
