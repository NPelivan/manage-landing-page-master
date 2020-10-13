$(".testimonial-items").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  arrows: false,
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const form = document.querySelector(".form");
const email = document.querySelector(".input-field");
const message = document.querySelector(".error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateEmail(email.value) || email.value === "") {
    message.textContent = "Please insert a valid email";
    $(".input-field").css("border", "red solid 1px");
    $(".error-message").css("color", "red");
  } else {
    //message.hide();
    email.value = "";
  }
});

// mobile nav

const burgerButton = document.querySelector(".burger-btn");
const closeButton = document.querySelector(".close-active");
const mobNav = document.querySelector(".mobile-nav");
const openButton = document.querySelector(".open");

burgerButton.onclick = () => {
  burgerButton.classList.toggle("active");
  mobNav.classList.toggle("show");
  closeButton.classList.toggle("close-active");
  openButton.classList.toggle("open");
};

mobNav.onclick = () => {
  mobNav.classList.toggle("show");
  burgerButton.classList.toggle("active");
  closeButton.classList.toggle("close-active");
};
