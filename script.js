//countdown

// Countdown Timer
function updateCountdown() {
    const endDate = new Date('2025-05-01T00:00:00+07:00').getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.max(Math.floor(timeLeft / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
    const minutes = Math.max(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)), 0);
    const seconds = Math.max(Math.floor((timeLeft % (1000 * 60)) / 1000), 0);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
    lastScrollY = window.scrollY;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Glitch Effect Animation
const glitchTexts = document.querySelectorAll('.glitch-text');

glitchTexts.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.style.animation = 'none';
        text.offsetHeight;
        text.style.animation = null;
    });
});

// Parallax Effect for Hero Section
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Mobile Menu Control
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mascot = document.querySelector('.mascot-content img');
    const container = document.querySelector('.mascot-content');

    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const xPos = mouseX / width;
        const yPos = mouseY / height;

        const maxRotation = 25;
        const xRotation = maxRotation * (0.5 - yPos);
        const yRotation = maxRotation * (xPos - 0.5);

        mascot.style.transform = `
            perspective(1000px)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)
            translateZ(100px)
            scale3d(1.08, 1.08, 1.08)
        `;

        mascot.style.filter = `
            drop-shadow(${-yRotation}px ${xRotation}px 30px rgba(0, 0, 0, 0.5))
        `;
    });

    container.addEventListener('mouseleave', () => {
        mascot.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateZ(0)
            scale3d(1, 1, 1)
        `;
        mascot.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))';
    });

    container.addEventListener('mouseenter', () => {
        mascot.style.transition = 'all 0.3s ease-out';
    });

    // Kode baru untuk logo-item.center
    const centerLogo = document.querySelector('.logo-item.center');
    const centerLogoImg = centerLogo.querySelector('img');

    centerLogo.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = centerLogo.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const xPos = mouseX / width;
        const yPos = mouseY / height;

        const maxRotation = 15;
        const xRotation = maxRotation * (0.5 - yPos);
        const yRotation = maxRotation * (xPos - 0.5);

        centerLogoImg.style.transform = `
            perspective(1000px)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)
            translateZ(30px)
            scale3d(1.02, 1.02, 1.02)
        `;

        centerLogoImg.style.filter = `
            drop-shadow(${-yRotation}px ${xRotation}px 10px rgba(0, 0, 0, 0.15))
        `;
    });

    centerLogo.addEventListener('mouseleave', () => {
        centerLogoImg.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateZ(0)
            scale3d(1, 1, 1)
        `;
        centerLogoImg.style.filter = 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1))';
    });

    centerLogo.addEventListener('mouseenter', () => {
        centerLogoImg.style.transition = 'all 0.3s ease-out';
    });
}); 