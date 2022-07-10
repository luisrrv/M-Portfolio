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

// Fullscreen pictures
const getPics = () => {}
const imgs = document.querySelectorAll(".pic");
const fullPage = document.querySelector("#fullpage");

  imgs.forEach(img => {
    img.addEventListener('click', () => {
      fullPage.style.backgroundImage = `url(${img.src})`;
      fullPage.style.display = 'block';
    });
  });

  // Scroll animations
const loadElements = document.querySelectorAll(".js-load");
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleLoadAnimation = () => {
  loadElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      // hideScrollElement(el)
    }
  })
}

window.addEventListener("DOMContentLoaded", () => {
  handleLoadAnimation();
});
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
