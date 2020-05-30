// -----------------------------------------------------
// pure js
// -----------------------------------------------------
// set header height
// -----------------------------------------------------
r(function () {
  document.getElementById("header").style.height = window.innerHeight + "px";
});
function r(f) {
  /in/.test(document.readyState) ? setTimeout("r(" + f + ")", 9) : f();
}

// -----------------------------------------------------
// back to top
// -----------------------------------------------------
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
