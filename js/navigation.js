/** This method toggles menu.
 * When the menu is closed: it hides the menu button and shows the close button instead;
 * it blurs the rest of the screen, and adds an event listener to remove blur when user clicks or tabs out of menu;
 * a menu is expanded with a list of items.
 * When the menu is open: it hides the close button and shows the menu button instead;
 * the menu collapses, and the blur is removed.
  */
function toggleNavMenu(){
    let nav = document.getElementById("navigation-items");
    const lastNavItem = document.getElementById("navigation-items").querySelector('li:last-of-type');
    let isMenuOpen = nav.classList.contains("open");
    closeBtn.hidden = isMenuOpen;
    navBtn.hidden = !isMenuOpen;
    document.body.classList.toggle("blur");
    nav.classList.toggle("open");

    if (isMenuOpen){
        document.body.removeEventListener("click", handleBodyClicks);
        lastNavItem.removeEventListener("focusout", toggleNavMenu); // toggles the menu when tabbing through the last item
    } else {
        document.body.addEventListener("click", handleBodyClicks);
        lastNavItem.addEventListener("focusout", toggleNavMenu);
    }
}

/** This method closes the menu when clicking outside the menu box or */
function handleBodyClicks(event){
    let header = document.querySelector("header");
    if (!header.contains(event.target) 
        || event.target.parentNode.classList.contains("external-links")){
        toggleNavMenu();
    }
}
/** This method adds styling class and accessibility atributes to indicate current page */
function activePage(element) {
    element.classList.add("active");
    element.setAttribute("aria-current","page");
}
/** This method removes styling class and accessibility atributes indicating current page */
function removeActive(element) {
    element.classList.remove("active");
    element.removeAttribute("aria-current");
}

let currentLocation = location.pathname.split('/').pop(); // retrieves the last part of the path name
const navBtn = document.getElementById("navBtn");
let navItems = document.querySelectorAll("#navigation-items li");
let closeBtn = document.getElementById("closeBtn");

// Runs through menu items and mark the current page as active
navItems.forEach( (item) => {
    if (item.children[0].href.split('/').pop() === currentLocation) {
        activePage(item);
    } else {
        removeActive(item);
    }
});


navBtn.addEventListener("click", toggleNavMenu);
closeBtn.addEventListener("click", toggleNavMenu);
