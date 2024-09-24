'use strict';

/**
 * Add event listener on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * PRELOADER
 * 
 * Preloader will be visible until document load
 */
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  if (preloader) {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }
});

/**
 * MOBILE NAVBAR
 * 
 * Show the mobile navbar when clicking the menu button
 * and hide it after clicking the menu close button or overlay
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER & BACK TOP BTN
 * 
 * Activate header & back top button when window scrolls down to 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

/**
 * Form Steps Logic
 */
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll("#subscription-form .form-step");
  const nextButtons = document.querySelectorAll("#subscription-form .next-btn");
  const prevButtons = document.querySelectorAll("#subscription-form .prev-btn");
  const progressBarSteps = document.querySelectorAll("#subscription-form .progress-bar .step");
  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.classList.toggle("active", index === stepIndex);
      progressBarSteps[index].classList.toggle("active", index <= stepIndex);
    });
  }

  nextButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  prevButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  showStep(currentStep);
});

/**
 * SCROLL REVEAL
 */
const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  revealElements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight / 1.15) {
      element.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);

/**
 * Modal Logic
 */
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contact-modal');
  const btn = document.getElementById('open-modal');
  const span = document.getElementsByClassName('close-button')[0];

  if (btn && modal && span) {
    // Open the modal
    btn.onclick = function() {
      modal.style.display = 'block';
    }

    // Close the modal
    span.onclick = function() {
      modal.style.display = 'none';
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  }
});