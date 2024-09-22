function toggleNavMenu(){
    var nav = document.getElementById("navigation-items");
    if (nav.classList.contains("open")){ //closes
        nav.classList.remove("open");
        closeBtn.hidden = true;
        navBtn.hidden = false;
        document.querySelector("main").classList.toggle("blur");
        document.querySelector("main").removeEventListener("click", toggleNavMenu);
        lastNavItem.removeEventListener("focusout", toggleNavMenu);
    } else { //opens
        nav.classList.add("open");
        closeBtn.hidden = false;
        navBtn.hidden = true;
        document.querySelector("main").classList.toggle("blur");
        document.querySelector("main").addEventListener("click", toggleNavMenu);
        lastNavItem.addEventListener("focusout", toggleNavMenu);
    }
}

function activePage(element) {
    element.classList.add("active");
    element.setAttribute("aria-current","page");
}

function removeActive(element) {
    element.classList.remove("active");
    element.removeAttribute("aria-current");
}

var currentLocation = location.pathname.split('/').pop(); // retrieves the last part of the path name
const navBtn = document.getElementById("navBtn");
var navItems = document.querySelectorAll("#navigation-items li");
var closeBtn = document.getElementById("closeBtn");
const lastNavItem = document.getElementById("navigation-items").querySelector('li:last-of-type');

// Runs through menu items and mark the current page as active
for ( var i = 0; i < navItems.length; i++) {    
    if (navItems[i].children[0].href.split('/').pop() === currentLocation) {
        activePage(navItems[i]);
    } else {
        removeActive(navItems[i]);
    }
}

navBtn.addEventListener("click", toggleNavMenu);
closeBtn.addEventListener("click", toggleNavMenu);
