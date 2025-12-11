const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
