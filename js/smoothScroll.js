const navbar = document.querySelector(".header__nav");
const links = navbar.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));

    if (section) {
      //   section.scrollIntoView({         //не кросс браузерное решение, чтобы исправить используется библиотека seamless scroll polyfill
      //     block: "start",        //iOS safari не работает, нужно доп решения(см выше)
      //     behavior: "smooth",
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      }); 
    }
  });
});
