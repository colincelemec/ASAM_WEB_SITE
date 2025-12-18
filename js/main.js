// ==========================================
// ASAM - Main JavaScript File
// ==========================================

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Language Selector
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');

if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });
}

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (langDropdown && !e.target.closest('.lang-selector')) {
        langDropdown.classList.remove('active');
    }
});

// Translation System
let currentLanguage = localStorage.getItem('preferredLanguage') || 'it';

function translatePage(lang) {
    if (!translations || !translations[lang]) {
        console.error('Translations not found for language:', lang);
        return;
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            // Check if it's an input placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    console.log('Page translated to:', lang);
}

// Language selection
if (langDropdown) {
    const langLinks = langDropdown.querySelectorAll('a');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');

            // Update current language display
            switch(lang) {
                case 'it':
                    currentLangSpan.textContent = 'IT';
                    break;
                case 'fr':
                    currentLangSpan.textContent = 'FR';
                    break;
                case 'en':
                    currentLangSpan.textContent = 'EN';
                    break;
            }

            // Store language preference
            currentLanguage = lang;
            localStorage.setItem('preferredLanguage', lang);

            // Close dropdown
            langDropdown.classList.remove('active');

            // Apply translations
            translatePage(lang);
        });
    });
}

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'it';
    currentLanguage = savedLang;

    if (currentLangSpan) {
        switch(savedLang) {
            case 'it':
                currentLangSpan.textContent = 'IT';
                break;
            case 'fr':
                currentLangSpan.textContent = 'FR';
                break;
            case 'en':
                currentLangSpan.textContent = 'EN';
                break;
        }
    }

    // Apply translations on page load
    translatePage(savedLang);

    // Update copyright year dynamically
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});

// Smooth Scroll for anchor links
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

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #009639, #FCD116);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

// Show/Hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0) scale(1)';
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form Validation (for contact page)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#CE1126';
                input.addEventListener('input', () => {
                    input.style.borderColor = '';
                }, { once: true });
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Per favore compila tutti i campi obbligatori');
        }
    });
});

// Active Navigation Link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

console.log('ASAM Website - JavaScript Loaded Successfully! 🌍');
