// Best Sellers

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  spaceBetween: 15,

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Breakpoints

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// Testimonials

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Slides

  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// Instagram

const instaSswiper = new Swiper(".instaSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Breakpoints

  breakpoints: {
    1920: {
      slidesPerView: 6,
      spaceBetween: 30,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
