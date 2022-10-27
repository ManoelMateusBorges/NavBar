"use strict";
const menu = document.querySelector("#menu");
const toggleBtn = document.querySelector(".simbol");
toggleBtn.addEventListener("click", () => {
    let menuVisible = menu.classList.contains("nav-menu");
    if (!menuVisible) {
        menu.classList.add("nav-menu");
    }
    else {
        menu.classList.remove("nav-menu");
    }
});
// menu.classList.add("list-menu2");
console.log(menu.classList.contains("list-menu"));
console.log(menu.classList);
