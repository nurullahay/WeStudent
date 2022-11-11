
let menu = document.querySelector('#menu-icon');
let menuClose = document.querySelector('#closeMenu-icon');

let menuItems = document.querySelector("#menuItems");
menuItems.style.maxHeight = "0px";


function menuToggle() {
    if(menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "600px";
    }else{
        menuItems.style.maxHeight="0px";
    }
    
}
