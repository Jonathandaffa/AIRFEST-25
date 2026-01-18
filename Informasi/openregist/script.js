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

// Image Hover Effect
document.addEventListener('DOMContentLoaded', function() {
    const webcreateImage = document.querySelector('.webcreate-image img');
    
    if (webcreateImage) {
        webcreateImage.addEventListener('mouseover', () => {
            webcreateImage.style.transform = 'scale(1.05)';
            webcreateImage.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))';
        });

        webcreateImage.addEventListener('mouseout', () => {
            webcreateImage.style.transform = 'scale(1)';
            webcreateImage.style.filter = 'none';
        });
    }
});
