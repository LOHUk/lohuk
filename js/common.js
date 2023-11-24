// Back to top
let mybutton = document.getElementById("back-to-top");

// add class fixed
// let fixedScroll = document.getElementById("fixed-Scroll");
let clFixedScroll = document.querySelector(".fixed-Scroll");

// Get element
const epoxyLamp = document.getElementById("epoxyLamp");
const showmenu = document.getElementById("showmenu");

// Call function
epoxyLamp.addEventListener("click", ShowMenu);

//Show menu
function ShowMenu() {
  showmenu.classList.toggle("hidden");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    // fixedScroll.classList.add("fixed");
    clFixedScroll.classList.add("fixed");
  } else {
    mybutton.style.display = "none";
    // fixedScroll.classList.remove("fixed");
    clFixedScroll.classList.remove("fixed");
  }
}
