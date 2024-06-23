// Sélectionner le bouton de menu burger et les éléments de la liste de liens
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.vaflex');

// Ajouter un écouteur d'événements de clic au bouton de menu burger
menuBtn.addEventListener('click', function () {
  // Basculer la classe "active" sur chaque élément de la liste de liens
  menuList.classList.toggle('active');
});
