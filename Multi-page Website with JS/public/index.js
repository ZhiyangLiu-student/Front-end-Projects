'use strict'
const MenuButton = document.querySelector("#menu_button");
const dropdown_menu = document.querySelector(".dropdown_content");
let isOpen = true;
function toggleMenu(){
    if(isOpen){
        dropdown_menu.classList.add("open");
    }else{
        dropdown_menu.classList.remove("open");
    }
    isOpen = !isOpen;
}
MenuButton.addEventListener("click", toggleMenu);
MenuButton.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        toggleMenu();
    }
})
MenuButton.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (isOpen = true) {
            dropdown_menu.classList.remove("open");
        }
    }
})