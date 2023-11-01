// $(document).ready(function(){
// 	$(".popup__body").click(function () {
// 					if ($(".lesson__content").hasClass("open")) {
// 							$('.lesson__content').removeClass('active-mobile')
// 							// $('#active-mobile-menu, #blur').addClass('hide-active-mobile');
// 					}
// 					return false;
// 	});
// });

//==================  POPUP start  ======================

const popupInLinks = document.querySelectorAll(".get_date-popup");
const popupOutLinks = document.querySelectorAll(".rooms__info-button");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock__padding");
// console.log(lockPadding);

let unlock = true;

const timeout = 800;
const timeoutTwo = 600;

var ollPopupsHidden = document.querySelectorAll(".popup");
// console.log(ollPopupsHidden);
for (let hiddenPopup = 0; hiddenPopup < ollPopupsHidden.length; hiddenPopup++) {
  let ollPopupHidden = ollPopupsHidden[hiddenPopup];
  // console.log(ollPopupHidden);
  setTimeout(function () {
    // console.log("what is doing");
    // ollPopupHidden.classList.remove('none__class')
    // if (ollPopupHidden.length > 0) {

    ollPopupHidden.classList.remove("none__class");
    // console.log(ollPopupHidden);
    // }
  }, timeout);
}

if (popupInLinks.length > 0) {
  for (let index = 0; index < popupInLinks.length; index++) {
    const popupLink = popupInLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("get_popup").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

if (popupOutLinks.length > 0) {
  for (let index = 0; index < popupOutLinks.length; index++) {
    const sliderLink = popupOutLinks[index];
    sliderLink.addEventListener("click", function (e) {
      const sliderName = sliderLink.getAttribute("get_popup").replace("#", "");
      const curentSlider = document.getElementById(sliderName);
      popupOpen(curentSlider);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    // console.log(popupActive);
    if (popupActive) {
      // console.log(popupActive);
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    // console.log(popupActive);
    //     // const contentActives = document.querySelector('.lesson__content.open');
    //     // const sliderImageShow = document.querySelector('.slider__popup-img.open');
    if (popupActive) {
      popupActive.classList.remove("open");
    }
    // generateCalendar = " ";
    // setTimeout(function(){
    //     if (contentActives){
    //         contentActives.classList.remove('open');
    //     }
    // }, timeout);

    // setTimeout(function(){
    //     if (sliderImageShow){
    //         sliderImageShow.classList.remove('open');
    //     }
    // }, timeout);
    // setTimeout(function(){
    //     if (sliderImageShow && contentActives){
    //         contentActives.classList.add('open');
    //         sliderImageShow.classList.remove('open');
    //     }
    // }, timeout);

    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      // console.log(el);
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("_lock");
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("_lock");
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
//==================  POPUP end  ======================
//========================== SEND FORM & SHOW POPUP ===================

document.addEventListener("DOMContentLoaded", function () {
  // const renameClassAttr = "checked__id-0";
  // let createFormId = "form__phone";
  // let createFormEmailId = "form__email";
  // const sending = document.getElementById("wrapper");
  // let createInputId = "input__0";
  // let createButtonId = "button__0";
  // let form = document.getElementById("form__phone");
  let formEmail = document.getElementById("form__email");
  // let telInput = form.querySelector('input[type="tel"]');
  // let im = new Inputmask("+3 (999) 999-99-99");
  // im.mask(telInput);
  // console.log(telInput.inputmask.unmaskedvalue());
  // for (let index = 0; index < popupLinks.length; index++) {
  //   const popupLink = popupLinks[index];
  // form.addEventListener("submit", formSend);
  formEmail.addEventListener("submit", formSendEmail);

  async function formSendEmail(e) {
    e.preventDefault();

    let error = formValidate(formEmail);

    let formDataEmail = new FormData(formEmail);
    if (error === 0) {
      // sending.classList.add("sending");
      // let response = await fetch("sendmail.php", {
      //   method: "POST",
      //   body: formDataEmail,
      // });
      let response = true;
      if (response) {
        popupOpen(popupFormSuccess);
        // popupFormClose(popupFormSuccess);
        formEmail.reset();
        // sending.classList.remove("sending");
      } else {
        popupOpen(popupFormError);
        // sending.classList.remove("sending");
        // popupFormClose(popupFormError);
      }
    } else {
      popupOpen(popupFormEmailWarning);
      // sending.classList.remove("sending");
      // popupFormClose(popupFormEmailWarning);
    }
  }

  // }
  function formValidate(form, telInput) {
    // let telInput = form.querySelector('input[type="tel"]');

    // console.log(telInput);
    // console.log(inputs);
    let error = 0;
    let formReg = form.querySelectorAll(".req");
    // console.log(formReg);
    // console.log(telInput.inputmask.unmaskedvalue());
    // setInterval(() => {
    //   console.log(error);
    // }, 1000);
    for (let index = 0; index < formReg.length; index++) {
      const input = formReg[index];
      // console.log(input.value.length);
      // console.log(input.value);
      // console.log(input.value.number);
      formRemoveError(input);
      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }
      // else if (telInput.inputmask.unmaskedvalue().length != 10) {
      //   // console.log("десфть цифр");
      //   // let im = new maskFunctions("+3 (999) 999-99-99");
      //   // let im = new Inputmask("+3 (999) 999-99-99");
      //   // im.mask(telInput);
      //   formAddError(input);
      //   error++;
      // }
      // else if (telInput) {
      // }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("error");
    input.classList.add("error");
    // }
  }
  function formRemoveError(input) {
    if (input.classList.contains("error")) {
      input.parentElement.classList.remove("error");
      input.classList.remove("error");
    }
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
