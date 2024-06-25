document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.fa-bars');
  const leftSideMenu = document.querySelector('.left-side-menu');

  menuIcon.addEventListener('click', function() {
    leftSideMenu.classList.toggle('visible');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('nav ul i');
  const closeMenuIcon = document.querySelector('.left-side-menu .close-menu');
  const leftSideMenu = document.querySelector('.left-side-menu');

  menuIcon.addEventListener('click', () => {
    leftSideMenu.classList.add('visible');
  });

  closeMenuIcon.addEventListener('click', () => {
    leftSideMenu.classList.remove('visible');
  });
});
