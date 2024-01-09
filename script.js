// script.js

// Toggle mobile menu
document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
});

// Owl Carousel Initialization
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

//  WoW effect

new WOW().init();

function loadMoreServices() {
    // Navigate to services.html when "Load more..." is clicked
    window.location.href = 'services.html';
  }
  
   
  