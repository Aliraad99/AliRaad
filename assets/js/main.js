/* ============================================================
   MODERN PORTFOLIO - MAIN JAVASCRIPT
   Enhanced with modern practices and improved functionality
   ============================================================ */

(function () {
  "use strict";

  /* ============================================================
     HEADER & NAVIGATION
     ============================================================ */

  const headerToggle = document.querySelector('.header-toggle');
  const navmenu = document.querySelector('.navmenu');

  if (headerToggle) {
    headerToggle.addEventListener('click', () => {
      navmenu.classList.toggle('active');
      headerToggle.classList.toggle('bi-list');
      headerToggle.classList.toggle('bi-x');
    });
  }

  // Close menu when clicking on a nav link
  document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navmenu.classList.contains('active')) {
        navmenu.classList.remove('active');
        if (headerToggle) {
          headerToggle.classList.add('bi-list');
          headerToggle.classList.remove('bi-x');
        }
      }
    });
  });

  /* ============================================================
     PRELOADER
     ============================================================ */

  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('done');
      setTimeout(() => preloader.style.display = 'none', 300);
    }
  });

  /* ============================================================
     SCROLL TOP BUTTON
     ============================================================ */

  const scrollTopBtn = document.getElementById('scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    });

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ============================================================
     NAVIGATION SCROLLSPY
     ============================================================ */

  const navLinks = document.querySelectorAll('.navmenu a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  /* ============================================================
     ANIMATED ON SCROLL (AOS) INITIALIZATION
     ============================================================ */

  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
      });
    }
  }

  window.addEventListener('load', initAOS);

  /* ============================================================
     TYPED.JS INITIALIZATION
     ============================================================ */

  function initTyped() {
    const typedElements = document.querySelectorAll('.typed');
    
    typedElements.forEach(element => {
      if (typeof Typed !== 'undefined') {
        const typedStrings = element.getAttribute('data-typed-items').split(',');
        new Typed(element, {
          strings: typedStrings.map(s => s.trim()),
          typeSpeed: 80,
          backSpeed: 40,
          backDelay: 2000,
          loop: true,
          showCursor: false
        });
      }
    });
  }

  window.addEventListener('load', initTyped);

  /* ============================================================
     PURE COUNTER INITIALIZATION
     ============================================================ */

  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /* ============================================================
     SMOOTH SCROLL HANDLING
     ============================================================ */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  /* ============================================================
     TOOL ICONS - BACKGROUND IMAGES
     ============================================================ */

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tool-icon').forEach(icon => {
      const logoUrl = icon.getAttribute('data-logo');
      if (logoUrl) {
        icon.style.backgroundImage = `url(${logoUrl})`;
        icon.style.backgroundSize = 'contain';
        icon.style.backgroundPosition = 'center';
        icon.style.backgroundRepeat = 'no-repeat';
      }
    });
  });

  /* ============================================================
     GLIGHTBOX INITIALIZATION
     ============================================================ */

  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true
    });
  }

  /* ============================================================
     ISOTOPE LAYOUT & FILTERING
     ============================================================ */

  document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
    const layout = isotopeItem.getAttribute('data-layout') || 'masonry';
    const defaultFilter = isotopeItem.getAttribute('data-default-filter') || '*';
    const sort = isotopeItem.getAttribute('data-sort') || 'original-order';

    imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
      let isotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: defaultFilter,
        sortBy: sort
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
        filterBtn.addEventListener('click', () => {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          filterBtn.classList.add('filter-active');
          isotope.arrange({ filter: filterBtn.getAttribute('data-filter') });
          
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        });
      });
    });
  });

  /* ============================================================
     SWIPER INITIALIZATION
     ============================================================ */

  function initSwiper() {
    document.querySelectorAll('.init-swiper').forEach(swiperElement => {
      const configElement = swiperElement.querySelector('.swiper-config');
      if (configElement) {
        const config = JSON.parse(configElement.innerHTML.trim());
        new Swiper(swiperElement, config);
      }
    });
  }

  if (typeof Swiper !== 'undefined') {
    window.addEventListener('load', initSwiper);
  }

  /* ============================================================
     FORM VALIDATION
     ============================================================ */

  // PHP Email Form Handler
  document.querySelectorAll('.php-email-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let thisForm = this;
      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-response');

      if (!action) {
        console.error('The form action property is not set!');
        return;
      }

      let formData = new FormData(thisForm);

      const submitButton = thisForm.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
        .then(response => response.text())
        .then(data => {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
          }

          if (data.indexOf('OK') > -1) {
            const sentMessage = thisForm.querySelector('.sent-message');
            if (sentMessage) {
              sentMessage.style.display = 'block';
            }
            thisForm.reset();
          } else {
            const errorMessage = thisForm.querySelector('.error-message');
            if (errorMessage) {
              errorMessage.innerHTML = data;
              errorMessage.style.display = 'block';
            }
          }
        })
        .catch(error => {
          console.error('Error:', error);
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
          }
        });
    });
  });

  /* ============================================================
     WAYPOINTS ANIMATION
     ============================================================ */

  if (typeof Waypoint !== 'undefined') {
    document.querySelectorAll('.skills-animation').forEach(element => {
      new Waypoint({
        element: element,
        handler: function () {
          element.querySelectorAll('.progress-bar').forEach(bar => {
            const width = bar.getAttribute('aria-valuenow');
            bar.style.width = width + '%';
          });
          this.destroy();
        },
        offset: '80%'
      });
    });
  }

  /* ============================================================
     THEME TOGGLE (Optional Dark/Light Mode)
     ============================================================ */

  function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme);

    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.classList.remove(currentTheme);
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  }

  initThemeToggle();

  /* ============================================================
     PERFORMANCE: DEFER NON-CRITICAL SCRIPTS
     ============================================================ */

  // Initialize everything on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAOS();
      initTyped();
    });
  } else {
    initAOS();
    initTyped();
  }

  /* ============================================================
     ACCESSIBILITY IMPROVEMENTS
     ============================================================ */

  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navmenu.classList.contains('active')) {
      navmenu.classList.remove('active');
      if (headerToggle) {
        headerToggle.classList.add('bi-list');
        headerToggle.classList.remove('bi-x');
      }
    }
  });

})();

/* ============================================================
   ADDITIONAL UTILITIES
   ============================================================ */

// Utility function for lazy loading images
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    images.forEach(img => imageObserver.observe(img));
  }
}

// Initialize lazy loading on page load
window.addEventListener('load', lazyLoadImages);

// Log portfolio loaded
console.log('%cAli Raad Portfolio Loaded', 'font-size: 14px; font-weight: bold; color: #0f62fe;');
console.log('%cCheck out the source code on GitHub: github.com/Aliraad99', 'font-size: 12px; color: #06b6d4;');
