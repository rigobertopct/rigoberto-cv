// Interacciones ligeras, sin frameworks ni dependencias.
const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

// Abre la ventana de impresión. Selecciona "Guardar como PDF" como destino.
const printButton = document.querySelector('#printCv');
if (printButton) {
  printButton.addEventListener('click', () => window.print());
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Revelado progresivo; si el navegador no soporta IntersectionObserver,
// el contenido sigue visible gracias al estado inicial de los elementos.
const revealTargets = document.querySelectorAll(
  '.section-heading, .about-grid, .value-card, .timeline-item, .stack-card, .education-item'
);
if ('IntersectionObserver' in window) {
  revealTargets.forEach((element) => element.classList.add('reveal'));
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => observer.observe(element));
} 
