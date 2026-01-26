'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if(sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}

// The toggle functionality 

const themeBtn = document.querySelector("[data-theme-btn]");
const HTML = document.documentElement;

// Check if user has a saved preference
const isLight = localStorage.getItem("theme") === "light";

// Apply saved theme on load
if (isLight) {
  HTML.setAttribute("data-theme", "light");
}

themeBtn.addEventListener("click", function () {
  // Toggle the attribute
  if (HTML.getAttribute("data-theme") === "light") {
    HTML.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  } else {
    HTML.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});