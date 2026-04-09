
    // mobile hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    const setMenuState = (isOpen) => {
      navLinks.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => {
      const isOpen = !navLinks.classList.contains('active');
      setMenuState(isOpen);
    });

    hamburger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const isOpen = !navLinks.classList.contains('active');
        setMenuState(isOpen);
      }
    });

    // close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        setMenuState(false);
      });
    });

    // smooth scroll + offset for sticky navbar (just browser smooth scroll is already set, but ensure)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const offset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      });
    });

    document.addEventListener('click', (event) => {
      const clickedOutsideMenu = !navLinks.contains(event.target) && !hamburger.contains(event.target);
      if (window.innerWidth <= 900 && navLinks.classList.contains('active') && clickedOutsideMenu) {
        setMenuState(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        setMenuState(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        setMenuState(false);
      }
    });

    // Contact Form Validation + success message (demo)
    const contactForm = document.getElementById('contactForm');
    const feedbackDiv = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        feedbackDiv.innerHTML = '<span style="color:#d45a7a;"><i class="fas fa-exclamation-circle"></i> Please fill all fields 🌸</span>';
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        feedbackDiv.innerHTML = '<span style="color:#d45a7a;"><i class="fas fa-envelope"></i> Enter a valid email, darling ✨</span>';
        return;
      }
      // success simulation
      feedbackDiv.innerHTML = '<span style="color:#b36582;"><i class="fas fa-check-circle"></i> Thanks, love! Naciba will get back to you soon 💖</span>';
      contactForm.reset();
      setTimeout(() => {
        feedbackDiv.innerHTML = '';
      }, 4000);
    });

    // dynamic year for footer elegance (optional)
    const yearSpan = document.querySelector('.copyright p');
    if (yearSpan) {
      const currentYear = new Date().getFullYear();
      if (yearSpan.innerText.includes('2025')) {
        yearSpan.innerText = yearSpan.innerText.replace('2025', currentYear);
      }
    }

    // additional hover/glow for material cards — pure visual
    // just for micro-interactivity: add console? not needed.
    // implement scroll to top for better experience? not needed but extra effect
    // done
