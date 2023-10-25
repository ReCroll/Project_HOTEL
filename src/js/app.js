import * as flsFunctions from "./modules/functions.js";
import * as maskFunctions from "./modules/inputmask.js";

flsFunctions.isWebp();
// maskFunctions();

// import "./swiper10_swiper-bundle.min.js";
// import Swiper from "swiper";
// import "./swiper10_swiper-bundle.min.js";
// import "./swiper10_swiper-bundle.min.js";
// import "./jquery.js";

// import "./script.js";

("use strict");
// import "./net_npm_swiper@10_swiper-bundle.min.js";
// import "./swiper9.min.js";
// import "../components/js/net_npm_swiper10_swiper-bundle.min.js";

import "./jquery.js";
import { useDynamicAdapt } from "../js/dynamicAdapt.js";

useDynamicAdapt();
// import "../components/js/menu.js";
// import * as maskFunctions from "../js/modules/inputmask";
// import "./modules/inputmask";

// maskFunctions();

//======================================================================================================================

//======================================================================================================================

// ===================== MENU BURGER ==========================
let iconMenu = document.querySelector(".menu__icon");
let menuBody = document.querySelector(".menu__body");
const headerMenu = document.querySelector(".header__menu");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    menuBody.classList.toggle("__container");
    headerMenu.classList.toggle("_active");
  });
}
let menuMobile = document.getElementsByClassName("menu__body");
for (let index = 0; index < menuMobile.length; index++) {
  const el = menuMobile[index];
  iconMenu.addEventListener("click", function (e) {
    if (iconMenu.classList.contains("_active")) {
      let mobileMenuLinks = el.querySelectorAll("a");
      mobileMenuLinks.forEach((mobileLink) => {
        mobileLink.addEventListener("click", () => {
          mobileLink.closest(".menu__body").classList.remove("_active");
          mobileLink.closest(".menu__body").classList.remove("__container");
          mobileLink.closest(".header__menu").classList.remove("_active");
          iconMenu.classList.remove("_active");
          if (document.body.classList.contains("_lock")) {
            document.body.classList.remove("_lock");
          }
        });
      });
      // console.log(mobileLink);
      // console.log(mobileMenuLinks);
    }
    // console.log(el);
  });
}
// if (menu.classList.contains("_active")) {
//   let mobileMenuLinks = menu.getAttribute("a");
//   console.log(mobileMenuLinks);
// }
// });
// console.log(menuMobile);

//=====================================================================
//============================== ПРОКРУТКА ДО БЛОКА ===============
//========================== SCROLLING =======================

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
// console.log(menuLinks);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
    menuLink.addEventListener("click", sortingProducts);
  });

  function onMenuLinkClick(e) {
    // console.log(menuLinks);

    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      // console.log(menuLink.dataset.goto);
      // console.log(document.querySelector(menuLink.dataset.goto));
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

//============================================================
//=================================================================

// //========================= OUR PRODUCT HIDDEN ========================

// var visibility = {
//   visible: false,
// };
// // var proba = false;
// // console.log(visibility.visible);
// function changeVisibility() {
//   if (visibility.visible === true) {
//     visibility.visible = false;
//     return visibility;
//   } else {
//     return visibility;
//   }
//   // console.log(proba);
// }
// function productsHidden() {
//   let pageProductsWrapper = document.querySelector(
//     ".products__wrapper-content"
//   );
//   // console.log(pageProductsWrapper);
//   let pageProducts = pageProductsWrapper.querySelectorAll(
//     ".product__content-card"
//   );
//   let productButton = document.getElementById("product__button");
//   var arrayProducts = [];

//   pageProducts.forEach((pageProduct) => {
//     pageProduct.classList.add("_oll");
//     arrayProducts.push(pageProduct);
//     if (arrayProducts.length == pageProducts.length) {
//       getCardsHeight(arrayProducts);
//     }
//   });

//   function visibleInTabletScreen() {
//     for (let i = pageProducts.length - 1; i >= 8; i--) {
//       const middleVisible = pageProducts[i];
//       if (!middleVisible.classList.contains("_middle")) {
//         middleVisible.classList.add("_middle");
//       }
//     }
//   }
//   visibleInTabletScreen();

//   function visibleInMobileScreen(params) {
//     let deviceWidth = window.innerWidth;
//     if (params > 500 && deviceWidth < 460 && deviceWidth >= 400) {
//       for (let i = pageProducts.length - 1; i >= 4; i--) {
//         const middleVisible = pageProducts[i];
//         if (!middleVisible.classList.contains("_middle")) {
//           middleVisible.classList.add("_middle");
//         }
//       }
//     }
//     if (deviceWidth < 400) {
//       for (let i = pageProducts.length - 1; i >= 4; i--) {
//         const middleVisible = pageProducts[i];
//         if (!middleVisible.classList.contains("_middle")) {
//           middleVisible.classList.add("_middle");
//         }
//       }
//     }
//     if (params < 500 && deviceWidth > 400) {
//       for (let i = 4; i < 8; i++) {
//         const middleVisible = pageProducts[i];
//         if (middleVisible.classList.contains("_middle")) {
//           middleVisible.classList.remove("_middle");
//         }
//       }
//     }
//   }

//   function getCardsHeight(obj) {
//     let style = window.getComputedStyle(obj[0]).height.replace("px", " ");
//     visibleInMobileScreen(style);
//     window.addEventListener("resize", function () {
//       style = window.getComputedStyle(obj[0]).height.replace("px", " ");
//       visibleInMobileScreen(style);
//     });
//   }
//   var productBtnText = ["Show Oll", "Hide Cards"];

//   function changeButtonText(elem, array) {
//     if (elem.textContent == array[0]) {
//       elem.textContent = array[1];
//     } else {
//       elem.textContent = array[0];
//     }
//   }

//   productButton.addEventListener("click", function (e) {
//     for (let showOll = 0; showOll < pageProducts.length; showOll++) {
//       const ollVisible = pageProducts[showOll];
//       // console.log(ollVisible);
//       ollVisible.classList.toggle("_visible__oll");
//       if (ollVisible.classList.contains("_hide")) {
//         ollVisible.classList.remove("_hide");
//         ollVisible.classList.add("_visible__oll");
//       }
//       if (ollVisible.classList.contains("_show")) {
//         ollVisible.classList.remove("_show");
//         ollVisible.classList.add("_visible__oll");
//       }
//       if (
//         ollVisible.classList.contains("_likes") &&
//         headerIconLikes.classList.contains("_like__active")
//       ) {
//         ollVisible.classList.add("_show__like-cards");
//         ollVisible.classList.remove("_hide__like-cards");
//       }
//     }
//     changeButtonText(productButton, productBtnText);
//   });

//   //=========================== scroll in products ==================

//   const scrollingMode = document.querySelectorAll("._scrolling__mode");
//   if (scrollingMode.length > 0) {
//     scrollingMode.forEach((menuLink) => {
//       menuLink.addEventListener("click", onMoreButtonClick);
//     });
//     function onMoreButtonClick(e) {
//       const menuLink = e.target;
//       if (
//         menuLink.dataset.goto &&
//         document.querySelector(menuLink.dataset.goto) &&
//         visibility.visible == true
//       ) {
//         const gotoBlock = document.querySelector(menuLink.dataset.goto);
//         const gotoBlockValue =
//           gotoBlock.getBoundingClientRect().top +
//           scrollY -
//           document.querySelector("header").offsetHeight -
//           600;

//         window.scrollTo({
//           top: gotoBlockValue,
//           behavior: "smooth",
//         });
//         visibility.visible = false;
//         e.preventDefault();
//       } else if (
//         menuLink.dataset.goto &&
//         document.querySelector(menuLink.dataset.goto) &&
//         visibility.visible == false
//       ) {
//         visibility.visible = true;
//       }
//     }
//   }
// }
// productsHidden();

// //=================================================================

// //========================= SORTING PRODUCT ===========================

// function sortingProducts(e) {
//   changeVisibility();
//   let pageProductsWrapper = document.querySelector(
//     ".products__wrapper-content"
//   );
//   // console.log(pageProductsWrapper);
//   let pageProducts = pageProductsWrapper.querySelectorAll(
//     ".product__content-card"
//   );
//   if (
//     e.target.dataset.cat &&
//     document.getElementsByClassName(e.target.dataset.cat)
//   ) {
//     const bigCat = e.target.closest("._sorting").querySelector(".menu__link");
//     const bigCatAttr = bigCat.dataset.cat;
//     // let getSubCard = [];
//     let productButton = document.getElementById("product__button");
//     var productBtnText = ["Show Oll", "Hide Cards"];
//     if (e.target.classList.contains("_cl")) {
//       for (let i = 0; i < pageProducts.length; i++) {
//         const ollCard = pageProducts[i];
//         if (ollCard.classList.contains("_hide")) {
//           ollCard.classList.remove("_hide");
//         } else if (ollCard.classList.contains("_show")) {
//           ollCard.classList.remove("_show");
//         }
//         showCheckedProd(ollCard);
//       }
//       function showCheckedProd(ollCard) {
//         if (!ollCard.classList.contains(bigCatAttr)) {
//           // ollCard.classList.add("_visible__oll");
//           ollCard.classList.add("_hide");
//           productButton.textContent = productBtnText[0];
//         } else {
//           ollCard.classList.add("_show");
//         }
//       }
//     }
//     if (e.target.classList.contains("_scl")) {
//       const sclCatAttr = e.target.dataset.cat;

//       for (let i = 0; i < pageProducts.length; i++) {
//         const ollCard = pageProducts[i];
//         if (ollCard.classList.contains("_hide")) {
//           ollCard.classList.remove("_hide");
//         } else if (ollCard.classList.contains("_show")) {
//           ollCard.classList.remove("_show");
//         }
//         showCheckedSubMenuProd(ollCard);
//       }
//       function showCheckedSubMenuProd(ollCard) {
//         if (!ollCard.classList.contains(sclCatAttr)) {
//           ollCard.classList.add("_hide");
//           productButton.textContent = productBtnText[0];
//         }
//         if (!ollCard.classList.contains(bigCatAttr)) {
//           ollCard.classList.add("_hide");
//         }
//         if (ollCard.classList.contains(sclCatAttr)) {
//           if (ollCard.classList.contains(bigCatAttr)) {
//             ollCard.classList.add("_show");
//           }
//         }
//       }
//     }

//     // const showBlocks = document.getElementsByClassName(e.target.dataset.cat);
//   }

//   e.preventDefault();
// }
// // sortingProducts();
// //=====================================================================
// // ============================= GALLERY ==========================

// let furnitureImgWrapperBlocks = document.querySelectorAll(
//   ".furniture__img-wrapper-blocks"
// );
// for (let index = 0; index < furnitureImgWrapperBlocks.length; index++) {
//   const furnitureImgWrapperBlock = furnitureImgWrapperBlocks[index];

//   furnitureImgWrapperBlock.addEventListener("click", function (e) {
//     let checkedRows = e.target.closest(".row__flex-column");
//     let checkedImgs = checkedRows.querySelectorAll(
//       ".furniture__img-wrapper-blocks"
//     );

//     checkedActions(checkedImgs);

//     if (furnitureImgWrapperBlock.classList.contains("_active")) {
//       furnitureImgWrapperBlock.classList.remove("_active");
//       setTimeout(() => {
//         furnitureImgWrapperBlock.classList.remove("_index-mode");
//       }, 400);
//       checkedActions();
//       closeHeightMode();
//     } else if (!furnitureImgWrapperBlock.classList.contains("_active")) {
//       for (let i = 0; i < furnitureImgWrapperBlocks.length; i++) {
//         const checkedActive = furnitureImgWrapperBlocks[i];
//         if (checkedActive.classList.contains("_active")) {
//           checkedActive.classList.remove("_active");
//           closeHeightMode();
//         }
//       }
//       e.target
//         .closest(".furniture__img-wrapper-blocks")
//         .classList.add("_active");
//       if (e.target.closest(".center")) {
//         reHeightMode();
//       }
//     }
//   });
// }

// function reHeightMode() {
//   for (let c = 0; c < furnitureImgWrapperBlocks.length; c++) {
//     const reHeightRow = furnitureImgWrapperBlocks[c];
//     if (reHeightRow.classList.contains("_re-height")) {
//       reHeightRow.classList.remove("_re-height");
//     }
//     if (
//       reHeightRow.closest(".left__row-bottom") ||
//       reHeightRow.closest(".right__row-top")
//     ) {
//       reHeightRow.classList.add("_re-height");
//     }
//   }
// }
// function closeHeightMode() {
//   for (let cl = 0; cl < furnitureImgWrapperBlocks.length; cl++) {
//     const reHeightRow = furnitureImgWrapperBlocks[cl];
//     if (reHeightRow.classList.contains("_re-height")) {
//       reHeightRow.classList.remove("_re-height");
//     }
//   }
// }

// let furnitureImgWrapper = document.querySelector(".furniture__img-wrapper");
// function checkedActions(checkedImgs) {
//   let checkedOllBlocks = furnitureImgWrapper.querySelectorAll(
//     ".furniture__img-wrapper-blocks"
//   );
//   for (let rows = 0; rows < checkedOllBlocks.length; rows++) {
//     const removedCheck = checkedOllBlocks[rows];
//     if (removedCheck.classList.contains("_check")) {
//       removedCheck.classList.remove("_check");
//     }
//   }
//   if (checkedImgs) {
//     for (let checked = 0; checked < checkedImgs.length; checked++) {
//       var checkedImg = checkedImgs[checked];
//       checkedImg.classList.add("_check");
//     }
//   }
// }
// //=================================================================
// //======================= ПЕРЕМІЩЕННЯ ОБ’ЄКТІВ =================
// (function () {
//   let original_position = [];
//   let da_elements = document.querySelectorAll("[data-da]");
//   let da_elements_array = [];
//   let da_match_media = [];

//   if (da_elements.length > 0) {
//     let number = 0;
//     for (let index = 0; index < da_elements.length; index++) {
//       const da_element = da_elements[index];
//       const da_move = da_element.getAttribute("data-da");
//       const da_array = da_move.split(",");
//       if (da_array.length == 3) {
//         da_element.setAttribute("data-da-index", number);
//         original_position[number] = {
//           parent: da_element.parentNode,
//           index: index_in_parent(da_element),
//         };
//         da_elements_array[number] = {
//           element: da_element,
//           destination: document.querySelector("." + da_array[0].trim()),
//           place: da_array[2].trim(),
//         };
//         number++;
//       }
//     }
//     dynamic_adapt_sort(da_elements_array);

//     for (let index = 0; index < da_elements_array.length; index++) {
//       const el = da_elements_array[index];
//       const da_breakpoint = el.breakpoint;
//       const da_type = "max"; //для MobileFirst замінити на "min"

//       da_match_media.push(
//         window.matchMedia("(" + da_type + "-width: " + da_breakpoint + "px)")
//       );
//       da_match_media[index].addEventListener(dynamic_adapt);
//     }
//   }
//   function dynamic_adapt(e) {
//     for (let index = 0; index < da_elements_array.length; index++) {
//       const el = da_elements_array[index];
//       const da_element = el.element;
//       const da_destination = el.destination;
//       const da_place = el.place;
//       const da_breakpoint = el.breakpoint;
//       const da_classname = "_dynamic_adapt_" + da_breakpoint;

//       if (da_match_media[index].matches) {
//         if (!da_element.classList.contains(da_classname)) {
//           let actual_index;
//           if (da_place == "first") {
//             actual_index = index_of_elements(da_destination)[0];
//           } else if (da_place == "last") {
//             actual_index =
//               index_of_elements(da_destination)[
//                 index_of_elements(da_destination).length
//               ];
//           } else {
//             actual_index = index_of_elements(da_destination)[da_place];
//           }
//           da_destination.insertBefore(
//             da_element,
//             da_destination.children[actual_index]
//           );
//           da_element.classList.add(da_classname);
//         }
//       } else {
//         if (da_element.classList.contains(da_classname)) {
//           dynamic_adapt_back(da_element);
//           da_element.classList.remove(da_classname);
//         }
//       }
//     }
//     custom_adapt();
//   }
//   dynamic_adapt();

//   function dynamic_adapt_back(el) {
//     const da_index = el.getAttribute("data-da-index");
//     const original_place = original_position[da_index];
//     const parent_place = original_place["parent"];
//     const index_place = original_place["index"];
//     const actual_index = index_of_elements(parent_place, true)[index_place];
//     parent_place.insertBefore(el, parent_place.children[actual_index]);
//   }

//   function index_in_parent(el) {
//     var children = Array.prototype.slice.call(el.parentNode.children);
//     return children.indexOf(el);
//   }

//   function index_of_elements(parent, back) {
//     const children = parent.children;
//     const children_array = [];
//     for (let i = 0; i < children.length; i++) {
//       const children_element = children[i];
//       if (back) {
//         children_array.push(i);
//       } else {
//         if (children_element.getAttribute("data-da") == null) {
//           children_array.push(i);
//         }
//       }
//     }
//     return children_array;
//   }
//   function dynamic_adapt_sort(arr) {
//     arr.sort(function (a, b) {
//       if (a.breakpoint > b.breakpoint) {
//         return -1;
//       } else {
//         return 1;
//       } // для MobileFirst поміняти
//     });
//     arr.sort(function (a, b) {
//       if (a.place > b.place) {
//         return 1;
//       } else {
//         return -1;
//       }
//     });
//   }
//   function custom_adapt() {
//     const viewport_width = Math.max(
//       document.documentElement.clientWidth,
//       window.innerWidth || 0
//     );
//   }
//   window.addEventListener("resize", function (event) {
//     custom_adapt(viewport_width);
//   });
// });

// //============================ SWIPERS ===================
// import Swiper, { Navigation, Pagination } from "swiper";
// import {
//   A11y,
//   Autoplay,
//   Controller,
//   EffectCards,
//   EffectCoverflow,
//   EffectCreative,
//   EffectCube,
//   EffectFade,
//   EffectFlip,
//   FreeMode,
//   // Grid,
//   HashNavigation,
//   History,
//   Keyboard,
//   Manipulation,
//   Mousewheel,
//   // Navigation,
//   // Pagination,
//   Parallax,
//   Scrollbar,
//   // Swiper,
//   Thumbs,
//   Virtual,
//   Zoom,
// } from "swiper";
// // // import styles bundle
// // import "swiper/swiper-element-bundle.js";

// // init Swiper:
// const swiperPrice = new Swiper(".swiper__price", {
//   modules: [
//     A11y,
//     Autoplay,
//     Controller,
//     EffectCards,
//     EffectCoverflow,
//     EffectCreative,
//     EffectCube,
//     EffectFade,
//     EffectFlip,
//     FreeMode,
//     // Grid,
//     HashNavigation,
//     History,
//     Keyboard,
//     Manipulation,
//     Mousewheel,
//     Navigation,
//     Pagination,
//     Parallax,
//     Scrollbar,
//     // Swiper,
//     Thumbs,
//     Virtual,
//     Zoom,
//   ],
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
//   // pagination: {
//   //   el: ".swiper-pagination",
//   //   clickable: true,
//   //   // dynamicBullets: true,
//   //   // type: "fraction",
//   // },
//   // hasNavigation: {
//   //   watchState: true,
//   // },

//   direction: "horizontal",
//   initialSlide: 1,
//   autoHeight: true,
//   // mousewheel: true,
//   // keyboard: true,
//   // effect: "fade",
//   // effect: "coverflow",
//   // effect: "creative",
//   // loop: true,
//   // effect: "cube",
//   // freeMode: true,
//   // slidesPerView: 1,
//   // dynamicBullets: true,
//   // allowSlideNext: false,
//   // centeredSlides: false,
//   spaceBetween: 32,

//   // slidesPerGroup: 2,
// });

// const swiper = new Swiper(".swiper", {
//   modules: [
//     A11y,
//     Autoplay,
//     Controller,
//     EffectCards,
//     EffectCoverflow,
//     EffectCreative,
//     EffectCube,
//     EffectFade,
//     EffectFlip,
//     FreeMode,
//     // Grid,
//     HashNavigation,
//     History,
//     Keyboard,
//     Manipulation,
//     Mousewheel,
//     Navigation,
//     Pagination,
//     Parallax,
//     Scrollbar,
//     // Swiper,
//     Thumbs,
//     Virtual,
//     Zoom,
//   ],
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     // mousewheel: true,
//     // keyboard: true,
//     // dynamicBullets: true,
//     // type: "fraction",
//   },
//   // controller: {
//   //   control: swiperPrice,
//   // },
//   // hasNavigation: {
//   //   watchState: true,
//   // },

//   direction: "horizontal",
//   initialSlide: 1,

//   // loop: true,
//   // effect: "cube",
//   // freeMode: true,
//   // slidesPerView: 1,
//   // dynamicBullets: true,
//   // allowSlideNext: false,
//   // centeredSlides: false,
//   spaceBetween: 10,
//   breakpoints: {
//     519.98: {
//       spaceBetween: 20,
//     },
//     767.98: {
//       spaceBetween: 32,
//     },
//     // // when window width is >= 640px
//     // 640: {
//     //   slidesPerView: 4,
//     //   spaceBetween: 40
//     // }
//   },

//   // slidesPerGroup: 2,
// });

// // =============== передаємо керування один одному ===============
// swiper.controller.control = swiperPrice;
// swiperPrice.controller.control = swiper;

// const swiperTwo = new Swiper(".swiper__two", {
//   modules: [
//     A11y,
//     Autoplay,
//     Controller,
//     EffectCards,
//     EffectCoverflow,
//     EffectCreative,
//     EffectCube,
//     EffectFade,
//     EffectFlip,
//     FreeMode,
//     // Grid,
//     HashNavigation,
//     History,
//     Keyboard,
//     Manipulation,
//     Mousewheel,
//     Navigation,
//     Pagination,
//     Parallax,
//     Scrollbar,
//     // Swiper,
//     Thumbs,
//     Virtual,
//     Zoom,
//   ],
//   navigation: {
//     nextEl: ".swiper__two-button-next",
//     // prevEl: ".swiper__two-button-prev",
//   },
//   pagination: {
//     // el: ".swiper-pagination",
//     el: ".swiper-pagination_two",
//     clickable: true,
//     // dynamicBullets: true,
//     // type: "fraction",
//   },
//   // hasNavigation: {
//   //   watchState: true,
//   // },

//   direction: "horizontal",
//   initialSlide: 0,
//   loop: true,
//   // effect: "cube",
//   // freeMode: true,
//   slidesPerView: 1,
//   // dynamicBullets: true,
//   // allowSlideNext: false,
//   // centeredSlides: false,
//   spaceBetween: 20,
//   breakpoints: {
//     359.98: {
//       slidesPerView: 1.35,
//     },
//     519.98: {
//       slidesPerView: 1,
//     },
//     767.98: {
//       slidesPerView: 1.5,
//       spaceBetween: 32,
//     },
//     // when window width is >= 480px
//     1023.98: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // // when window width is >= 640px
//     // 640: {
//     //   slidesPerView: 4,
//     //   spaceBetween: 40
//     // }
//   },

//   // slidesPerGroup: 2,
// });
// const swiperThree = new Swiper(".swiper__three", {
//   modules: [
//     A11y,
//     Autoplay,
//     Controller,
//     EffectCards,
//     EffectCoverflow,
//     EffectCreative,
//     EffectCube,
//     EffectFade,
//     EffectFlip,
//     FreeMode,
//     // Grid,
//     HashNavigation,
//     History,
//     Keyboard,
//     Manipulation,
//     Mousewheel,
//     Navigation,
//     Pagination,
//     Parallax,
//     Scrollbar,
//     // Swiper,
//     Thumbs,
//     Virtual,
//     Zoom,
//   ],
//   navigation: {
//     nextEl: ".swiper__three-button-next",
//     prevEl: ".swiper__three-button-prev",
//   },
//   pagination: {
//     // el: ".swiper-pagination",
//     el: ".swiper-pagination_three",
//     clickable: true,
//     // dynamicBullets: true,
//     // type: "fraction",
//   },

//   direction: "horizontal",
//   initialSlide: 1,
//   loop: true,
//   slidesPerView: 1,
//   centeredSlides: true,
//   spaceBetween: 20,
//   breakpoints: {
//     // when window width is >= 320px
//     479.98: {
//       slidesPerView: 1.6,
//       spaceBetween: 16,
//     },
//     767.98: {
//       slidesPerView: 2.4,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     1023.98: {
//       slidesPerView: 3,
//       spaceBetween: 32,
//     },
//   },

//   // slidesPerGroup: 2,
// });

// //============================== POPUP =========================

// // var crForm = document.createElement("form");
// // let phoneWr = document.createElement("div");
// // let inputWr = document.createElement("div");
// // let crInput = document.createElement("input");
// // let crButton = document.createElement("button");
// // var error = 0;
// // document.addEventListener("click", function (e) {
// // setInterval(() => {
// //   console.log(error);
// // }, 1000);
// // e.preventDefault();
// // console.log(error);
// // return error;
// // });
// let popupLinks = document.querySelectorAll(".popup-link");

// // let popupFormOpen = document.querySelector(".popup__form ._open");
// // console.log(popupFormOpen);
// // function popupProduct() {
// // console.log(popupLinks);
// const body = document.querySelector("body");
// const lockPadding = document.querySelectorAll(".lock__padding");

// let unlock = true;
// const timeout = 800;

// const ollElementsArray = [];
// let popupContentWraps;
// let getPreCard;
// let getElementsAttr;
// // setInterval(() => {
// //   console.log(ollElementsArray);
// //   console.log(popupContentWraps);
// //   console.log(getElementsAttr);
// //   console.log(getPreCard);
// // }, 4500);
// //=====================================================================

// //====================================================================
// function goBackProduct(currentPopup) {
//   // const ollElementsArray = [];
//   // elemInPopupAttr;
//   // getAnchor;
//   let popupContWrap = currentPopup.querySelector(".popup__content-wrapper");
//   let elementsInPopup = popupContWrap.getElementsByClassName("_oll");
//   for (let i = 0; i < elementsInPopup.length; i++) {
//     const elemInPopup = elementsInPopup[i];
//     let elemInPopupAttr = elemInPopup.getAttribute("get-attr").replace("_", "");
//     let getAnchor = ollElementsArray[elemInPopupAttr - 1];
//     if (elemInPopupAttr == 0) {
//       // elemInPopupAttr =
//       getAnchor = ollElementsArray[1];
//       getAnchor.before(elemInPopup);
//     } else if (elemInPopupAttr >= 1) {
//       getAnchor.after(elemInPopup);
//     }
//   }
// }

// //=====================================================================
// //=====================================================================
// function getOpenedPopup(el, elemAttr, preCard, currentPopup) {
//   popupContentWraps = currentPopup.querySelectorAll(".popup__content-wrapper");
//   for (let pcw = 0; pcw < popupContentWraps.length; pcw++) {
//     const popupContentWrap = popupContentWraps[pcw];

//     popupContentWrap.prepend(el);
//     popupOpen(currentPopup);
//   }
// }
// //======================================================================

// //=====================================================================
// function checkedObject(elemWrap, link, elem, currentPopup) {
//   let ollElements = elemWrap.getElementsByClassName("_oll");
//   for (let index = 0; index < ollElements.length; index++) {
//     if (ollElementsArray.length < ollElements.length) {
//       ollElementsArray.push(ollElements[index]);
//     } else if (ollElementsArray.length == ollElements.length) {
//       ollElementsArray[index] = ollElements[index];
//     }
//   }

//   getElementsAttr = link.getAttribute("get-attr").replace("_", "");
//   if (getElementsAttr == 0) {
//     getPreCard = ollElementsArray[1];
//   } else if (getElementsAttr >= 1) {
//     getPreCard = ollElementsArray[getElementsAttr - 1];
//   }
//   getOpenedPopup(elem, getElementsAttr, getPreCard, currentPopup);
// }
// //===================================================================

// //===================================================================
// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];
//     popupLink.addEventListener("click", function (e) {
//       e.preventDefault();
//       // let ollElementsArray;
//       const popupName = popupLink.getAttribute("href").replace("#", "");
//       // console.log(popupName);
//       const currentPopup = document.getElementById(popupName);

//       // console.log(currentPopup);

//       const elementsWrapper = popupLink.closest(".card");
//       // console.log(elementsWrapper);
//       const ollElementsWrapper = elementsWrapper.closest(
//         ".products__wrapper-content"
//       );

//       if (currentPopup && unlock) {
//         checkedObject(
//           ollElementsWrapper,
//           popupLink,
//           elementsWrapper,
//           currentPopup
//         );
//       }
//     });
//   }
// }
// //==========================================================================

// function popupOpen(currentPopup) {
//   // let formWr = console.log(cardInfo);
//   // cardInfo.forEach((elem) => {
//   //   console.log(elem);
//   // });

//   if (currentPopup && unlock) {
//     const popupActive = document.querySelector(".popup._open");
//     if (popupActive) {
//       popupClose(popupActive, currentPopup, false);
//       // popupFormClose(popupActive);
//     } else {
//       bodyLock();
//     }
//     currentPopup.classList.add("_open");
//     if (
//       !popupActive &&
//       !currentPopup.classList.contains("_close__popup-anchor")
//     ) {
//       formPosition(currentPopup);
//     }
//     // console.log(currentPopup);

//     //=============================================================
//     // let cardInfo = document.getElementById("card__phone");
//     // console.log(cardInfo);
//     // let getForm2 = document.getElementById("input__2");
//     // let getForm3 = document.getElementById("input__3");
//     // console.log(getForm);
//     // cardInfo.append(getForm);
//     // getForm3.after(getForm2);
//     // for (let x = 0; x < cardInfo.length; x++) {
//     //   const elem = cardInfo[x];
//     //   // let checkedFormsLength = elem.getElementsByTagName("FORM");
//     //   // console.log(checkedFormsLength);
//     //   // if (checkedFormsLength.length <= 0) {
//     //   let checkedBuiltForm = elem.getElementsByTagName("FORM");
//     //   console.log(checkedBuiltForm);
//     //   if (checkedBuiltForm.length == 0) {
//     //     elem.append(crForm);
//     //     buildForm(crForm);
//     //   }
//     // }
//     // function buildForm(crForm) {
//     //   // let checkedFormsLength = elem.getElementsByTagName("FORM");
//     //   // console.log(checkedFormsLength);
//     //   // let formPhone = elem.getElementsAttr("FORM");
//     //   console.log(crForm);
//     //   crForm.setAttribute("id", "form__0");
//     //   crForm.setAttribute(
//     //     "class",
//     //     "footer__male-form card__phone-form checked__id-0"
//     //   );
//     //   crForm.setAttribute("action", " ");
//     //   crForm.setAttribute("method", "post");
//     //   // crForm.setAttribute("data-id", "input__0");

//     //   crForm.append(phoneWr);
//     //   crForm.append(crButton);
//     //   phoneWr.setAttribute(
//     //     "class",
//     //     "footer__male-send-wrapper card__send-wrapper"
//     //   );
//     //   phoneWr.append(inputWr);
//     //   inputWr.setAttribute("class", "input__wrapper");
//     //   inputWr.append(crInput);
//     //   crInput.classList.add(
//     //     "order__form-phone",
//     //     "req",
//     //     "form__one",
//     //     "input__0",
//     //     "checked__id-0"
//     //   );
//     //   // "order__form-phone req form__one input__0 checked__id-0"
//     //   // crInput.hasAttribute("dataid", "input__0");
//     //   // crInput.data2 = "input__0";
//     //   // crInput.hasAttribute("data-id", "input__0");
//     //   crInput.placeholder = "Телефон";
//     //   // crInput.hasAttribute("name", "phone");
//     //   // crInput.hasAttribute("type", "tel");
//     //   crInput.type = "tel";
//     //   crInput.name = "phone";
//     //   console.log(crInput);
//     //   crButton.classList.add(
//     //     "form-order-btn",
//     //     "form-btn-send",
//     //     "checked__id-0"
//     //   );
//     //   // crButton.hasAttribute("id", "button__0");
//     //   crButton.id = "button__0";
//     //   crButton.name = "sub";
//     //   crButton.type = "submit";
//     //   crButton.textContent = "ми вам зателефонуємо";
//     //   // crButton.hasAttribute("data-id", "button__0");
//     //   console.log(crButton);

//     //   // removedForm(crForm);
//     //   // crForm.remove();
//     //   // }
//     //   // removedForm(crForm);
//     //   // setTimeout(() => {
//     //   // 	console.log(crForm);
//     //   // 	crForm.remove();
//     //   // 	crForm = "";
//     //   // 	console.log(crForm);
//     //   // }, 2000);
//     //   // console.log(crForm);
//     //   // }
//     //   // =============================================================
//     //   // console.log(imgArray[2][0]);
//     //   // setTimeout(() => {
//     //   //   console.log(crForm);
//     //   //   crForm.remove();
//     //   //   crForm = "";
//     //   //   console.log(crForm);
//     //   // }, 2000);
//     //   // console.log(crForm);
//     // }
//     currentPopup.addEventListener("click", function (e) {
//       // if (
//       //   currentPopup.classList.contains("popup__form") &&
//       //   currentPopup.classList.contains("_open")
//       // ) {
//       //   console.log(currentPopup);
//       //   popupFormClose(e.target.closest(".popup__form"));
//       // }
//       if (
//         !e.target.closest(".card__img") &&
//         !e.target.closest(".card__info-wrapper") &&
//         !e.target.closest(".footer__male-form")
//       ) {
//         // console.log(crForm);
//         // removedForm(crForm);
//         popupClose(e.target.closest(".popup"), currentPopup);
//       }
//       // if (e.target.classList.contains(".close-popup")) {
//       //   popupClose(e.target.closest(".popup"), currentPopup);

//       //   //         // goBackProduct();
//       // }
//     });
//     // let openedPopups = document.querySelectorAll(".popup._open");
//     // console.log(openedPopups);
//     // if (openedPopups.length <= 1) {
//     // console.log(openedPopups);
//     // }
//     // bodyLock();
//   }
//   const popupCloseIcon = currentPopup.querySelectorAll(".close-popup");
//   if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//       const el = popupCloseIcon[index];
//       el.addEventListener("click", function (e) {
//         popupClose(el.closest(".popup"), currentPopup);
//         // e.preventDefault();
//       });
//     }
//   }
// }
// //==============================================================================
// //==============================================================================

// //==============================================================================

// function popupClose(popupActive, currentPopup, doUnlock = true) {
//   // console.log(crForm);

//   // let formWr = document.querySelector(".card__phone");
//   // let removeForm = document.getElementById("form__0");

//   // console.log(removeForm);

//   // console.log(popupFormOpen);
//   // if (
//   //   currentPopup.classList.contains("popup__form") &&
//   //   popupActive.classList.contains("_open")
//   // ) {
//   //   popupActive.classList.remove("_open");
//   // } else
//   if (unlock && !currentPopup.classList.contains("popup__form")) {
//     goBackProduct(currentPopup);
//     popupActive.classList.remove("_open");
//     // error = 0;
//     // setInterval(() => {
//     //   console.log(error);
//     // }, 1000);
//     // console.log(crForm);
//     // console.log(crForm);
//     // console.log(removeForm);
//     // setTimeout(() => {
//     // }, 20);
//     // formWr.remove(removeForm);
//     // removeForm.remove();
//     // console.log(elementsWrapper);
//     // elementsWrapper.classList.remove("_checked");
//     if (doUnlock) {
//       bodyUnLock();
//     }
//   }
// }

// //================================================================================

// function popupFormClose(popupFormActive, doUnlock = true) {
//   // console.log("what");
//   // if (unlock) {
//   // console.log("why");
//   // goBackProduct(currentPopup);
//   popupFormActive.addEventListener("click", function () {
//     // if (unlock) {
//     popupFormActive.classList.remove("_open");

//     // }
//     if (
//       doUnlock &&
//       popupFormActive.classList.contains("_close__popup-anchor")
//     ) {
//       bodyUnLock();
//     }
//   });
//   // console.log(elementsWrapper);
//   // elementsWrapper.classList.remove("_checked");
//   // if (doUnlock) {
//   //   bodyUnLock();
//   // }
//   // }
// }

// //==============================================================================
// function bodyLock() {
//   const lockPaddingValue =
//     window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

//   if (lockPadding.length > 0) {
//     for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = lockPaddingValue;
//     }
//   }
//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add("_lock");
//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }
// //==============================================================================

// //==============================================================================
// function bodyUnLock() {
//   setTimeout(function () {
//     if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = "0px";
//       }
//     }
//     body.style.paddingRight = "0px";
//     body.classList.remove("_lock");
//   }, timeout);

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }
// //==============================================================================

// //=================== створення картки в об’єкта ===============

// // const getPopupOpen = document.querySelector(".popup._open");
// // console.log(getPopupOpen);

// //==============================================================
// // }
// // popupProduct();

// //==============================================================

// //========================== SEND FORM & SHOW POPUP ===================

// document.addEventListener("DOMContentLoaded", function () {
//   // const renameClassAttr = "checked__id-0";
//   // let createFormId = "form__phone";
//   // let createFormEmailId = "form__email";
//   // const sending = document.getElementById("wrapper");
//   // let createInputId = "input__0";
//   // let createButtonId = "button__0";
//   let form = document.getElementById("form__phone");
//   let formEmail = document.getElementById("form__email");
//   let telInput = form.querySelector('input[type="tel"]');
//   let im = new Inputmask("+3 (999) 999-99-99");
//   im.mask(telInput);
//   // console.log(telInput.inputmask.unmaskedvalue());
//   // for (let index = 0; index < popupLinks.length; index++) {
//   //   const popupLink = popupLinks[index];
//   form.addEventListener("submit", formSend);
//   formEmail.addEventListener("submit", formSendEmail);

//   async function formSendEmail(e) {
//     e.preventDefault();

//     let error = formValidate(formEmail);

//     let formDataEmail = new FormData(formEmail);
//     if (error === 0) {
//       // sending.classList.add("sending");
//       let response = await fetch("sendmail.php", {
//         method: "POST",
//         body: formDataEmail,
//       });
//       // let response = true;
//       if (response.ok) {
//         popupOpen(popupFormSuccess);
//         popupFormClose(popupFormSuccess);
//         formEmail.reset();
//         // sending.classList.remove("sending");
//       } else {
//         popupOpen(popupFormError);
//         // sending.classList.remove("sending");
//         popupFormClose(popupFormError);
//       }
//     } else {
//       popupOpen(popupFormEmailWarning);
//       // sending.classList.remove("sending");
//       popupFormClose(popupFormEmailWarning);
//     }
//   }
//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form, telInput);

//     let formData = new FormData(form);
//     if (error === 0) {
//       // sending.classList.add("sending");
//       let response = await fetch("sendmail.php", {
//         method: "POST",
//         body: formData,
//       });
//       // let response = true;
//       if (response.ok) {
//         popupOpen(popupSuccess);
//         popupFormClose(popupSuccess);
//         form.reset();
//         // sending.classList.remove("sending");
//       } else {
//         popupOpen(popupError);
//         // sending.classList.remove("sending");
//         popupFormClose(popupError);
//       }
//     } else {
//       popupOpen(popupFormWarning);
//       // sending.classList.remove("sending");
//       popupFormClose(popupFormWarning);
//     }
//   }
//   // }
//   function formValidate(form, telInput) {
//     // let telInput = form.querySelector('input[type="tel"]');

//     // console.log(telInput);
//     // console.log(inputs);
//     let error = 0;
//     let formReg = form.querySelectorAll(".req");
//     // console.log(formReg);
//     // console.log(telInput.inputmask.unmaskedvalue());
//     // setInterval(() => {
//     //   console.log(error);
//     // }, 1000);
//     for (let index = 0; index < formReg.length; index++) {
//       const input = formReg[index];
//       // console.log(input.value.length);
//       // console.log(input.value);
//       // console.log(input.value.number);
//       formRemoveError(input);
//       if (input.classList.contains("_email")) {
//         if (emailTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       } else if (telInput.inputmask.unmaskedvalue().length != 10) {
//         // console.log("десфть цифр");
//         // let im = new maskFunctions("+3 (999) 999-99-99");
//         // let im = new Inputmask("+3 (999) 999-99-99");
//         // im.mask(telInput);
//         formAddError(input);
//         error++;
//       }
//       // else if (telInput) {
//       // }
//     }
//     return error;
//   }

//   function formAddError(input) {
//     input.parentElement.classList.add("error");
//     input.classList.add("error");
//     // }
//   }
//   function formRemoveError(input) {
//     if (input.classList.contains("error")) {
//       input.parentElement.classList.remove("error");
//       input.classList.remove("error");
//     }
//   }
//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }
// });
// //============================ FORM POSITION ======================================
// function formPosition(popup) {
//   // console.log(popup);
//   const popupFormWrap = document
//     .getElementById("form__phone")
//     .closest(".card__phone");
//   // console.log(popupFormWrap);
//   const popupWrapper = popup.querySelector(".popup__content-wrapper");
//   const popupContent = popupWrapper.querySelector(".product__content-card");
//   const anchor = popup.querySelector(".block__text");

//   // let formMarginTop = window
//   //   .getComputedStyle(popupContent)
//   //   .getPropertyValue("column-gap");
//   let popupContentStyle = window.getComputedStyle(popupContent);
//   var popupContentFd = popupContentStyle.getPropertyValue("flex-direction");

//   if (popupContentFd === "row") {
//     popupFormWrap.classList.add("_position");
//   } else if (popupContentFd === "column-reverse") {
//     popupFormWrap.classList.add("_positionTwo");
//   }

//   changePosition(popupFormWrap);
//   // console.log(popupContent.style);
//   function changePosition(popupFormWrap) {
//     let formMarginTop = window
//       .getComputedStyle(popupContent)
//       .getPropertyValue("column-gap");
//     var formMarginTopNumber = Number(formMarginTop.substring(0, 2));

//     // let anchorStyle = window.getComputedStyle(anchor);
//     // let anchorWidth = anchorStyle.getPropertyValue("width");
//     let anchorWidth = anchor.offsetWidth;
//     // let anchorHeight = anchorStyle.getPropertyValue("height");
//     let anchorHeight = anchor.offsetHeight;
//     // anchorHeight.typeof;
//     // anchorHeight + `10`;
//     // console.log(typeof anchorHeight);
//     // console.log(anchorHeight);
//     if (popupContentFd === "row") {
//       popupFormWrap.style.width = anchorWidth + "px";
//       popupFormWrap.style.top = anchorHeight + formMarginTopNumber + "px";
//       popupFormWrap.style.left = "auto";
//       popupFormWrap.style.right = 0;
//       // console.log(popupFormWrap.style.top);
//     }
//     if (popupContentFd === "column-reverse") {
//       popupFormWrap.style.width = anchorWidth + "px";
//       popupFormWrap.style.height = anchorHeight + "px";
//       popupFormWrap.style.top =
//         popupWrapper.offsetHeight + formMarginTopNumber + "px";
//       popupFormWrap.style.left = 0;
//       // popupFormWrap.style.left =
//       //   anchor.offsetWidth + formMarginTopNumber + "px";
//     }
//     // console.log(anchorStyle);
//     // console.log(anchorWidth);
//     if (
//       popupContentFd === "row" &&
//       popupFormWrap.classList.contains("_positionTwo")
//     ) {
//       popupFormWrap.classList.remove("_positionTwo");
//       popupFormWrap.classList.add("_position");
//     }
//     if (
//       popupContentFd === "column-reverse" &&
//       popupFormWrap.classList.contains("_position")
//     ) {
//       popupFormWrap.classList.remove("_position");
//       popupFormWrap.classList.add("_positionTwo");
//     }
//   }
//   // console.log(window.getComputedStyle(popupContent));
//   // console.log(popupContent.style);
//   window.addEventListener("resize", function () {
//     popupContentFd = popupContentStyle.getPropertyValue("flex-direction");
//     changePosition(popupFormWrap);
//     // console.log(popupContentFd);
//     return popupContentFd;
//   });
//   // setInterval(() => {
//   //   console.log(popupFormWrap);
//   // }, 1500);
// }
// // formPosition();

// //=================================================================================
// //================================== LIKE SORTING =================================
// let likes = document.querySelectorAll(".like");
// let headerIconLikes = document.getElementById("like__icon");
// // let cardWithShow = document.querySelector(".card._show__like-cards");
// for (let index = 0; index < likes.length; index++) {
//   const like = likes[index];
//   like.addEventListener("click", function (e) {
//     if (!like.classList.contains("_checked")) {
//       like.classList.add("_checked");
//     } else {
//       like.classList.remove("_checked");
//     }
//     // e.preventDefault();
//     let likesCard = like.closest(".card");
//     // console.log(likesCard);
//     likesCard.classList.toggle("_likes");
//     likesCard.classList.toggle("_show__like-cards");
//     // if (cardWithShow == null) {
//     //   headerIconLikes.classList.remove("_like__active");
//     // }
//   });
//   // sortingLikes(like);
// }
// // function sortingLikes(like) {
// headerIconLikes.addEventListener("click", function (e) {
//   let likeChecked = document.querySelectorAll(".like._checked");

//   // let cardWithHide = document.querySelector(".card._hide__like-cards");
//   // console.log(cardWithShow);
//   // console.log(cardWithHide);
//   const popupFormLikeSorting = document.getElementById("popupFormLikeSorting");
//   if (
//     likeChecked.length === 0 &&
//     !headerIconLikes.classList.contains("_like__active")
//   ) {
//     popupOpen(popupFormLikeSorting);
//     popupFormClose(popupFormLikeSorting);
//   }
//   if (likeChecked.length > 0) {
//     headerIconLikes.classList.toggle("_like__active");
//   } else {
//     if (headerIconLikes.classList.contains("_like__active")) {
//       headerIconLikes.classList.remove("_like__active");
//     }
//   }

//   // if (
//   //   likeChecked.length === 0 &&
//   //   headerIconLikes.classList.contains("_like__active")
//   // ) {
//   //   headerIconLikes.classList.remove("_like__active");
//   // }
//   let cards = document.getElementsByClassName("card");
//   for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     if (
//       headerIconLikes.classList.contains("_like__active") &&
//       likeChecked.length > 0
//     ) {
//       if (card.classList.contains("_likes")) {
//         card.classList.add("_show__like-cards");
//       }
//       if (!card.classList.contains("_likes")) {
//         card.classList.add("_hide__like-cards");
//       }
//     } else if (
//       !headerIconLikes.classList.contains("_like__active") &&
//       likeChecked.length > 0
//     ) {
//       if (
//         card.classList.contains("_likes") ||
//         card.classList.contains("_hide__like-cards")
//       ) {
//         card.classList.remove("_show__like-cards");
//         card.classList.remove("_hide__like-cards");
//       }
//       if (!card.classList.contains("_likes")) {
//         card.classList.remove("_hide__like-cards");
//       }
//     } else if (
//       likeChecked.length === 0
//       // headerIconLikes.classList.contains("_like__active")
//       // &&
//       // card.classList.contains("_hide__like-card")
//     ) {
//       // headerIconLikes.classList.remove("_like__active");
//       removeHiddenClass(card);
//       // card.classList.remove("_hide__like-card");
//     }
//     // if (
//     //   likeChecked.length === 0 &&
//     //   headerIconLikes.classList.contains("_like__active")
//     // ) {
//     //   headerIconLikes.classList.remove("_like__active");
//     // }
//     function removeHiddenClass(card) {
//       if (card.classList.contains("_hide__like-cards")) {
//         card.classList.remove("_hide__like-cards");

//         // headerIconLikes.classList.remove("_like__active");

//         // console.log("what?");
//       }
//       if (card.classList.contains("_show__like-cards")) {
//         card.classList.remove("_show__like-cards");
//       }
//       // if (cardWithHide && cardWithShow) {
//       //   headerIconLikes.classList.remove("_like__active");
//       // }
//     }
//   }
// });
// // }
// // console.log(likes);
// //=================================================================================
// // ==================== BTN-HOME ====================

// jQuery(function (f) {
//   var element = f("#btn-home");
//   f(window).on("scroll", function () {
//     element["fade" + (f(this).scrollTop() > 330 ? "In" : "Out")](0);
//   });
// });

// // // import Swiper bundle with all modules installed
