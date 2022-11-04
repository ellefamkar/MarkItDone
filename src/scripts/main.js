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

// FORM VALIDATION
// const inputs = ["name", "phone", "email", "calendar", "time", "len"];
// const input = document.getElementsByClassName("required");

// let errors = [];

// const name = (name) => {
//   let target = document.querySelector(`input[name=${name}]`);
//   let value = target.value;
//   console.log(value.length);
//   if (value == "" || value.length <= 0) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is required`;
//     return false;
//   } else {
//     if (value.length <= 4) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(name).innerHTML = `The ${name} most be longger`;
//       return false;
//     }
//   }
//   document.getElementById(name).innerHTML = "";
//   return true;
// };

// const email = (name) => {
//   let target = document.querySelector(`input[name=${name}]`);
//   let value = target.value;
//   if (
//     value.length <= 0 ||
//     value.indexOf("@") === -1 ||
//     value.indexOf(".") === -1
//   ) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   document.getElementById(name).innerHTML = "";
//   return true;
// };

// const phone = (name) => {
//   let target = document.querySelector(`input[name=${name}]`);
//   let value = target.value;
//   if (isNaN(value) || value.length != 11) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   document.getElementById(name).innerHTML = "";
//   return true;
// };

// const calendar = (name) => {
//   let target = document.querySelector(`input[name=${name}]`);
//   let value = target.value;
//   let day = value.split("-")[2];
//   let month = value.split("-")[1];
//   let year = value.split("-")[0];
//   if (year.length != 4) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   if (month.length != 2) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   if (day.length != 2) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   document.getElementById(name).innerHTML = "";
//   return true;
// };

// const time = (name) => {
//   let target = document.querySelector(`input[name=${name}]`);
//   let value = target.value;
//   let houre = value.split(":")[0];
//   let minutes = value.split(":")[1];
//   if (isNaN(houre) || houre.length != 2 || houre > 23 || houre < 0) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   if (isNaN(minutes) || minutes.length != 2 || minutes > 59 || minutes < 0) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   document.getElementById(name).innerHTML = "";
//   return true;
// };

// const len = (name) => {
//   let target = document.querySelector(`input[name=${name}]`);
//   let value = target.value;
//   if (isNaN(value) || value == 0) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(name).innerHTML = `The ${name} is not available`;
//     return false;
//   }
//   document.getElementById(name).innerHTML = "";
//   return true;
// };

// const validator = (target_name) => {
//   console.log(target_name);
//   let result = eval(target_name + `(target_name)`);
// };

// Array.from(input).forEach(function (i) {
//   i.addEventListener("input", (e) => {
//     let target_name = e.target.name;
//     eval(target_name + `(target_name)`);
//   });
// });

// document.getElementById("submit-btn").addEventListener("click", () => {
//   errors = [];
//   Array.from(inputs).forEach(function (i) {
//     validator(i);
//   });
//   if (errors.includes("len")) {
//     let index = errors.indexOf("len");
//     errors[index] = "number";
//   }
//   if (errors.includes("time")) {
//     let index = errors.indexOf("time");
//     errors[index] = "time";
//   }
//   if (errors.includes("calendar")) {
//     let index = errors.indexOf("calendar");
//     errors[index] = "date";
//   }
//   if (errors.length > 0) {
//     let message_err = "something is wrong, please check ";
//     for (let e = 0; errors.length > e; e++) {
//       if (errors.length > 1) {
//         if (errors[e + 1] !== undefined) {
//           message_err = message_err + errors[e] + ", ";
//         } else {
//           message_err = message_err + "and " + errors[e] + ".";
//           message_err = message_err.replace(", and", " and");
//         }
//       } else {
//         message_err = message_err + errors[e] + ".";
//       }
//     }
//     document.getElementById(
//       "reject_content"
//     ).innerHTML = `<p>${message_err}</p>`;
//     document.getElementById("reject").classList.add("active-form");
//   } else {
//     document.getElementById("success").classList.add("active-form");
//   }
// });

// document.getElementById("success_btn").addEventListener("click", () => {
//   document.getElementById("success").classList.remove("active-form");
// });

// document.getElementById("reject_btn").addEventListener("click", () => {
//   document.getElementById("reject").classList.remove("active-form");
// });

// let errors = [];

// const validation = (error_id, value, type, len, name, required = false) => {
//   if (required == true && value.length <= 0) {
//     if (!errors.includes(name)) {
//       errors.push(name);
//     }
//     document.getElementById(error_id).innerHTML = `The ${name} is required`;
//     return;
//   }
//   if (error_id == "" || value == "" || type == "") {
//     console.error("The iserted varaible are wrong");
//   }
//   if (type == "text") {
//     if (required == true && (value == "" || value.length <= 0)) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(error_id).innerHTML = `The ${name} is required`;
//     } else {
//       if (len !== null && value.length <= len) {
//         if (!errors.includes(name)) {
//           errors.push(name);
//         }
//         document.getElementById(
//           error_id
//         ).innerHTML = `The ${name} most be longger`;
//       } else {
//         document.getElementById(error_id).innerHTML = ``;
//       }
//     }
//   }
//   if (type == "number") {
//     if (isNaN(value) || (len !== null && value.length != len)) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(
//         error_id
//       ).innerHTML = `The ${name} is not available`;
//     } else {
//       document.getElementById(error_id).innerHTML = "";
//     }
//   }
//   if (type == "email") {
//     if (
//       value.length <= 0 ||
//       value.indexOf("@") === -1 ||
//       value.indexOf(".") === -1 ||
//       value.endsWith(".")
//     ) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(
//         error_id
//       ).innerHTML = `The ${name} is not available`;
//     } else {
//       document.getElementById(error_id).innerHTML = "";
//     }
//   }
//   if (type == "date") {
//     console.log("here");
//     let day = value.split("-")[2];
//     let month = value.split("-")[1];
//     let year = value.split("-")[0];
//     if (year.length != 4) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(
//         error_id
//       ).innerHTML = `The ${name} is not available`;
//       return;
//     }
//     if (month.length != 2) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(
//         error_id
//       ).innerHTML = `The ${name} is not available`;
//       return;
//     }
//     if (day.length != 2) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(
//         error_id
//       ).innerHTML = `The ${name} is not available`;
//       return;
//     }
//     document.getElementById(error_id).innerHTML = "";
//   }
//   if (type == "time") {
//     let houre = value.split(":")[0];
//     let minutes = value.split(":")[1];
//     if (isNaN(houre) || houre.length != 2 || houre > 23 || houre < 0) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(
//         error_id
//       ).innerHTML = `The ${name} is not available`;
//       return;
//     }
//     if (isNaN(minutes) || minutes.length != 2 || minutes > 59 || minutes < 00) {
//       if (!errors.includes(name)) {
//         errors.push(name);
//       }
//       document.getElementById(
//         error_id
//       ).innerHTML = `The ${name} is not available`;
//       return;
//     }
//     document.getElementById(error_id).innerHTML = "";
//     return;
//   }
// };

// document.getElementById("submit-btn").addEventListener("click", () => {
//   errors = [];
//   let inputs = document.getElementsByClassName("validation");
//   for (let i = 0; inputs.length > i; i++) {
//     var event = new Event("input", {
//       bubbles: true,
//       cancelable: true,
//     });
//     inputs[i].dispatchEvent(event);
//   }

//   if (errors.length > 0) {
//     let message_err = "something is wrong, please check ";
//     for (let e = 0; errors.length > e; e++) {
//       if (errors.length > 1) {
//         if (errors[e + 1] !== undefined) {
//           message_err = message_err + errors[e] + ", ";
//         } else {
//           message_err = message_err + "and " + errors[e] + ".";
//           message_err = message_err.replace(", and", " and");
//         }
//       } else {
//         message_err = message_err + errors[e] + ".";
//       }
//     }
//     document.getElementById(
//       "reject_content"
//     ).innerHTML = `<p>${message_err}</p>`;
//     document.getElementById("reject").classList.add("active");
//   } else {
//     document.getElementById("success").classList.add("active");
//   }

//   document.getElementById("success_btn").addEventListener("click", () => {
//     document.getElementById("success").classList.remove("active");
//   });

//   document.getElementById("reject_btn").addEventListener("click", () => {
//     document.getElementById("reject").classList.remove("active");
//   });
// });


