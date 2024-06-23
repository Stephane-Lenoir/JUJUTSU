document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enterButton");
  const topLeft = document.querySelector(".topLeft");
  const bottomRight = document.querySelector(".bottomRight");
  const topLeftViolet = document.querySelector(".topLeftViolet");
  const bottomRightViolet = document.querySelector(".bottomRightViolet");
  const samurais = document.querySelectorAll(".samurai");
  const content = document.querySelector(".content");
  const siteDefinitif = document.getElementById('pageenter');

  // Définir l'opacité initiale de la page d'accueil
  siteDefinitif.style.opacity = 0;

  // Ajouter la propriété CSS overflow: hidden au corps de la page
  document.body.style.overflow = "hidden";

  enterButton.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    content.classList.add("fade-out-rotate-container");

    // Mettre à jour l'opacité de la page d'accueil lorsque l'animation commence
    siteDefinitif.style.opacity = 0.5;

    // Supprimer la propriété CSS overflow: hidden du corps de la page
    document.body.style.overflow = "auto";

    // Déplacer la partie topLeft vers le coin supérieur gauche
    topLeft.style.transform = "translate(-50%, -50%)";

    // Glisser la partie bottomRight vers le coin inférieur droit
    bottomRight.style.transform = "translate(50%, 50%)";

    // Déclencher les animations des samourais
    samurais.forEach(function (samurai, index) {
      setTimeout(function () {
        samurai.style.visibility = "visible";
        samurai.classList.add("open");

        // Vérifier si c'est la dernière image de samouraï
        if (index === samurais.length - 1) {
          // Afficher la bannière après un délai (par exemple, 1 seconde après la dernière image de samouraï)
          setTimeout(function () {
            document.querySelector(".imgtitre").classList.remove("hidden");
            siteDefinitif.classList.remove("hidden");
            siteDefinitif.style.opacity = 1;
          }, 1000);
        }
      }, index * 100); // Décaler chaque animation de 1 seconde
    });
  });

  setTimeout(function () {
    topLeftViolet.style.transform = "translate(-50%, -50%) scaleX(2) scaleY(0.5)";
    bottomRightViolet.style.transform = "translate(50%, 50%) scaleX(2) scaleY(0.5)";
  }, 8000);

  content.addEventListener('animationend', function () {
    // Empêcher les animations de se réactiver lorsque l'utilisateur clique sur le bouton "Précédent" ou "Suivant"
    window.onpopstate = function (event) {
      history.pushState(null, null, document.location.href);
    }
  });
});
