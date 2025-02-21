// Dynamically update all circular progress bars
document.querySelectorAll(".circular-progress").forEach((progress) => {
  const percentage = parseInt(progress.getAttribute("data-percentage")); // Get percentage from data attribute
  const valueElement = progress.querySelector(".progress-value"); // Find the span inside
  let startValue = 0;
  const speed = 30; // Adjust the speed as needed

  const progressInterval = setInterval(() => {
    startValue++;
    valueElement.textContent = `${startValue}%`;
    progress.style.background = `conic-gradient(#4caf50 ${
      startValue * 3.6
    }deg, #ededed 0deg)`;

    if (startValue === percentage) {
      clearInterval(progressInterval);
    }
  }, speed);
});

// Filter posts using jQuery
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// Sticky navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      // Add padding to body
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbarHeight + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      // Remove padding from body
      document.body.style.paddingTop = "0";
    }
  });
});

// hire me button scroll to download CV section
let hireMeBtn = document.getElementById("hire-me-btn");
hireMeBtn.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Back-to-top button functionality
let mybutton = document.getElementById("btn-back-to-top");

// Show button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".contact-form button")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent page reload

      // Get form values
      let name = document.querySelector("input[placeholder='Name']").value;
      let email = document.querySelector("input[placeholder='E-mail']").value;
      let mobile = document.querySelector(
        "input[placeholder='Mobile No.']"
      ).value;
      let message = document.querySelector(
        "textarea[placeholder='Message']"
      ).value;

      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Initialize EmailJS
      emailjs.init("V67clBuAMQzmsaGpG"); // Replace with your EmailJS Public Key

      // Send email
      emailjs
        .send("service_y0ru77p", "template_sysqpvn", {
          from_name: name,
          from_email: email,
          mobile: mobile,
          message: message,
        })
        .then(
          function (response) {
            alert("Email sent successfully!");
          },
          function (error) {
            alert("Error sending email. Please try again.");
            console.error("EmailJS error:", error);
          }
        );
    });
});
