var body = document.querySelector("body");
var expandableMenuBtn = document.getElementById("external-links-menu");
var floatBtn = document.getElementById("float_btn");
const lastMenuItem = document.getElementById("navigation").querySelector('a:first-of-type'); // Adjust selector as needed
console.log(lastMenuItem);
expandableMenuBtn.addEventListener("click", () => {
    toggleMenu();
    toggleBtnAriaLabel();
});
document.body.addEventListener("click", closeMenuOnClickOutside);

// Close menu if tabbing out of the last menu item
lastMenuItem.addEventListener('keyup', function(e) {
    if (e.key === 'Tab' && !e.shiftKey) {
        toggleMenu();
    }
});
//toggle menu upon clicks
function toggleMenu() {
    document.getElementById("floatIcons").classList.toggle("open");
    document.getElementById("float_btn").classList.toggle("open");
    document.body.classList.toggle("blur");
}

// Closes the menu if clicked outside
function closeMenuOnClickOutside(event) {
    // Check if the menu is open and the click is outside the menu
    if (floatBtn.classList.contains("open") && !floatBtn.contains(event.target)) {
        toggleMenu();
    }
}

function toggleBtnAriaLabel() {
    var open = "Open external links menu";
    var close = "Close external links menu";
    if (expandableMenuBtn.ariaLabel === open) {
        expandableMenuBtn.ariaLabel = close;
    } else {
        expandableMenuBtn.ariaLabel = open;
    }
}