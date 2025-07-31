function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('.slideshow').forEach(slideshow => {
const slides = slideshow.querySelectorAll('.project-slide');
let currentIndex = 0;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    });
};

const nextButtons = slideshow.querySelectorAll('.next-inline');
nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    });
});

showSlide(currentIndex);
});

