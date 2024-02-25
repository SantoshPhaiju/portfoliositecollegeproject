var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// * CODE HERE FOR THE REPONSIVE MENU

const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("closeIcon");
const menuBar = document.getElementById("mobileMenu");

hamburger.addEventListener("click", (e) => {
  console.log("hamburger clicked", menuBar);
  hamburger.style.display = "none";
  menuBar.style.left = "0px";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", (e) => {
  console.log("I am closeicon", e.target, menuBar);
  hamburger.style.display = "flex";
  menuBar.style.left = "2000px";
  closeIcon.style.display = "none";
});
