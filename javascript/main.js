const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


// const titleButton = document.querySelectorAll(".title");
// const listItems = document.querySelectorAll(".list-item li");

// titleButton.addEventListener("click", () => {
//     listItems.classList.add("show");

// })
const titleButton = document.querySelectorAll(".title")
const listItems = document.querySelectorAll(".list-items")

function sizeScreen() {
    var altura = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;


    if (altura <= 768) {
        for (let i = 0; i <= titleButton.length; i++) {
            titleButton[i].removeAttribute("disabled");
            }
        }
        else {
            for (let i = 0; i <= titleButton.length; i++) {
                titleButton[i].setAttribute("disabled", "disabled");
                }
            }
    }

sizeScreen();

const titleButton1 = document.querySelector("#title-1")
const titleButton2 = document.querySelector("#title-2")
const titleButton3 = document.querySelector("#title-3")
const titleButton4 = document.querySelector("#title-4")
const titleButton5 = document.querySelector("#title-5")
const titleButton6 = document.querySelector("#title-6")
const titleButton7 = document.querySelector("#title-7")
const titleButton8 = document.querySelector("#title-8")
const titleButton9 = document.querySelector("#title-9")

const listItem1 = document.querySelector("#list-items-1")
const listItem2 = document.querySelector("#list-items-2")
const listItem3 = document.querySelector("#list-items-3")
const listItem4 = document.querySelector("#list-items-4")
const listItem5 = document.querySelector("#list-items-5")
const listItem6 = document.querySelector("#list-items-6")
const listItem7 = document.querySelector("#list-items-7")
const listItem8 = document.querySelector("#list-items-8")
const listItem9 = document.querySelector("#list-items-9")

$( "titleButton1" ).click(function() {
    $( "listItem1" ).toggle( "slow", function() {
    // Animation complete.
  });
});