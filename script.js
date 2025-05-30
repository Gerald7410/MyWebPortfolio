const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
  
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    navLinks.forEach(link => {
      link.style.animation = '';
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});