// Récupérer tous les éléments avec la classe ".nav-link"
const navLinks = document.querySelectorAll('.nav-link');

// Fonction pour vérifier si un élément aperçoit une partie de la section suivante
function isElementInView(element) {
  const windowHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elementTop = element.offsetTop;
  const elementBottom = elementTop + element.offsetHeight;

  return (elementTop <= scrollTop + windowHeight / 2) && (elementBottom >= scrollTop + windowHeight / 2);
}

// Fonction pour mettre à jour les classes ".active"
function updateActiveLinks() {
  navLinks.forEach(function(navLink, index) {
    const section = document.querySelectorAll('section')[index];
    if (section && isElementInView(section)) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

// Écouter l'événement de défilement (scroll)
window.addEventListener('scroll', updateActiveLinks);
