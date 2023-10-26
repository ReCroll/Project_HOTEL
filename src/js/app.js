import * as flsFunctions from "./modules/functions.js";
import * as maskFunctions from "./modules/inputmask.js";

flsFunctions.isWebp();
import "./jquery.js";
import "./modules/swiper.js";
// import * as useDynamicAdapt from "./modules/dynamicAdapt.js";

// useDynamicAdapt();
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";

useDynamicAdapt();
// maskFunctions();

// import "./swiper10_swiper-bundle.js";
// import Swiper from "swiper";
// import "./swiper10_swiper-bundle.min.js";
// import "./swiper10_swiper-bundle.min.js";
// import "./jquery.js";

// import "./script.js";

("use strict");
// import "./net_npm_swiper@10_swiper-bundle.min.js";
// import "./swiper9.min.js";
// import "../components/js/net_npm_swiper10_swiper-bundle.min.js";

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

// const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
// // console.log(menuLinks);
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//     menuLink.addEventListener("click", sortingProducts);
//   });

//   function onMenuLinkClick(e) {
//     // console.log(menuLinks);

//     const menuLink = e.target;
//     if (
//       menuLink.dataset.goto &&
//       document.querySelector(menuLink.dataset.goto)
//     ) {
//       // console.log(menuLink.dataset.goto);
//       // console.log(document.querySelector(menuLink.dataset.goto));
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
//=========================== CALENDAR ===============================================================================================================
let inCalendars = document.getElementsByClassName("check-in");
console.log(inCalendars);
for (let index = 0; index < inCalendars.length; index++) {
  const inCalendar = inCalendars[index];
  console.log(inCalendar);
  inCalendar.addEventListener("click", function (e) {
    createCalendar();
    e.preventDefault();
  });
}

function createCalendar() {
  const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  let calendar = document.querySelector(".calendar");
  console.log(calendar);
  let calendarContainer = calendar.closest(".container");
  if (calendarContainer.classList.contains("_hide")) {
    calendarContainer.classList.remove("_hide");
  }
  const month_names = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  let month_picker = document.querySelector("#month-picker");
  const dayTextFormate = document.querySelector(".day-text-formate");
  const timeFormate = document.querySelector(".time-formate");
  const dateFormate = document.querySelector(".date-formate");
  var showCheckedDate = document.querySelector(".show_checked-date");

  month_picker.onclick = () => {
    month_list.classList.remove("hideonce");
    month_list.classList.remove("hide");
    month_list.classList.add("show");
    dayTextFormate.classList.remove("showtime");
    dayTextFormate.classList.add("hidetime");
    timeFormate.classList.remove("showtime");
    timeFormate.classList.add("hideTime");
    dateFormate.classList.remove("showtime");
    dateFormate.classList.add("hideTime");
    showCheckedDate.classList.remove("showtime");
    showCheckedDate.classList.add("hideTime");
    // hideBorder();
  };
  var send_time = [];

  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector(".calendar-days");
    calendar_days.innerHTML = "";
    let calendar_header_year = document.querySelector("#year");
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    let currentDate = new Date();
    month_picker.innerHTML = month_names[month];

    calendar_header_year.innerHTML = year;
    var first_day = new Date(year, month);
    for (let i = 1; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
      let day = document.createElement("div");

      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;

        if (year < currentDate.getFullYear()) {
          day.classList.add("get_background");
        }
        if (year > currentDate.getFullYear()) {
          day.classList.add("get_background-border");
        }
        if (month > currentDate.getMonth()) {
          day.classList.add("get_background-border");
        }
        if (month < currentDate.getMonth()) {
          day.classList.add("get_background");
        }
        if (
          year < currentDate.getFullYear() &&
          month > currentDate.getMonth()
        ) {
          day.classList.add("get_background");
          day.classList.remove("get_background-border");
        }
        if (
          year > currentDate.getFullYear() &&
          month < currentDate.getMonth()
        ) {
          day.classList.remove("get_background");
          day.classList.add("get_background-border");
        }
        if (
          i - first_day.getDay() + 1 > currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add("get_background-border");
        }
        if (
          i - first_day.getDay() + 1 < currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add("get_background");
        }
        if (
          i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add("current-date");
        }
      }
      calendar_days.appendChild(day);
    }

    // if (send_time.length >= 2) {
    // 	console.log(`Ви обрали ${send_time[0]} число та ${send_time[1]} годину`);
    // }
    // console.log(`Ви обрали ${send_time[0]} число та ${send_time[1]} годину`);
    // console.log(send_time);

    function reloadTime(send_time) {
      if (send_time[0] != undefined) {
        console.log(send_time[0]);
        // send_time = [];
        send_time.shift();
        send_time.pop();
      } else if (send_time[2] != undefined) {
        // send_time = [];
        // console.log("null2");
        send_time.pop();
        send_time.shift();
      }
      for (let i = 0; i < hours.length; i++) {
        var checked_hour = hours[i];
        // console.log(checked_hour);
        if (checked_hour.classList.contains("checked-hour")) {
          // if (hours.classList.contains('checked-hour')) {
          checked_hour.classList.remove("checked-hour");
          // hours.classList.remove('checked-hour');
        }
      }

      // sendTime(send_time);
      // console.log(`Ви обрали дату ${send_time[0]} та час ${send_time[1]}`);
    }
    let days_hours = document.querySelector(".days-hours");
    // console.log(days_hours);
    // let hours = document.querySelectorAll('.hour-check');
    let hours = days_hours.getElementsByTagName("div");
    for (let index = 0; index < hours.length; index++) {
      const hour = hours[index];
      // console.log(hour);
      // hour.onclick = (send_day) => {
      hour.onclick = () => {
        if (!hour.classList.contains("hide_border")) {
          var send_hour = hour.innerHTML;
          console.log(send_hour);
          send_time[2] = send_hour;
          sendTime(send_time);
        }
        hideBorder();
        if (!hour.classList.contains("hide_border")) {
          hour.classList.add("checked-hour");
        }
        console.log(send_time);
        // }
      };

      function hideBorder() {
        for (let i = 0; i < hours.length; i++) {
          var checked_hour = hours[i];
          // console.log(checked_hour);
          if (checked_hour.classList.contains("checked-hour")) {
            // if (hours.classList.contains('checked-hour')) {
            checked_hour.classList.remove("checked-hour");
            // hours.classList.remove('checked-hour');
          }
        }
      }

      if (year < currentDate.getFullYear()) {
        hour.classList.add("hide_border");
        hideBorder();
      } else if (hour.classList.contains("hide_border")) {
        hour.classList.remove("hide_border");
      }
      if (month < currentDate.getMonth()) {
        hour.classList.add("hide_border");
        hideBorder();
      } else if (hour.classList.contains("hide_border")) {
        hour.classList.remove("hide_border");
      }
      if (month > currentDate.getMonth() && year >= currentDate.getFullYear()) {
        // hour.classList.add('hide_border');
        hideBorder();
      }
      if (year > currentDate.getFullYear()) {
        hideBorder();
        // hour.classList.remove('hide_border');
      }
      if (year > currentDate.getFullYear() && month < currentDate.getMonth()) {
        hideBorder();
        hour.classList.remove("hide_border");
      }
      if (year < currentDate.getFullYear() && month >= currentDate.getMonth()) {
        hideBorder();
        hour.classList.add("hide_border");
      }
      if (index + 7 < currentDate.getHours()) {
        if (
          index <= currentDate.getHours() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          hour.classList.add("hide_border");
        }
      }
    }
    let days_in_month = calendar_days.getElementsByTagName("div");
    // let month_in_date = document.querySelector('.month-picker');
    // console.log(month_in_date.innerHTML);
    // console.log(days_in_month);
    // console.log(days_in_month);
    for (let days = 0; days < days_in_month.length; days++) {
      const day_in_month = days_in_month[days];
      // console.log(day_in_month);
      day_in_month.onclick = () => {
        let month_in_date_wrapper = day_in_month.closest(
          ".calendar-body-wrapper"
        );
        // console.log(month_in_date_wrapper);
        let month_in_date =
          month_in_date_wrapper.querySelector(".month-picker");
        // console.log(month_in_date.innerHTML);
        let month_checked = month_in_date.innerHTML;
        console.log(month_checked);
        // console.log(day_in_month.innerHTML);
        // reloadDateText();

        sendTime(send_time);
        if (
          day_in_month.classList.contains("get_background-border") ||
          day_in_month.classList.contains("current-date")
        ) {
          var send_day = " ";
          send_day = day_in_month.innerHTML;
          send_time[0] = send_day;
          send_time[1] = month_checked;
          sendTime(send_time);
        } else if (day_in_month.classList.contains("get_background")) {
          console.log("what");
          reloadTime(send_time);
          showDate(send_time);
          // sendTime(send_time);
        } else if (day_in_month.innerHTML === "") {
          console.log("no");
          console.log(send_time);
          reloadTime(send_time);
          console.log(send_time);
          showDate(send_time);
        }

        for (let i = 0; i < days_in_month.length; i++) {
          var checked_day = days_in_month[i];
          // console.log(checked_day);

          if (checked_day.classList.contains("checked-day")) {
            checked_day.classList.remove("checked-day");
          }
        }
        if (
          day_in_month.classList.contains("get_background-border") ||
          day_in_month.classList.contains("current-date")
        ) {
          day_in_month.classList.add("checked-day");
        }

        // зміна бекграунду по кліку===============================================================================================================

        let get_day = day_in_month.innerHTML;
        for (let i = 0; i < hours.length; i++) {
          const el = hours[i];
          // console.log(el);
          if (
            get_day > currentDate.getDate() &&
            year >= currentDate.getFullYear() &&
            month == currentDate.getMonth()
          ) {
            if (el.classList.contains("hide_border")) {
              el.classList.remove("hide_border");
              console.log("1");
              // sendTime(send_time);
              // break
            }
          }
          if (
            get_day > currentDate.getDate() &&
            year === currentDate.getFullYear() &&
            month < currentDate.getMonth()
          ) {
            if (!el.classList.contains("hide_border")) {
              el.classList.add("hide_border");
              // reloadTime(send_time);
              // sendTime(send_time);
              // console.log('1/1');
              // break
            } else {
              // console.log("-1/1");
              break;
            }
          }

          if (
            get_day < currentDate.getDate() &&
            year > currentDate.getFullYear()
          ) {
            if (el.classList.contains("hide_border")) {
              el.classList.remove("hide_border");
              // sendTime(send_time);
              console.log("2");
            }
            // el.classList.remove('hide_border');
          }
          if (
            get_day < currentDate.getDate() &&
            year === currentDate.getFullYear() &&
            month === currentDate.getMonth()
          ) {
            // reloadTime(send_time);
            if (!el.classList.contains("hide_border")) {
              el.classList.add("hide_border");
              // console.log(send_time);
              console.log("3");
            }
          }

          if (
            year < currentDate.getFullYear() ||
            (year < currentDate.getFullYear() && month < currentDate.getMonth())
          ) {
            if (!el.classList.contains("hide_border")) {
              el.classList.add("hide_border");
              console.log("4");
            }
          }
          if (
            year > currentDate.getFullYear() &&
            month < currentDate.getMonth()
          ) {
            if (el.classList.contains("hide_border")) {
              el.classList.remove("hide_border");
              reloadTime(send_time);

              console.log("5");
            }
          }

          if (
            get_day == currentDate.getDate() &&
            year == currentDate.getFullYear() &&
            month == currentDate.getMonth()
          ) {
            var index_hours = currentDate.getHours() + 8;
            for (let index = 0; index < index_hours - hours.length; index++) {
              var hour_hide_border = hours[index];
              if (hour_hide_border) {
                if (!hour_hide_border.classList.contains("hide_border")) {
                  hour_hide_border.classList.add("hide_border");

                  console.log("6");
                }
              }
              if (
                el.classList.contains("hide_border") &&
                el.classList.contains("checked-hour")
              ) {
                send_time[2] = undefined;
                showDate(send_time);
                el.classList.remove("checked-hour");
              }
            }
            for (
              let ind = index_hours - hours.length;
              ind < hours.length;
              ind++
            ) {
              var hour_show_border = hours[ind];
              if (hour_hide_border) {
                if (hour_show_border.classList.contains("hide_border")) {
                  hour_show_border.classList.remove("hide_border");
                  console.log("7");
                }
              }
            }
          }
        }
      };
    }
    function sendTime(send_time) {
      if (send_time[0] != undefined && send_time[2] != undefined) {
        // console.log(send_time[0], send_time[1]);
        // console.log(send_hour);
        // console.log("ви обрали дату + `$send_day` та час `$send_hour`");
        // console.log(`Ви обрали дату ${send_time[0]} та час ${send_time[1]}`);

        showDate(send_time);
        // console.log(send_day);
      }
    }
  };

  var show_checked_dates = document.getElementsByClassName("show_checked-date");
  function showDate(send_time) {
    for (let show = 0; show < show_checked_dates.length; show++) {
      var show_checked_date = show_checked_dates[show];
      console.log(show_checked_date);
      if (send_time[0] != undefined && send_time[2] != undefined) {
        show_checked_date.innerHTML = "";
        show_checked_date.innerHTML = `Підтвердити <span style="color: #FCC000;"> ЗАСЕЛЕННЯ: </span> <br/> ЧАС: 
			<span style="color: #FCC000;"> ${send_time[2]} година </span>  <br/> ДАТА: <span style="color: #FCC000;"> ${send_time[0]}  число </span>   <br/> МІСЯЦЬ: <span style="color: #FCC000;"> ${send_time[1]} </span>`;
        showCheckedDate.classList.add("show_in_date");
        // reloadDateText(show_checked_date);
      } else if (send_time[0] === undefined || send_time[2] === undefined) {
        console.log(show_checked_date);
        setTimeout(() => {
          show_checked_date.innerHTML = "";
        }, 500);
        showCheckedDate.classList.remove("show_in_date");
        console.log("delete");
      }
      // reloadDateText(show_checked_date);
    }
    // 	// e.preventDefault();
  }

  function reloadCheckedTime(send_time) {
    if (send_time[0] != undefined) {
      console.log(send_time[0]);
      send_time.shift();
      send_time.pop();
    } else if (send_time[2] != undefined) {
      send_time.pop();
      send_time.shift();
    } else if (send_time[1] != undefined) send_time.pop();
    send_time.shift();
    // sendTime(send_time);
    // console.log(`Ви обрали дату ${send_time[0]} та час ${send_time[1]}`);
  }
  // function reloadDateText(show_checked_date) {
  // 	console.log(show_checked_date);
  // 	show_checked_date.innerHTML = "ваваа";
  // 	// show_checked_dates
  // }

  // if ((send_time[0] != undefined) && (send_time[1] != undefined)) {
  // 	console.log("raidy");
  // 	console.log(`Ви нарешті обрали дату ${send_time[0]} та час ${send_time[1]}`);
  // }

  let month_list = calendar.querySelector(".month-list");
  month_names.forEach((e, index) => {
    let month = document.createElement("div");
    month.innerHTML = `<div>${e}</div>`;
    month_list.append(month);
    month.onclick = () => {
      reloadCheckedTime(send_time);
      showDate(send_time);
      reCheckedHour();
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace("show", "hide");
      dayTextFormate.classList.remove("hideTime");
      dayTextFormate.classList.add("showtime");
      timeFormate.classList.remove("hideTime");
      timeFormate.classList.add("showtime");
      dateFormate.classList.remove("hideTime");
      dateFormate.classList.add("showtime");
      showCheckedDate.classList.remove("hideTime");
      showCheckedDate.classList.add("showtime");
    };
  });

  (function () {
    month_list.classList.add("hideonce");
  })();
  document.querySelector("#pre-year").onclick = () => {
    reloadCheckedTime(send_time);
    showDate(send_time);
    reCheckedHour();
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
    // hideBorder();
  };
  document.querySelector("#next-year").onclick = () => {
    reloadCheckedTime(send_time);
    showDate(send_time);
    reCheckedHour();
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
    // hideBorder();
  };
  var days_hours_move = document.querySelector(".days-hours");
  function reCheckedHour() {
    // console.log(send_time);
    let hoursGet = days_hours_move.getElementsByTagName("div");
    for (let g = 0; g < hoursGet.length; g++) {
      const moveHoursChecked = hoursGet[g];
      if (moveHoursChecked.classList.contains("checked-hour")) {
        moveHoursChecked.classList.remove("checked-hour");

        console.log("what2");

        // if (!hour.classList.contains('hide_border')) {
        // 		var send_hour = moveHoursChecked.innerHTML;
        // 		console.log(send_hour);
        // 		send_time[1] = send_hour;
        // 			sendTime(send_time);
        // 	}
      }
    }
  }

  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);

  const todayShowTime = document.querySelector(".time-formate");
  const todayShowDate = document.querySelector(".date-formate");

  const currshowDate = new Date();
  const showCurrentDateOption = {
    month: "long",
    year: "numeric",
    weekday: "long",
    day: "numeric",
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    "uk-UA",
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formateTimer = new Intl.DateTimeFormat("uk-UA", option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      "0"
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      "0"
    )}: ${`${timer.getSeconds()}`.padStart(2, "0")}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);
}
//============================================================
// ======================= ТЕКСТ ПО КОЛУ ======================
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}
$$(".circular").forEach(function (el) {
  var NS = "http://www.w3.org/2000/svg";
  // var xlinkNS = "http://www.w3.org/1999/xlink";
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  var circle = document.createElementNS(NS, "path");
  circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
  circle.setAttribute("id", "circle");
  var text = document.createElementNS(NS, "text");
  var textPath = document.createElementNS(NS, "textPath");
  textPath.textContent = el.textContent;
  textPath.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "#circle"
  );
  text.appendChild(textPath);
  svg.appendChild(circle);
  svg.appendChild(text);
  el.textContent = "";
  el.appendChild(svg);
});
//===========================================================
//================= SHOW SERVICES ===============
const showServices = document.querySelectorAll("._show-services");
if (showServices.length > 0) {
  for (let index = 0; index < showServices.length; index++) {
    const showService = showServices[index];
    showService.addEventListener("click", function (e) {
      let hideContentService = showService.closest(".content-row");
      let showHiddenServices = showService
        .getAttribute("class")
        .replace("_show-services ", "");
      hideContentService.classList.add("_hide-services");
      const closeWrapper = hideContentService.closest(".content__row-wrapper");
      closeWrapper.classList.add("_rotate");
      let showHiddenService = document.getElementById(showHiddenServices);
      showHiddenService.classList.remove("_hidden");
      e.preventDefault();
    });
  }
  const hideServices = document.querySelectorAll("._hide-services-content");
  if (hideServices.length > 0) {
    for (let i = 0; i < hideServices.length; i++) {
      const hideService = hideServices[i];
      hideService.addEventListener("click", function (e) {
        let closeHidden = hideService.closest(".hidden__row");
        closeHidden.classList.add("_hidden");
        const getAttrContents = hideService.getAttribute("data-close");
        const contentRowsClose = document.getElementById(getAttrContents);
        const paddingContentRowsUp = contentRowsClose.closest(
          ".content__row-wrapper"
        );
        contentRowsClose.classList.remove("_hide-services");
        paddingContentRowsUp.classList.remove("_rotate");
        e.preventDefault();
      });
    }
  }
}
//========================================================================================
//============================= GALLERY 3 ===============================================
const galleryImageArray = document.querySelectorAll(".gallery__image-wrapper");
if (galleryImageArray.length > 0) {
  for (let index = 0; index < galleryImageArray.length; index++) {
    const galleryImageWrapper = galleryImageArray[index];
    galleryImageWrapper.addEventListener("click", function (e) {
      searchActive(galleryImageWrapper);
    });
  }
}
function searchActive(galleryImageWrapper) {
  if (galleryImageWrapper.classList.contains("_active")) {
    return;
  } else {
    removeActive(galleryImageWrapper);
  }
}
function removeActive(galleryImageWrapper) {
  var searchElemsActive = document.getElementsByClassName(
    "gallery__image-wrapper _active"
  );
  for (let index = 0; index < searchElemsActive.length; index++) {
    const searchElemActive = searchElemsActive[index];

    searchElemActive.classList.remove("_active");
    searchElemActive.style.top = galleryImageWrapper.style.top;
    searchElemActive.style.left = galleryImageWrapper.style.left;
    searchElemActive.style.right = galleryImageWrapper.style.right;
    searchElemActive.style.bottom = galleryImageWrapper.style.bottom;

    addClassActive(galleryImageWrapper);
  }
}
function addClassActive(galleryImageWrapper) {
  galleryImageWrapper.classList.add("_active");
}
//==========================================================================
//============================= ПРИБРАТИ PLACEHOLDER =====================
jQuery(document).ready(function ($) {
  $("input[type=text], textarea").focus(function () {
    $(this).data("placeholder", $(this).attr("placeholder"));
    $(this).attr("placeholder", "");
  });
  $("input[type=text], textarea").blur(function () {
    $(this).attr("placeholder", $(this).data("placeholder"));
  });
});
//=======================================================================

// //========================= OUR PRODUCT HIDDEN ========================
