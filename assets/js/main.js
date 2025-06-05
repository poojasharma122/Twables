  // mobil
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const nav = document.querySelector(".nav");
  const menuToggle = document.querySelector(".menu-toggle");

  if (searchIcon) {
      searchIcon.addEventListener("click", function () {
          nav.classList.toggle("search");
          nav.classList.toggle("no-search");
      });
  }

  if (menuToggle) {
      menuToggle.addEventListener("click", function () {
          nav.classList.toggle("mobile-nav");
          this.classList.toggle("is-active");
      });
  }
});


// faqs

let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})


document.querySelector(".form-wrapper").addEventListener("submit", function(e) {
  e.preventDefault(); 
});



  AOS.init(1200);



         $(document).ready(function() {
    $(".nav_dropdown").click(function(e) {
        e.preventDefault(); 
        $(this).next().slideToggle();
    });
});