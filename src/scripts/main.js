/* eslint-env browser */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {

    //NAVBAR LINKS
    const links = document.querySelectorAll(".js-nav-link");
    const navbar = document.querySelector(".js-nav");
    const body = document.querySelector("body");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {

        // REMOVE PREVIOUS ACTIVED CLASSES
        links.forEach((item) => item.classList.remove("is-active"));

        // ADD NEW ACTIVE CLASSES
        link.classList.add("is-active");

        //  REMOVE TOGGLE CLASSES FOR MENU IN THE MOBILE
        navbar.classList.remove("is-open");
        body.classList.remove("is-unscrollable");
      });
    });

    // NAVBAR TOGGLER
    const toggler = document.querySelector(".js-nav-toggler");
    toggler.addEventListener("click", () => {
      navbar.classList.toggle("is-open");
      body.classList.toggle("is-unscrollable");
    });

    //  FORM COUNTER
    const counterContainer = document.querySelectorAll(".js-counter");
    const resetValue = document.querySelector(".js-counter--input");
    let count = 2;

    counterContainer.forEach((item) => {
      item.addEventListener("click", () => {
        const classes = item.classList;
        // INCREMENT
        if (classes.contains("js-counter--increment")) {
          count++;
        } else if (classes.contains("js-counter--decrement")) {
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

    // MENU TABS
    const tabs = document.querySelectorAll(".js-tabs__tab");
    const tabContents = document.querySelectorAll(".js-tabs__panel");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const targetTabContent = document.querySelector(
          `#${tab.dataset.tabTarget}`
        );

        // REMOVE PREVIOUS ACTIVED CLASSES
        tabs.forEach((tab) => tab.classList.remove("is-open"));
        tabContents.forEach((tabContent) =>
          tabContent.classList.remove("is-open")
        );

        // ADD NEW ACTIVE CLASSES
        tab.classList.add("is-open");
        targetTabContent.classList.add("is-open");
      });
    });
  });
})();

// DISHES SLIDER
const sliderContent = {
  '1': {
    'url': "images/slider/slide-1.webp",
    'title': "Sweet and sour pork",
    'description':
      "Sweet and Sour Pork Tenderloin is one of the classic cuisines in China. Pork tenderloin is the main material of this dish. <br /> The dish tastes sour and sweet, but also crispy outside and soft inside, which can stimulate people appetite.",
    'price': "36",
  },
  '2': {
    'url': "images/slider/slider-2.webp",
    'title': "Pork Wontons",
    'description':
      "There are no rules when it comes to dipping sauces for pork wontons. Go with what you like. <br /> I looooove pairing it with a gingery, vinegary based dipping sauce with a hint of sesame oil. ",
    'price': "54",
  },
  '3': {
    'url': "images/slider/slider-3.webp",
    'title': "Sweet and sour pork",
    'description':
      'This savory pepper steak sauce has a combination of beef and chicken broth which adds depth of flavor. <br /> Soy sauce and hot sauce enhance the other flavors in the dish, and just a touch of hot sauce is used, which doesn"t make it spicy.',
    'price': "12",
  },
};

// SWITCH BETWEEN SLIDER DATA
const switchSlider = (pageNumber = 1) => {
  let data = sliderContent[pageNumber];
  let result = "";
  result += `
            <div class="c-slider__content-img col-xl-7 col-lg-6  col-md-12 col-12 u-px-0">
                <img src="${data.url}" alt="${data.title}">
            </div>
            <div class="c-slider__content-container  u-px-0 col-xl-5 col-lg-6 col-md-12 col-12 u-flex u-flex--column u-flex--center">
              <p class="c-slider__content-title u-width--full u-flex u-flex--center u-text--center">
                ${data.title}
                </p>
                <p class="c-slider__content-description u-width--full u-text--center">
                    ${data.description}
                </p>
                <p class="c-slider__content-price u-width--full u-text--center">$${data.price}</p>
            </div>
        `;

  let number = `<span class="slider--active">${pageNumber} &nbsp </span> <span class="slider--inactive"> /  &nbsp ${Object.keys(sliderContent).length}</span>`;
  let slideNumber = document.querySelector(".js-slider__numbers");
  slideNumber.innerHTML = number;

  let sliderContainer = document.querySelector(".js-slider__content");
  sliderContainer.innerHTML = result;
};
switchSlider();

let slider = 1;

// COUNTER PREVIOUS BUTTON
const prevButton = () => {
  slider -= 1;
  if (slider < 1) {
    slider = Object.keys(sliderContent).length;
  }
  switchSlider(slider);
};

// COUNTER NEXT BUTTON
const nextButton = () => {
  slider += 1;
  if (slider > Object.keys(sliderContent).length) {
    slider = 1;
  }
  switchSlider(slider);
};
