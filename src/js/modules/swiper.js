import Swiper, { Navigation, Pagination } from "swiper";
import {
  A11y,
  Autoplay,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  // Grid,
  HashNavigation,
  History,
  Keyboard,
  Manipulation,
  Mousewheel,
  // Navigation,
  // Pagination,
  Parallax,
  Scrollbar,
  // Swiper,
  Thumbs,
  Virtual,
  Zoom,
} from "swiper";
// // import styles bundle
// // import "swiper/swiper-element-bundle.js";

// // init Swiper:
const swiperRooms = new Swiper(".rooms__img-slider", {
  modules: [
    A11y,
    Autoplay,
    Controller,
    EffectCards,
    EffectCoverflow,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip,
    FreeMode,
    // Grid,
    HashNavigation,
    History,
    Keyboard,
    Manipulation,
    Mousewheel,
    Navigation,
    Pagination,
    Parallax,
    Scrollbar,
    // Swiper,
    Thumbs,
    Virtual,
    Zoom,
  ],
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    // dynamicBullets: true,
    // type: "fraction",
    type: "fraction",
  },
  hasNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 30,
  loop: true,
  speed: 800,
  // direction: "horizontal",
  // initialSlide: 1,
  // autoHeight: true,
  // mousewheel: true,
  // keyboard: true,
  // effect: "fade",
  // effect: "coverflow",
  // effect: "creative",
  // loop: true,
  // effect: "cube",
  // freeMode: true,
  // slidesPerView: 1,
  // dynamicBullets: true,
  // allowSlideNext: false,
  // centeredSlides: false,
  // spaceBetween: 32,

  // slidesPerGroup: 2,
});
const swiperContentRooms = new Swiper(".rooms__content-slider", {
  modules: [
    A11y,
    Autoplay,
    Controller,
    EffectCards,
    EffectCoverflow,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip,
    FreeMode,
    // Grid,
    // HashNavigation,
    History,
    Keyboard,
    Manipulation,
    Mousewheel,
    Navigation,
    Pagination,
    Parallax,
    Scrollbar,
    // Swiper,
    Thumbs,
    Virtual,
    Zoom,
  ],
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   // el: ".swiper-pagination",
  //   // clickable: true,
  //   // dynamicBullets: true,
  //   // type: "fraction",
  //   type: "fraction",
  // },
  // hasNavigation: {
  //   watchState: true,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 30,
  loop: true,
  speed: 800,
  // direction: "horizontal",
  // initialSlide: 1,
  // autoHeight: true,
  // mousewheel: true,
  // keyboard: true,
  // effect: "fade",
  // effect: "coverflow",
  // effect: "creative",
  // loop: true,
  // effect: "cube",
  // freeMode: true,
  // slidesPerView: 1,
  // dynamicBullets: true,
  // allowSlideNext: false,
  // centeredSlides: false,
  // spaceBetween: 32,

  // slidesPerGroup: 2,
});

swiperRooms.controller.control = swiperContentRooms;
swiperContentRooms.controller.control = swiperRooms;
