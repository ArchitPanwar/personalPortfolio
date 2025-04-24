// ========================== Menu Toggle ==========================
let navIcon = document.querySelector("#menu-item");
let navbar = document.querySelector(".navbar");

navIcon.onclick = () => {
    navIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ========================== Scroll Section Active Link ==========================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    // Remove navbar and icon on scroll
    navIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

// ========================== Scroll Reveal ==========================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.homeImage, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'top' });

// ========================== Typed.js ==========================
const typed = new Typed('.multiple-text', {
    strings: ["Frontend Developer", "Web Designer", "YouTuber"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
