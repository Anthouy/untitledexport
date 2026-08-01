// hamburger menu icon
function myFunction(x) {
  x.classList.toggle("change");
}

/* When the user scrolls down, hide the topnav. When the user scrolls up, show the topnav */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50";
  }
  prevScrollpos = currentScrollPos;
}