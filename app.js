// Navbar show/hide on scroll to content section
window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= document.querySelector("#content").offsetTop) {
    document.querySelector(".navbar").style.display = "flex";
    document.querySelector(".location").style.marginTop = "40px";
    // document.getElementById("navbar").style.marginTop = "0px";
    // document.getElementById("navbar").style.opacity = "100%";
    // document.getElementById("navbar").style.pointerEvents = "auto";
  } else {
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".location").style.marginTop = "0px";
    // document.getElementById("navbar").style.marginTop = "0px";
    // document.getElementById("navbar").style.opacity = "0";
    // document.getElementById("navbar").style.pointerEvents querySellocation
  }
};
