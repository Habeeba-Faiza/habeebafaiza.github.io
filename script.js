/* ================================
   ✨ PREMIUM DARK SPARKLE THEME ✨
   Advanced Vanilla JavaScript
   ================================ */

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const pageLoader = document.getElementById('pageLoader');
const sparklesContainer = document.getElementById('sparklesContainer');

// ================================
// Page Loader
// ================================

window.addEventListener('load', () => {
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
        }, 1500);
    }
});

// ================================
// Sparkle Generator
// ================================

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparklesContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
}

// Generate random sparkles on scroll
let sparkleInterval;
window.addEventListener('scroll', () => {
    if (!sparkleInterval) {
        sparkleInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight + window.scrollY;
                if (Math.random() > 0.5) {
                    createSparkle(x, y);
                }
            }
        }, 200);
    }
});

window.addEventListener('scroll', () => {
    if (sparkleInterval && window.scrollY === 0) {
        clearInterval(sparkleInterval);
        sparkleInterval = null;
    }
});

// ================================
// Hamburger Menu Toggle
// ================================

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ================================
// Smooth Scroll Navigation
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Active Navigation Link on Scroll
// ================================

window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ================================
// Advanced Scroll Animations
// ================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.service-card, .testimonial-card, .timeline-item, .skill-badge, .contact-method').forEach(el => {
    scrollObserver.observe(el);
});

// ================================
// Advanced Scroll Effects
// ================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.15)';
        navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.15)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.1)';
    }
});

// ================================
// Advanced Scroll to Top Button
// ================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #0099ff);
    color: #0a0e27;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.15) translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 0 60px rgba(0, 212, 255, 0.8)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1) translateY(0)';
    scrollTopBtn.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.5)';
});

// ================================
// Enhanced Button Sparkle Effect
// ================================

document.querySelectorAll('.btn-glow').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const sparkle = document.createElement('span');
        sparkle.className = 'btn-sparkle';
        sparkle.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
        sparkle.style.setProperty('--ty', (Math.random() - 0.5) * 100 + 'px');
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';

        button.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
    });
});

// ================================
// Mouse Glow Effect for Cards
// ================================

document.querySelectorAll('.card-glow').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

// ================================
// Contact Methods Interaction
// ================================

document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('mouseenter', () => {
        method.style.transform = 'translateY(-15px)';
    });

    method.addEventListener('mouseleave', () => {
        method.style.transform = 'translateY(0)';
    });
});

// ================================
// Service Cards Stagger Animation
// ================================

document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ================================
// Keyboard Accessibility
// ================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ================================
// Console Branding
// ================================

// ================================
// Navbar Scroll Effect
// ================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// ================================
// Scroll to Top Button
// ================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}, { passive: true });

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const styles = {
    title: 'color: #00f5ff; font-size: 18px; font-weight: bold;',
    subtitle: 'color: #0099ff; font-size: 12px;'
};

console.log(
    `%c✨ Habeeba Faiza - Premium Portfolio 2026\n%c🌍 Admission Officer & Study Abroad Specialist\n📱 Built with HTML5, CSS3 & Vanilla JavaScript | 🎨 Modern Glassmorphism Theme | ⚡ High Performance`,
    styles.title,
    styles.subtitle
);

// ================================
// Enhanced Scroll Performance
// ================================

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        // Optimized scroll handling
    });
}, { passive: true });

// ================================
// Dynamic Color Animation
// ================================

setInterval(() => {
    const colors = ['#00d4ff', '#0099ff', '#7c3aed'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelectorAll('.text-glow').forEach(el => {
        el.style.color = randomColor;
    });
}, 5000);

