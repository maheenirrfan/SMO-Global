const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealNodes = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node) => revealObserver.observe(node));
