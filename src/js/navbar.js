const navSlide = () => {
  const bars = document.querySelector(".navbar__bars");
  const nav = document.querySelector(".navbar__menu--links");
  const navLinks = document.querySelectorAll(".navbar__menu--links li");
  //toggle Nav
  bars.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate links
    navLinks.forEach((link) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards`;
      }
    });
  });
};
navSlide();

window.addEventListener("scroll", () => {
  const navscroll = document.querySelectorAll(".navbar__menu--link a");

  // const scrollY = window.scrollY > 500;
  for (var i = 0; i < navscroll.length; i++) {
    navscroll[i].classList.toggle("active-scroll", scrollY > 500);
  }
});

window.addEventListener("scroll", () => {
  const logoscroll = document.querySelector(".navbar__logo");
  // const scrollY = window.scrollY > 500;
  logoscroll.classList.toggle("active-scroll", scrollY > 500);
});

window.addEventListener("scroll", () => {
  const bgscroll = document.querySelector(".navbar");
  // const scrollY = window.scrollY > 500;
  bgscroll.classList.toggle("active-bg", scrollY > 0);
});
