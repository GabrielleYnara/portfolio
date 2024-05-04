var body = document.querySelector("body");
var expandableMenuBtn = document.getElementById("external-links-menu");
var floatBtn = document.getElementById("float_btn");

expandableMenuBtn.addEventListener("click", () => {
    toggleMenu();

});
document.body.addEventListener("click", closeMenuOnClickOutside);

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