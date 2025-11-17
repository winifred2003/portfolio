
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Create hamburger toggle button
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;'; // ☰ symbol
nav.prepend(navToggle);

// Toggle menu for mobile
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Smooth scroll for navbar links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if(target){
      window.scrollTo({
        top: target.offsetTop - 50, // adjust for navbar height
        behavior: 'smooth'
      });
    }

    // Close mobile menu on click
    if(nav.classList.contains('nav-open')){
      nav.classList.remove('nav-open');
    }
  });
});

// ============================
// Typing Effect for Hero Name
// ============================
const nameSpan = document.querySelector('.red');
const fullName = "Ehikhamhen.N.Winifred";
let charIndex = 0;

function typeHeroName(){
  if(charIndex < fullName.length){
    nameSpan.textContent += fullName.charAt(charIndex);
    charIndex++;
    setTimeout(typeHeroName, 150);
  }
}

// Clear content and start typing
nameSpan.textContent = "";
typeHeroName();

// ============================
// Services Section Scroll Animation
// ============================
// ============================
// Services Section Staggered Animation
// ============================
const services = document.querySelectorAll('.service');

function animateServicesStagger() {
  const trigger = window.innerHeight / 5 * 4;

  services.forEach((service, index) => {
    const serviceTop = service.getBoundingClientRect().top;

    if(serviceTop < trigger){
      // Add 'show' class with staggered delay
      setTimeout(() => {
        service.classList.add('show');
      }, index * 150); // 150ms delay per service
    } else {
      service.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', animateServicesStagger);


window.addEventListener('scroll', animateServices);

// ============================
// Contact Form Validation + Confirmation + Formsubmit
// ============================
const form = document.querySelector('form');
const nameInput = document.querySelector('.nam');
const emailInput = document.querySelector('.emai');
const messageInput = document.querySelector('.mes');
const submitBtn = document.querySelector('.sub');

form.addEventListener('submit', e => {

  if(nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === ''){
    e.preventDefault();
    alert('Please fill out all fields before submitting.');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailPattern.test(emailInput.value)){
    e.preventDefault();
    alert('Please enter a valid email.');
    return;
  }

  setTimeout(() => {
    alert(`Thank you ${nameInput.value}! Your message has been submitted.
Please check your email inbox (and Spam folder) to ensure it reaches us.`);
  }, 100);

  // Optional: Redirect to thank-you page
  const nextPage = form.querySelector('input[name="_next"]');
  if(nextPage){
    setTimeout(() => {
      window.location.href = nextPage.value;
    }, 200); // small delay to allow submission
  }
});
