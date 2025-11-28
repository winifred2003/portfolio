
// NAV TOGGLE
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;';
nav.prepend(navToggle);

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth"
      });
    }

    nav.classList.remove('nav-open');
  });
});

// TYPING EFFECT
const nameSpan = document.querySelector('.red');
const fullName = "Ehikhamhen.N.Winifred";
let index = 0;

function typeEffect() {
  if (index < fullName.length) {
    nameSpan.textContent += fullName.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
nameSpan.textContent = "";
typeEffect();

// SERVICE ANIMATION
const services = document.querySelectorAll('.service');

function animateServices() {
  const trigger = window.innerHeight * 0.8;

  services.forEach((service, i) => {
    if (service.getBoundingClientRect().top < trigger) {
      setTimeout(() => service.classList.add('show'), i * 150);
    }
  });
}

window.addEventListener('scroll', animateServices);

// FORM VALIDATION
const form = document.querySelector('form');
const nameInput = document.querySelector('.nam');
const emailInput = document.querySelector('.emai');
const messageInput = document.querySelector('.mes');

form.addEventListener('submit', (e) => {
  if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    e.preventDefault();
    alert("Please fill all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(emailInput.value)) {
    e.preventDefault();
    alert("Enter a valid email.");
  }
});
