// swiper

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  //  pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// ----------------------------------------------------------



let arr = ["Medicines", "Home care", "Child care", "Food & Drinks", "Hygien"];
let Question = document.getElementById("Question");
let i = 0;
setInterval(() => {
  Question.style.color = "green";
  Question.innerText = arr[i];
  i++;
  if (i == arr.length - 1) {
    i = 0;
  }
}, 3000);

const user_drop_list = document.querySelector("#user_drop_list");
const userIcon = document.querySelector("#userIcon");


userIcon.addEventListener("mouseover", () => {
  user_drop_list.style.display = "block";
});


userIcon.addEventListener("mouseout", () => {
  user_drop_list.style.display = "none";
});


