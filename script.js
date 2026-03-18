// ----- LOADER -----
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }, 1500);
});

// ----- MOBILE MENU TOGGLE -----
document.addEventListener("DOMContentLoaded", () => {
  // Create mobile menu toggle
  const menuToggle = document.createElement('div');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  const nav = document.querySelector('nav');
  nav.appendChild(menuToggle);

  // Toggle menu
  menuToggle.addEventListener('click', () => {
    const ul = document.querySelector('nav ul');
    ul.classList.toggle('active');
    
    // Animate hamburger to X
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      const ul = document.querySelector('nav ul');
      ul.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});

// ----- REVEAL ON SCROLL -----
window.addEventListener("scroll", revealElements);

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    // Don't fade out the hero section
    if (el.classList.contains("hero")) return;

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

// Initialize reveal on load
revealElements();

// ----- FLOATING SHAPES -----
document.addEventListener("DOMContentLoaded", () => {
  const shapesContainer = document.querySelector(".shapes");

  for (let i = 0; i < 15; i++) {
    const shape = document.createElement("div");
    shape.classList.add("geo-shape");
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.animationDuration = `${6 + Math.random() * 10}s`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    shapesContainer.appendChild(shape);
  }
});

// ----- SMOOTH SCROLL -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ----- CURSOR TRAIL EFFECT -----
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("cursor-trail");
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (navUl && navUl.classList.contains('active') &&
      !nav.contains(e.target)) {
    navUl.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// ----- SCREENSHOT MODAL -----
function openScreenshots(images) {
  const modal = document.getElementById('screenshot-modal');
  const container = document.getElementById('modal-images');
  container.innerHTML = '';
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Project screenshot';
    container.appendChild(img);
  });
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeScreenshots(event) {
  if (event && event.target !== document.getElementById('screenshot-modal') && !event.target.classList.contains('modal-close')) {
    return;
  }
  const modal = document.getElementById('screenshot-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}