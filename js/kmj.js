var navbarButton = document.getElementById("openBtn");
var closeButton = document.getElementById("closeBtn");
var sidepanel = document.getElementById("sidebar");

let vh = window.innerHeight * 0.01;
const navbar = document.getElementsByClassName("navbar");

document.documentElement.style.setProperty("--vh", `${vh}px`);

function openTab(evt, content) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(content).style.display = "flex";
  evt.currentTarget.className += " active";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("active");
  } else {
    document.getElementById("nav").classList.remove("active");
  }
}

// SIDEPANEL
let navStat = false;
navbarButton.addEventListener("click", () => {
  if (!navStat) {
    sidepanel.classList.add("open");
    // navbarButton.classList.add("open");
    navStat = true;
  } else {
    sidepanel.classList.remove("open");
    // navbarButton.classList.remove("open");
    navStat = false;
  }
});
closeButton.addEventListener("click", () => {
  if (!navStat) {
    sidepanel.classList.add("open");
    // navbarButton.classList.add("open");
    navStat = true;
  } else {
    sidepanel.classList.remove("open");
    // navbarButton.classList.remove("open");
    navStat = false;
  }
});
