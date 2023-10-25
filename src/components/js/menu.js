"use strict";
let menuArrows = document.querySelectorAll(".menu__arrows");
let subMenus = document.querySelectorAll(".menu__sub-list");

menuArrows.forEach((arrow) => {
  arrow.addEventListener("click", function (e) {
    if (e.target.classList.contains("open")) {
      e.target.classList.remove("open");
      closeArrows();
      return;
    }
    let openSub = arrow.closest("li").querySelector(".menu__sub-list");
    closeArrows();
    arrow.classList.add("open");
    openSub.classList.add("open");
    e.preventDefault();
  });
});

let checkedMenu;
document.addEventListener("click", function (e) {
  checkedMenu = document.querySelectorAll(".menu__arrows.open");
  if (checkedMenu.length > 0) {
    menuArrows.forEach((clsArrow) => {
      const click = e.composedPath().includes(clsArrow);
      if (clsArrow.classList.contains("open")) {
        subMenus.forEach((clsMenu) => {
          if (click === false) {
            clsArrow.classList.remove("open");
            clsMenu.classList.remove("open");
          }
        });
      }
    });
    e.preventDefault();
  }
});

function closeArrows() {
  for (let a = 0; a < menuArrows.length; a++) {
    let closeArrow = menuArrows[a];
    if (closeArrow.classList.contains("open")) {
      closeArrow.classList.remove("open");
    }
  }
  for (let s = 0; s < subMenus.length; s++) {
    let closeSubMenu = subMenus[s];
    if (closeSubMenu.classList.contains("open")) {
      closeSubMenu.classList.remove("open");
    }
  }
}

//========================== SCROLLING =======================

// const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
// console.log(menuLinks);
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     console.log(menuLinks);

//     const menuLink = e.target;
//     if (
//       menuLink.dataset.goto &&
//       document.querySelector(menuLink.dataset.goto)
//     ) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top +
//         scrollY -
//         document.querySelector("header").offsetHeight;

//       if (iconMenu.classList.contains("_active")) {
//         document.body.classList.remove("_lock");
//         iconMenu.classList.remove("_active");
//         menuBody.classList.remove("_active");
//       }

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth",
//       });
//       e.preventDefault();
//     }
//   }
// }

//============================================================
