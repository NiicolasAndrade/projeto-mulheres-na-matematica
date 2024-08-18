// Inicializando o Swiper
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  mousewheel: true,
});

// Função de Navegação
function Navigate(indx) {
  for (let i of document.querySelectorAll(".Links li")) {
    i.classList.remove("activeLink");
  }
  document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
  swiper.slideTo(indx, 1000, true); // Navega para o slide específico
}

document.addEventListener("DOMContentLoaded", function () {
  // Inicialização do Swiper já foi feita, então não precisa repetir aqui.
});
