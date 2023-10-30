import * as flsFunctions from "./modules/functions.js";
import * as maskFunctions from "./modules/inputmask.js";

flsFunctions.isWebp();
import "./jquery.js";
import "./modules/swiper.js";
import "./modules/scroll.js";
import "./modules/popup.js";
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
//=====================================================================
//============================== ПРОКРУТКА ДО БЛОКА ===============

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
        headerMenu.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
//===================================== SEND DATE COMPONENT ===============================
var showCheckedDate = document.querySelector(".show_checked-date");
let inCalendars = document.getElementsByClassName("check-date");
var inOrOut = [];
// var popup_messages = document.getElementsByClassName('rooms__info-button');
// console.log(popup_messages);
console.log(inCalendars);
console.log(inOrOut);
for (let index = 0; index < inCalendars.length; index++) {
  const inCalendar = inCalendars[index];
  console.log(inCalendar);
  inCalendar.addEventListener("click", function (e) {
    // inOrOut = ["non"];
    // console.log(inOrOut);
    if (inCalendar.classList.contains("check-in")) {
      inText(inOrOut);
      console.log("inDate");
      showCheckedDate.classList.add("in_date");
      if (showCheckedDate.classList.contains("out_date")) {
        showCheckedDate.classList.remove("out_date");
      }
      console.log(showCheckedDate);
      // inOrOut[0] = "ЗАСЕЛЕННЯ:";
    } else if (inCalendar.classList.contains("check-out")) {
      outText(inOrOut);
      showCheckedDate.classList.add("out_date");
      if (showCheckedDate.classList.contains("in_date")) {
        showCheckedDate.classList.remove("in_date");
      }
      console.log("outDate");
    }
    let monthInWrapper = document.querySelector(".month-list");
    console.log(monthInWrapper);
    let monthListsIn = monthInWrapper.getElementsByTagName("div");
    console.log(monthListsIn);
    if (monthListsIn.length < 12) {
      createCalendar();
    } else {
      return;
    }
    e.preventDefault();
  });
}
console.log(inOrOut);
function inText(inOrOut) {
  inOrOut[0] = "ЗАСЕЛЕННЯ:";
  console.log(inOrOut[0]);
  inOrOut = "non";
  console.log(inOrOut);
}
function outText(inOrOut) {
  inOrOut[0] = "ВИЇЗД:";
  console.log(inOrOut[0]);
  inOrOut = "non";
  console.log(inOrOut);
}

// for (let index = 0; index < popup_messages.length; index++) {
// 	const popup_message = popup_messages[index];
// 	if (popup_message.hasAttribute('data-popup')) {
// 		let popup_array = [popup_message];
// 		// popup_array = popup_message;
// 		console.log(popup_array);
// 	}
// 	console.log(popup_message);
// }

//=========================== CALENDAR ===============================================================================================================

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
  // let month_names = [];
  // console.log(month_names);
  // if (month_names.length == 0) {
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
  // console.log(month_names);
  // }

  let month_picker = document.querySelector("#month-picker");
  const dayTextFormate = document.querySelector(".day-text-formate");
  const timeFormate = document.querySelector(".time-formate");
  const dateFormate = document.querySelector(".date-formate");
  // var showCheckedDate = document.querySelector(".show_checked-date");

  month_picker.onclick = () => {
    console.log("click by month");
    if (showCheckedDate.classList.contains("_pulsing")) {
      showCheckedDate.classList.remove("_pulsing");
    }
    // reloadCheckedTime(send_time);
    // showDate(send_time);
    // reCheckedHour();
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
  var get_oll_time = [];
  // if (generateCalendar.length < 0) {
  // 	console.log(generateCalendar);
  // }

  var generateCalendar = (month, year) => {
    // console.log(generateCalendar);
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
    let closePopupWrapper = calendar.closest(".popup__content");
    let closePopupBody = calendar.closest(".popup__body");
    // console.log(closePopupBody);

    // console.log(closePopupBody);
    closePopupBody.addEventListener("click", function (e) {
      // console.log("click by body");
      if (!e.target.closest(".popup__content")) {
        console.log("click by body2");
        console.log("close body");
        reloadCheckedTime(send_time);
        reloadTime(send_time);
        reloadCheckedTime(send_time);
        showCheckedDate.classList.remove("show_in_date");
        showCheckedDate.classList.remove("_pulsing");
        if (showCheckedDate.classList.contains("in_date")) {
          showCheckedDate.classList.remove("in_date");
        } else if (showCheckedDate.classList.contains("out_date")) {
          showCheckedDate.classList.remove("out_date");
        }
        console.log(send_time);
        // e.preventDefault();
      }
    });
    console.log(closePopupWrapper);
    let closePopup = closePopupWrapper.querySelector(".close__btn");
    console.log(closePopup);
    closePopup.addEventListener("click", function (e) {
      // reloadCheckedTime(send_time);
      console.log("fi");
      reloadTime(send_time);
      reloadCheckedTime(send_time);
      showCheckedDate.classList.remove("show_in_date");
      showCheckedDate.classList.remove("_pulsing");
      console.log(send_time);
      e.preventDefault();
    });

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
      for (let i = 0; i < days_in_month.length; i++) {
        var checked_day = days_in_month[i];
        // console.log(checked_day);

        if (checked_day.classList.contains("checked-day")) {
          checked_day.classList.remove("checked-day");
        }
      }
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
          console.log(send_time);
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
        if (day_in_month.innerHTML === "") {
          console.log("stop");
          return;
        } else if (day_in_month.innerHTML !== "") {
          console.log("go");
          sendTime(send_time);
        }

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
          return;
          // console.log(send_time);
          // reloadTime(send_time);
          // console.log(send_time);
          // showDate(send_time);
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
                // send_time[0] = undefined;
                showDate(send_time);
                el.classList.remove("checked-hour");
                // reloadTime(send_time);
                // showDate(send_time);
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
        console.log("look 1");
        showDate(send_time);
        // console.log(send_day);
      }
    }
  };

  var show_checked_dates = document.getElementsByClassName("show_checked-date");
  console.log(show_checked_dates);
  for (let show = 0; show < show_checked_dates.length; show++) {
    var show_checked_date = show_checked_dates[show];
  }
  function showDate(send_time) {
    console.log(show_checked_date);
    if (send_time[0] !== undefined && send_time[2] !== undefined) {
      // show_checked_date.innerHTML = "";
      // show_checked_date.innerHTML = `Підтвердити <span style="color: #FCC000;"> ${inOrOut} </span> <br/> ЧАС:
      // <span style="color: #FCC000;"> ${send_time[2]} година </span>  <br/>
      // ДАТА: <span style="color: #FCC000;"> ${send_time[0]}  число </span>   <br/>
      // МІСЯЦЬ: <span style="color: #FCC000;"> ${send_time[1]} </span>`;
      // showCheckedDate.classList.add('show_in_date');
      // showCheckedDate.classList.add('_pulsing');
      show_checked_date.innerHTML = `Підтвердити  ${inOrOut} <br/> ЧАС: 
				${send_time[2]} година  <br/> 
				ДАТА: ${send_time[0]}  число   <br/> 
				МІСЯЦЬ: ${send_time[1]}`;
      showCheckedDate.classList.add("show_in_date");
      console.log("look");
      showCheckedDate.classList.add("_pulsing");
      // show_checked_date.classList.add('_pulsing');
      console.log("what do it");
      // sendCheckedInDate(show_checked_date)
      // show_checked_date.innerHTML = "";
      // reloadDateText(show_checked_date);
    } else if (send_time[0] === undefined || send_time[2] === undefined) {
      console.log(show_checked_date);
      console.log("why hes undefined?");
      setTimeout(() => {
        show_checked_date.innerHTML = "";
      }, 500);
      showCheckedDate.classList.remove("show_in_date");
      showCheckedDate.classList.remove("_pulsing");
      console.log("delete");
    }
    // reloadDateText(show_checked_date);
    // }
    // 	// e.preventDefault();
  }
  show_checked_date.addEventListener("click", function (e) {
    if (
      send_time[0] !== undefined &&
      send_time[2] !== undefined &&
      show_checked_date.innerHTML !== ""
    ) {
      console.log("ну і де зміни?");
      // show_checked_date.innerHTML = `<span style="color: #FCC000;"> ПІДТВЕРДЖЕНО: </span> <br/> ЧАС:
      // <span style="color: #FCC000;"> ${send_time[2]} година </span>  <br/>
      // ДАТА: <span style="color: #FCC000;"> ${send_time[0]}  число </span>   <br/>
      // МІСЯЦЬ: <span style="color: #FCC000;"> ${send_time[1]} </span>`;
      // if (show_checked_date.innerHTML == " ") {

      show_checked_date.innerHTML = ` ПІДТВЕРДЖЕНО: <br/> ЧАС: 
			${send_time[2]} година  <br/> 
			ДАТА: ${send_time[0]}  число   <br/> 
			МІСЯЦЬ: ${send_time[1]} </span>`;
      showCheckedDate.classList.remove("_pulsing");
      getOllTime(show_checked_date);
      console.log(`1 ++`);
      // }
      e.preventDefault();
    }
  });
  // function sendCheckedInDate(show_checked_date) {

  // }

  function getOllTime(show_checked_date) {
    if (show_checked_date.classList.contains("in_date")) {
      get_oll_time[0] = `Заселення ${show_checked_date.innerHTML}`;
      console.log("test-1");
    }
    if (show_checked_date.classList.contains("out_date")) {
      get_oll_time[1] = `Виселення ${show_checked_date.innerHTML}`;
      console.log("test-2");
    }
    // if ((get_oll_time[0] !== undefined) && (get_oll_time[1] !== undefined)) {
    if (get_oll_time.length >= 2) {
      console.log("test-3");
      createMessageOffDate(get_oll_time);
    }
    // console.log(send_time);
    console.log(get_oll_time);
  }
  // console.log(popup_message);
  function createMessageOffDate(get_oll_time) {
    var popup_message = document.getElementById("popup-message");
    var popup_massages_content =
      popup_message.querySelectorAll(".popup__content");
    // console.log(popup_massages_content);
    var popup_massages_tittle = popup_message.getElementsByTagName("h3");
    var popup_massages_text = popup_message.getElementsByTagName("p");
    for (let i = 0; i < popup_massages_tittle.length; i++) {
      const popup_massage_tittle = popup_massages_tittle[i];
      popup_massage_tittle.innerHTML = "";
      popup_massage_tittle.innerHTML =
        "Ми зв’яжемося з вами <br> якомога швидше";
      console.log("test-4");
      // Ваші дані були надіслані нашому оператору, <br> який зв'яжеться з вами найблищим часом. <h3>(For programmer:</h3>
      // <p>${get_oll_time[0]} <br> та <br> ${get_oll_time[1]}</p>)
    }
    for (let t = 0; t < popup_massages_text.length; t++) {
      var popup_massage_text = popup_massages_text[t];
      popup_massage_text.innerHTML = "";
      popup_massage_text.innerHTML = `Ваші дані були надіслані нашому оператору, <br> який зв'яжеться з вами найблищим часом 
			<h4>For programmer:</h4>
				<strong>${get_oll_time[0]} <br> та <br> ${get_oll_time[1]}</strong>`;
      console.log("test-5");
    }
    // let programmer_message = document.createElement("div");
    // if (get_oll_time.length == 2 ) {
    // 	console.log(get_oll_time);
    // 	console.log(programmer_message);
    // 	for (let c = 0; c < popup_massages_content.length; c++) {
    // 		var popup_massage_content = popup_massages_content[c];
    // 		// console.log(popup_massage_content);
    // 		programmer_message.innerHTML = `<h4>(For programmer:</h4>
    // 		<strong>${get_oll_time[0]} <br> та <br> ${get_oll_time[1]}</strong>)`;
    // 		console.log("test-6");
    // 		console.log(programmer_message);

    // 		// popup_massage_content.append(programmer_message);

    // 		// let programmer_message = popup_massage_content.createElement("div");
    // 		// popup_massage_content.createElementsByTagName("div");
    // 		// console.log(programmer_message);
    // 		// popup_massage_content.innerHTML = `<h3>(For programmer:</h3>
    // 		// <p>${get_oll_time[0]} <br> та <br> ${get_oll_time[1]}</p>)`;
    // 		let check_content = popup_massage_content.querySelectorAll('div');
    // 		if (check_content.length <= 2) {

    // 			popup_massage_content.append(programmer_message);
    // 			// popup_massage_content.append(programmer_message);
    // 		// 	// programmer_message.remove();
    // 			console.log(programmer_message);

    // 		}
    // 		programmer_message.innerHTML = "";
    // 		// if (check_content.length > 2) {
    // 		// 	console.log("remove_programmer text");
    // 		// }
    // 		// programmer_message.firstChild.remove();

    // 	}
    // }
    console.log(popup_message);
    console.log(get_oll_time);
  }

  // show_checked_date.addEventListener("click", function (e) {
  // 	console.log("ну і де зміни?");
  // 	show_checked_date.innerHTML = `Ви підтвердили дату заселення`;
  // 	e.preventDefault();
  // })

  // let closePopupWrapper = calendar.closest(".popup__content");
  // console.log(closePopupWrapper);
  // let closePopup = closePopupWrapper.querySelector('.close__btn');
  // console.log(closePopup);
  // closePopup.addEventListener("click", function (e) {
  // 	// reloadCheckedTime(send_time);
  // 	reloadTime(send_time)
  // 	e.preventDefault();
  // })

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
  console.log(month_list);
  // let month_list_out = calendar.querySelector(".month-list_out");
  month_names.forEach((e, index) => {
    let month = document.createElement("div");
    // console.log(month.innerHTML);
    // if (month.innerHTML !== `<div>${e}</div>`) {
    // console.log("gh");
    month.innerHTML = `<div>${e}</div>`;
    month_list.append(month);
    // month_list.append(month);
    // month_list_out.append(month);
    // console.log(month.innerHTML);
    // } else {
    // 	// month_list.append(month);
    // 	return;
    // }

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

//====================================================================================================================================================
//================= SHOW SERVICES ===============
const showServices = document.querySelectorAll("._show-services");
if (showServices.length > 0) {
  for (let index = 0; index < showServices.length; index++) {
    const showService = showServices[index];
    showService.addEventListener("click", function (e) {
      showService.classList.add("_hide-services");
      showService.closest(".content__row-wrapper").classList.add("_rotate");
      let showHiddenServicesWrapper = showService.closest(
        ".services__content-rows"
      );
      let getHiddenService =
        showHiddenServicesWrapper.querySelector(".hidden__row");
      getHiddenService.classList.remove("_hidden");
      e.preventDefault();
      const hideServices = showHiddenServicesWrapper.querySelector(
        "._hide-services-content"
      );
      hideServices.addEventListener("click", function (e) {
        hideServices.closest(".hidden__row").classList.add("_hidden");
        showService
          .closest(".content__row-wrapper")
          .classList.remove("_rotate");
        showService.classList.remove("_hide-services");
        e.preventDefault();
      });
    });
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
