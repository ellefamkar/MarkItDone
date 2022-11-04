/* eslint-env browser */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    //NAVBAR LINKS
    const links = document.querySelectorAll(".nav__item a");
    const navbar = document.querySelector(".nav");
    const body = document.querySelector("body");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        // REMOVE PREVIOUS ACTIVED CLASSES
        links.forEach((item) => item.classList.remove("active"));

        // ADD NEW ACTIVE CLASSES
        link.classList.add("active");

        //  REMOVE TOGGLE CLASSES FOR MENU IN THE MOBILE
        navbar.classList.remove("nav__expanded");
        body.classList.remove("stop-scrolling");
      });
    });

    // NAVBAR TOGGLER
    const toggler = document.querySelector(".nav__toggler");
    toggler.addEventListener("click", (event) => {
      navbar.classList.toggle("nav__expanded");
      body.classList.toggle("stop-scrolling");
    });

    //  FORM COUNTER
    const counterContainer = document.querySelectorAll(".counter-divs");
    const resetValue = document.querySelector(".counter-input");
    let count = 2;
    counterContainer.forEach((item) => {
      item.addEventListener("click", () => {
        const classes = item.classList;
        // INCREMENT
        if (classes.contains("increment")) {
          count++;
        } else if (classes.contains("decrement")) {
          // DECREMENT FOR NUMMBERS GREATER THAN 2
          if (count > 2) {
            count--;
          }
        } else {
          count = 2;
        }
        resetValue.value = count;
      });
    });

    // OUR MENU TABS
    const tabs = document.querySelectorAll(".menu__tab");
    const tabContents = document.querySelectorAll(".tab-content");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const targetTabContent = document.querySelector(
          `#${tab.dataset.tabTarget}`
        );

        // REMOVE PREVIOUS ACTIVED CLASSES
        tabs.forEach((tab) => tab.classList.remove("active-tab"));
        tabContents.forEach((tabContent) =>
          tabContent.classList.remove("active-tab")
        );

        // ADD NEW ACTIVE CLASSES
        tab.classList.add("active-tab");
        targetTabContent.classList.add("active-tab");
      });
    });
  });
})();

// POPULAR DISHES SLIDER
const sliderContent = {
  1: {
    url: "images/slider/slide-1.webp",
    title: "Sweet and sour pork",
    description:
      "Sweet and Sour Pork Tenderloin is one of the classic cuisines in China. Pork tenderloin is the main material of this dish. <br /> The dish tastes sour and sweet, but also crispy outside and soft inside, which can stimulate people appetite.",
    price: "36",
  },
  2: {
    url: "images/slider/slider-2.webp",
    title: "Pork Wontons",
    description:
      "There are no rules when it comes to dipping sauces for pork wontons. Go with what you like. <br /> I looooove pairing it with a gingery, vinegary based dipping sauce with a hint of sesame oil. ",
    price: "54",
  },
  3: {
    url: "images/slider/slider-3.webp",
    title: "Sweet and sour pork",
    description:
      'This savory pepper steak sauce has a combination of beef and chicken broth which adds depth of flavor. <br /> Soy sauce and hot sauce enhance the other flavors in the dish, and just a touch of hot sauce is used, which doesn"t make it spicy.',
    price: "12",
  },
};

// Switch between slider datas
const switchSlider = (pageNumber = 1) => {
  let data = sliderContent[pageNumber];
  let result = "";
  result += `
            <div class="slider__content-img col-xl-7 col-lg-6  col-md-12 col-12 px-0">
                <img src="${data.url}" alt="${data.title}">
            </div>
            <div class="slider__content-container  col-xl-5 col-lg-6 col-md-12 col-12 u-flex u-flex--column u-flex--center">
              <p class="slider__content-title">
                ${data.title}
                </p>
                <p class="slider__content-description">
                    ${data.description}
                </p>
                <p class="slider__content-price">$${data.price}</p>
            </div>
        `;

  let number = `<span class="active-slider">${pageNumber} <span> <span class="deactive-color"> /  &nbsp ${
    Object.keys(sliderContent).length
  }</span>`;
  let slideNumber = document.querySelector("#slider_number");
  slideNumber.innerHTML = number;

  let sliderContainer = document.querySelector("#slider_content");
  sliderContainer.innerHTML = result;
};
switchSlider();

let slider = 1;

// previous button action
const prevButton = () => {
  slider -= 1;
  if (slider < 1) {
    slider = Object.keys(sliderContent).length;
  }
  switchSlider(slider);
};

// next button action
const nextButton = () => {
  slider += 1;
  if (slider > Object.keys(sliderContent).length) {
    slider = 1;
  }
  switchSlider(slider);
};
