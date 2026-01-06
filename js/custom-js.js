
var mybutton = document.getElementById("myBtn");
scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    if (mybutton && mybutton.style) {
      mybutton.style.display = "block";
    }
  } else {
    if (mybutton && mybutton.style) {
      mybutton.style.display = "none";
    }
  }
}


// navbar
    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.getElementById("navbar-placeholder");
      const scrollTrigger = 120; // px

      function handleScroll() {
        if (window.scrollY > scrollTrigger) {
          navbar.classList.add("navbar-scrolled");
        } else {
          navbar.classList.remove("navbar-scrolled");
        }
      }

      window.addEventListener("scroll", handleScroll);
    });
//  password-popup
    function validatePassword() {
    const correctPassword = "Ops"; // change as needed
    const input = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("errorMsg");

    if (input === correctPassword) {
      window.location.href = "sprint-ops.html";
    } else {
      errorMsg.style.display = "block";
    }
  }