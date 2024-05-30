var currentLocation = location.pathname.split('/').pop(); // retrieves the last part of the path name
// if (currentLocation === "index.html") {
    var navItems = document.getElementById("navigation").children;
    for ( var i = 0; i < navItems.length; i++) {
        if (navItems[i].localName === "span") {
            i++;
        }
        if (navItems[i].href.split('/').pop() === currentLocation) {
            activePage(navItems[i]);
        } else {
            removeActive(navItems[i]);
        }
    }
// }

function activePage(element) {
    element.classList.add("active");
    element.setAttribute("aria-current","page");
}

function removeActive(element) {
    element.classList.remove("active");
    element.removeAttribute("aria-current");
}