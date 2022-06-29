var splides = new Splide(".splide__banners", {
  type: "loop",
  padding: "20%",
  gap: "1em",
  start: 1,
  pagination: false,
  speed: 800,
  easing: "ease-in-out",
});

splides.mount();
var splidess = new Splide(".reviews__slide", {
  type: "slide",
  perPage: 1,
});
splidess.mount();

var footer = new Splide(".splide__footer", {
  type: "loop",
  perPage: 6,
  arrows: false,
  pagination: false,
  autoplay: true,
});
footer.mount();

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
