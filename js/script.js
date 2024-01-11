//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//Services Section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var openModal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) =>{
    learnmoreBtn.addEventListener("click", () => {
        openModal(i); 
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".img-card");
    const portfolioModals = document.querySelectorAll(".portfolio-model");
    
    portfolioItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            portfolioModals[index].classList.add("active");
        });
    });

    portfolioModals.forEach((modal) => {
        const closeBtn = modal.querySelector(".portfolio-close-btn");
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    });
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon"; 

const savedItem = localStorage.getItem("saved-theme");
const saveIcon = localStorage.getItem("saved-icon");

if(savedItem){
    document.body.classList[savedItem === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
//scroll to tap button 
const scrollTopbtn = document.querySelector(".scrollTopTop-btn");

window.addEventListener("scroll", function(){
    scrollTopbtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelector("section");
    const scrollY = window.pageYoffset;

    sections.forEach(current => {
        let sectionHeight = current.offestHeight;
        let sectionTop = current.offestTop - 50;
        let id = current.getAttribute("id");

        if(scroll > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-item a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-item a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem =  document.querySelectorAll("nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active")
});

navItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//scroll reveal animations
//common reveal options to create reveal animations 
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100,
});
//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval:'200' });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });