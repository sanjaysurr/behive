// Handle window resize
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger');
  const navLinks = document.querySelector('#navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100; // Account for fixed nav
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Count-up animation for Facts & Figures
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".fact-number");
  let counted = false;

  function animateCounters() {
    if (counted) return;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const duration = 1500;
      const increment = Math.ceil(target / (duration / 30));
      let count = 0;

      const update = () => {
        count += increment;
        if (count > target) count = target;
        counter.textContent = count + "+";
        if (count < target) requestAnimationFrame(update);
      };

      update();
    });

    counted = true;
  }

  function handleScroll() {
    const section = document.getElementById("facts");
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animateCounters();
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    // Update aria-expanded for accessibility
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Optional: Close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});



  const heroText = document.getElementById('hero-text');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroText.style.opacity = 1;
        heroText.style.animation = 'fadeInLeft 1s ease forwards';
      }
    });
  });

  observer.observe(heroText);

  



