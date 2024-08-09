// Navigation 
$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});


// Icon 
document.addEventListener('DOMContentLoaded', () => {
  const iconBoxes = document.querySelectorAll('.icon-box');

  iconBoxes.forEach(box => {
    box.addEventListener('click', () => {
      alert(`You clicked on ${box.querySelector('p').textContent}`);
    });
  });
});



// animation
