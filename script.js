const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // optional: animate only once
    }
  });
}, {
  threshold: 0.2 // triggers when 20% of element is visible
});

sections.forEach(section => {
  observer.observe(section);
});