
let menu = document.querySelector('#menu-icon');

let menuItems = document.querySelector("#menuItems");
menuItems.style.maxHeight = "0px";


function menuToggle() {
    if(menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "600px";
    }else{
        menuItems.style.maxHeight="0px";
    }
    
}

let submitMenuIcon = document.querySelector("#submitMenu");
let submitMenu = document.querySelector(".subMenu");
submitMenu.style.maxHeight = "0px";

function subMenuToggle() {
    if(submitMenu.style.maxHeight == "0px") {
        submitMenu.style.maxHeight = "900px";
    }else{
        submitMenu.style.maxHeight="0px";
    }
}