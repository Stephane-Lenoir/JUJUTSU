
HTML

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page d'entrée diagonale</title>
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="./stylesamouraî.css">
  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./stylepageaccueil.css">
  <script src="./index.js" defer></script>
</head>

<body>
  <div class="samurai-container">
    <div class="topLeftViolet"></div>
    <div class="bottomRightViolet"></div>
    <img src="./img samourai/imgfin1.png" alt="Samouraï" class="samurai samurai-1">
    <img src="./img samourai/imgfin2.png" alt="Samouraï" class="samurai samurai-2">
    <img src="./img samourai/imgfin3.png" alt="Samouraï" class="samurai samurai-3">
  </div>
  <div class="diagonalPage">
    <div class="content">
      <div class="textGroup">
        <h1 id="welcomeTex" class="welcomeText">
          <span>Bienvenue sur</span>
          <span>notre site !</span>
        </h1>
        <p>Cliquez sur le bouton "Entrer" pour découvrir plus.</p>
      </div>
      <div class="buttonGroup">
        <button id="enterButton">Entrer</button>
      </div>
    </div>
    <div class="topLeft"></div>
    <div class="bottomRight"></div>
  </div>
  <div id="pageenter" class="pageaccueil">
    <header>
      <h1 class="titre1">Ju-Jutsu Traditionnel</h1>
      <h2 class="titre2">Méthode Wajutsu sans compétition</h2>
      <img class="imgtitre" src="../IMAGES/nouveau.jpg" alt="Dojo au millieu des arbres">
      <h3 class="sous"> <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e8a04c9567e68d:0xe1ee84e3a4b818a2?sa=X&ved=1t:8290&ictx=111"
          target="_blank">Crégy-les-Meaux</a></h3>
    </header>
  </div>
</body>

</html>

CSS n°1

.samurai-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
  pointer-events: none;
}

.topLeftViolet,
.bottomRightViolet {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('./img samourai/BAMBOU.PNG'); /* remplacez 'votre-image.jpg' par le chemin d'accès à votre image */
  background-size: cover;
  background-position: center;
  transition: all 5s ease;
}

.topLeftViolet {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.bottomRightViolet {
  clip-path: polygon(100% 100%, 0 100%, 100% 0);
}

.samurai {
  position: absolute;
  width: 200px;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  pointer-events: auto; /* réactiver les événements de souris pour les images de samouraï */
}

.samurai-1 {
  animation: move-samurai-1 3s forwards;
  width: 150rem;
  height: auto;
  padding-top: 25rem;
}

.samurai-2 {
  animation: move-samurai-2 2s forwards 3s;
  width: 150rem;
  height: auto;
  padding-top: 20rem;
}

.samurai-3 {
  animation: move-samurai-3 3s forwards 5s;
  width: 150rem;
  height: auto;
  padding-top: 20rem;
}

@keyframes move-samurai-1 {
  0% {
    visibility: visible;
  }

  99% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes move-samurai-2 {
  0% {
    visibility: hidden;
  }

  1% {
    visibility: visible;
  }

  99% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes move-samurai-3 {
  0% {
    visibility: hidden;
  }

  1% {
    visibility: visible;
  }

  99% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}


CSS N°2

h1 {
  padding-bottom: 2rem;
  font-size: 4rem;
  text-shadow: 2px 1px 1px rgba(250, 242, 235, 0.664);
}

p {
  padding-bottom: 2rem;
  font-size: 1.8rem;
  text-shadow: 1px 1px 1px rgba(241, 227, 214, 0.664);
}

button {
  padding: 0.5rem 0.8rem;
  background-color: rgba(30, 133, 47, 0.822);
  border-radius: 1.5rem;
  color: rgba(49, 17, 17, 0.493);
  border-color: rgba(197, 57, 57, 0.801);
}

#enterButton {
  position: relative;
  z-index: 2; /* définir une valeur de z-index supérieure à celle de la div "samurai-container" */
  /* autres propriétés CSS */
}

.open {
  transform: translate(-50%, -50%) scaleX(2) scaleY(0.5);
  /* Déplace et échelle la page pour s'ouvrir en diagonale */
  transition: transform 1s ease;
  /* Animation pour la transition de l'ouverture */
}

.diagonalPage {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.topLeft,
.bottomRight {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: all 5s ease;
}

.topLeft {
  background-color: rgba(3, 146, 27, 0.822);
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.bottomRight {
  background-color: rgba(105, 4, 163, 0.89);
  clip-path: polygon(100% 100%, 0 100%, 100% 0);
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  box-shadow: rgba(47, 47, 102, 0.623) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 2rem;
  border-radius: 2rem;
  color: rgba(230, 109, 10, 0.664);
  transition: transform 1s ease;
}

/* Nouvelle animation (à ajouter) */
/* ... (CSS existant) ... */

.fade-out-rotate-container {
  animation: fade-out-rotate 6s forwards;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
}

.fade-out-rotate-container h1,
.fade-out-rotate-container p,
.fade-out-rotate-container button {
  animation: none; /* Réinitialiser l'animation pour les éléments enfants */
}

@keyframes fade-out-rotate {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.pageaccueil {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; /* Mettre à jour l'opacité initiale ici */
  transition: opacity 1s ease; /* Ajouter une transition pour l'opacité */
}

CSS N°3

.pageaccueil {
    background-color: rgb(255, 51, 0);
}

JS :

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
  
    enterButton.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
  
      content.classList.add("fade-out-rotate-container");
  
      // Mettre à jour l'opacité de la page d'accueil lorsque l'animation commence
      siteDefinitif.style.opacity = 0.5;
  
      // Déplacer la partie topLeft vers le coin supérieur gauche
      topLeft.style.transform = "translate(-50%, -50%)";
  
      // Glisser la partie bottomRight vers le coin inférieur droit
      bottomRight.style.transform = "translate(50%, 50%)";
  
      // Déclencher les animations des samurais
      samurais.forEach(function (samurai, index) {
        setTimeout(function () {
          samurai.style.visibility = "visible";
          samurai.classList.add("open");
        }, index * 1000); // Décaler chaque animation de 1 seconde
      });
    });
  
    setTimeout(function () {
      topLeftViolet.style.transform = "translate(-50%, -50%) scaleX(2) scaleY(0.5)";
      bottomRightViolet.style.transform = "translate(50%, 50%) scaleX(2) scaleY(0.5)";
    }, 8000);
  
    content.addEventListener('animationend', function() {
      siteDefinitif.style.opacity = 1; // Afficher la div après la fin de l'animation
    });
  });
  