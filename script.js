// Smooth scroll to sections (your existing code enhanced)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Wait for DOM to load before running animations
document.addEventListener('DOMContentLoaded', function() {
  
  // Project cards animation on scroll
  const projectCards = document.querySelectorAll('.project-card');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Start observing project cards
  projectCards.forEach(card => {
    cardObserver.observe(card);
  });
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (name && email && message) {
        alert('Thank you ' + name + '! Your message has been received. I\'ll get back to you soon.');
        contactForm.reset();
      } else {
        alert('Please fill in all fields before submitting.');
      }
    });
  }
  
  // Active navigation highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
  
  function highlightNavigation() {
    let current = '';
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', highlightNavigation);
  
  // Skills animation on scroll
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => {
    cardObserver.observe(category);
  });
  
  // Dynamic hero text rotation (optional enhancement)
  const heroText = document.querySelector('.hero p');
  if (heroText && heroText.textContent.includes('Full-Stack Developer')) {
    const originalText = heroText.textContent;
    const rotatingTexts = [
      'Full-Stack Developer & Security Enthusiast',
      'React.js & Node.js Expert',
      'AI Integration Specialist',
      'Enterprise Security Focused'
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
      heroText.style.opacity = '0.5';
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % rotatingTexts.length;
        heroText.textContent = rotatingTexts[currentIndex];
        heroText.style.opacity = '1';
      }, 300);
    }, 4000); // Change every 4 seconds
  }
  
  // Add scroll-to-top button
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-top-btn';
  scrollButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #0073e6;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,115,230,0.3);
    z-index: 1000;
  `;
  
  document.body.appendChild(scrollButton);
  
  // Show/hide scroll-to-top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollButton.style.opacity = '1';
      scrollButton.style.transform = 'translateY(0)';
    } else {
      scrollButton.style.opacity = '0';
      scrollButton.style.transform = 'translateY(20px)';
    }
  });
  
  // Scroll to top functionality
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Add hover effect to scroll button
  scrollButton.addEventListener('mouseenter', () => {
    scrollButton.style.background = '#005bb5';
    scrollButton.style.transform = 'translateY(0) scale(1.1)';
  });
  
  scrollButton.addEventListener('mouseleave', () => {
    scrollButton.style.background = '#0073e6';
    scrollButton.style.transform = 'translateY(0) scale(1)';
  });
  
});

// Console welcome message for developers
console.log('🚀 Sabarish K.L Portfolio - Loaded Successfully!');
console.log('💼 Full-Stack Developer & Security Enthusiast');
console.log('🔗 GitHub: https://github.com/SABARISH-17-16');
console.log('⭐ Featured Project: FitTracker AI');
console.log('Thanks for visiting my portfolio!');
