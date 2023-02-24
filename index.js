window.addEventListener("scroll", function() {
    var navbar = document.getElementById("nav");
    if (window.pageYOffset > 500) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
    }
  })

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          document.getElementById("nav").classList.add("navbar-scrolled");
          document.getElementById("nav").classList.add("fixed");
      } else {
          document.getElementById("nav").classList.remove("navbar-scrolled");
      }
  }