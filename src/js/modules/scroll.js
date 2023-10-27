// прокрутка до блоку

// const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
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
// 				headerMenu.classList.remove("_active");
//       }

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth",
//       });
//       e.preventDefault();
//     }
//   }
// }
// ==================== BTN-HOME ====================
// $(document).ready(function () {
//   $("#btn-home").on("click", "a", function (event) {
//     //отменяем стандартную обработку нажатия по ссылке
//     event.preventDefault();

//     //забираем идентификатор бока с атрибута href
//     var id = $(this).attr("href"),
//       //узнаем высоту от начала страницы до блока на который ссылается якорь
//       top = $(id).offset().top;

//     //анимируем переход на расстояние - top за 400 мс
//     $("body,html").animate({ scrollTop: top }, 800);
//   });
// });

jQuery(function (f) {
  var element = f("#btn-home");
  f(window).on("scroll", function () {
    element["fade" + (f(this).scrollTop() > 230 ? "In" : "Out")](0);
  });
});

//=========================== DOWNLOUD PAGE AND SCROLL ===========================================
// var check_oll_rooms = document.querySelectorAll('.check__oll-rooms');
// console.log(check_oll_rooms);
// for (let i = 0; i < check_oll_rooms.length; i++) {
// 	const check_rooms = check_oll_rooms[i];
// 	console.log(check_rooms);
// 	check_rooms.addEventListener("click", onMenuLinkClick);
// 	console.log("so what problem?");
// }
//===============================================================================================
