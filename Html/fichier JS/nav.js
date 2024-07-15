document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('page-content');
    const navLinks = document.querySelectorAll('.menu a');
  
    function loadPage(url) {
      fetch(url)
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const newContent = doc.querySelector('#page-content');
  
          content.innerHTML = newContent.innerHTML;
          content.classList.add('fade-in');
          // Charger les scripts de la nouvelle page
        const newScripts = Array.from(doc.head.querySelectorAll('script[src]'));
        newScripts.forEach((script) => {
        const existingScript = document.querySelector(`script[src="${script.src}"]`);
        if (!existingScript) {
            const newScriptElement = document.createElement('script');
            newScriptElement.src = script.src;
            newScriptElement.defer = true;
            document.head.appendChild(newScriptElement);
        }
        });

  
          // Charger les feuilles de style de la nouvelle page
          const newStyles = Array.from(doc.head.querySelectorAll('link[rel="stylesheet"]'));
          newStyles.forEach((style) => {
            const existingStyle = document.querySelector(`link[href="${style.href}"]`);
            if (!existingStyle) {
              document.head.appendChild(style);
            }
          });
  
          // Supprimer les feuilles de style de l'ancienne page
          const oldStyles = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
          oldStyles.forEach((style) => {
            if (!doc.head.contains(style)) {
              style.remove();
            }
          });
  
          // Mettre à jour l'historique de navigation
          history.pushState({}, '', url);
        })
        .catch((error) => console.error(error));
    }
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        loadPage(url);
      });
    });
  
    // Gérer la navigation arrière et avant
    window.addEventListener('popstate', () => {
      const currentUrl = location.href;
      loadPage(currentUrl);
    });
  });
  