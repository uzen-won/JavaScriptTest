let homeNewWrapper = document.querySelector(".today-news .swiper-wrapper");
let homeNewSlide = document.querySelectorAll(".today-news .swiper-wrapper .swiper-slide");
let weatherBottom = document.querySelector(".weather .weather-bottom");
let flexibleArea = document.querySelector(".flexible-area");
let formSearch = document.querySelector("#formSearch");
let slideTab = document.querySelector(".slide-tab");
let icoLink = document.querySelector(".ico-link"); 
let icoLinkTop = icoLink.getBoundingClientRect().top;
let greenDot = document.querySelector(".green-dot");

//_.throttle;
window.addEventListener(
  "scroll",
  _.throttle(function () {
    let winScrollY = parseInt(window.scrollY);
    console.log(`winScrollY : ${winScrollY}`);
    
    if (winScrollY > icoLinkTop) {
      formSearch.className = "search-fix";
      icoLink.style.paddingTop = '70px';
      gsap.to(slideTab, {
        display: "block",
        opacity: 1,
      })
      //gsap.to(greenDot, {});

    } else { 
      formSearch.classList.remove("search-fix");
      icoLink.style.paddingTop = "0";
      gsap.to(slideTab,{
        display: "none",
        opacity: 0,
      });

    }



  },100)
);
    

let homeNewSlideLength = homeNewSlide.length;
homeNewWrapper.style.width = homeNewSlideLength * 100;

let pgFontDown = document.querySelector("footer .foot-top button#pgFontDown");
let pgFontUp = document.querySelector("footer .foot-top button#pgFontUp");
