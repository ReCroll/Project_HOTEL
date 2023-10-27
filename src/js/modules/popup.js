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


const popupInLinks = document.querySelectorAll('.get_date-popup');
const popupOutLinks = document.querySelectorAll('.rooms__info-button');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock__padding');
// console.log(lockPadding);

let unlock = true;

const timeout = 800;
const timeoutTwo = 600;

var ollPopupsHidden = document.querySelectorAll('.popup');
console.log(ollPopupsHidden);
for (let hiddenPopup = 0; hiddenPopup < ollPopupsHidden.length; hiddenPopup++) {
	let ollPopupHidden = ollPopupsHidden[hiddenPopup];
	console.log(ollPopupHidden);
	setTimeout(function () {
		console.log("what is doing");
		// ollPopupHidden.classList.remove('none__class')
		// if (ollPopupHidden.length > 0) {
			
			ollPopupHidden.classList.remove('none__class')
			console.log(ollPopupHidden);
		// }
	}, timeout);
}

if (popupInLinks.length > 0) {
    for (let index = 0; index < popupInLinks.length; index++) {
        const popupLink = popupInLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute('get_popup').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })      
    }
}

if (popupOutLinks.length > 0) {
    for (let index = 0; index < popupOutLinks.length; index++) {
        const sliderLink = popupOutLinks[index];
        sliderLink.addEventListener("click", function(e) {
            const sliderName = sliderLink.getAttribute('get_popup').replace('#', '');
            const curentSlider = document.getElementById(sliderName);
            popupOpen(curentSlider);
            e.preventDefault();
        })      
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {

			const popupActive = document.querySelector('.popup.open');
			// console.log(popupActive);
			if (popupActive) {
				console.log(popupActive);
				popupClose(popupActive, false);
			} else { 
				bodyLock();
			}

        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if(!e.target.closest('.popup__content')) {               
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    
    if (unlock) {
			console.log(popupActive);
    //     // const contentActives = document.querySelector('.lesson__content.open');
    //     // const sliderImageShow = document.querySelector('.slider__popup-img.open');
        if (popupActive) {
					
					popupActive.classList.remove('open');
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
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if(lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
						console.log(el);
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('_lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }    
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
//==================  POPUP end  ======================