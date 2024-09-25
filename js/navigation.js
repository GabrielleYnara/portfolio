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

// loads the file
function loadLanguage(lang) {
    if (!document.getElementById(`${lang}-script`)){ //prevents reloading the script
        let script = document.createElement("script");
        let file = lang === "pt" ? "portuguese" : "english";
        script.src = `js/${file}.js`;
        script.id = `${lang}-script`; // to track if it has been loaded
        document.body.append(script);
        script.onload = () => {
            switchLanguage(lang);
            // Dispatch custom event to inform home.js of language change
            const langChangeEvent = new CustomEvent("languageChange", { detail: lang });
            document.dispatchEvent(langChangeEvent); // Dispatch event
        }
        
    } else {
        switchLanguage(lang);
        // Dispatch custom event to inform home.js of language change
        const langChangeEvent = new CustomEvent("languageChange", { detail: lang });
        document.dispatchEvent(langChangeEvent); // Dispatch event
    }
}

// replace elements with value in key stored on files
function switchLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    const translations = lang === "en" ? en : pt; 

    // Save the selected language and translations in local storage
    localStorage.setItem("selectedLanguage", lang); 
    // Convert the object into JSON, since localStorage accepts only string 
    localStorage.setItem("translations", JSON.stringify(translations));
    elements.forEach (el => {
        const key = el.getAttribute("data-translate");
        if (key === "showcase_description") {
            el.innerHTML = translations[key];
        } else {
            el.textContent = translations[key];
        }
        
    });
}

function toggleLanguageOption(event){
    let lang = event;
    document.getElementById("english").setAttribute("hidden", "true");
    document.getElementById("portuguese").setAttribute("hidden", "true");

    if (event.target != null){
        lang = event.target.id === "portuguese" ? "pt" : "en"; 
    }
    //toggle visibility of language options
    if (lang == "pt") {
        document.getElementById("english").removeAttribute("hidden");
        
    } else {
        document.getElementById("portuguese").removeAttribute("hidden");
    }

    // Set the language attribute and load the translation
    document.querySelector("[lang]").setAttribute("lang", lang);
    loadLanguage(lang);
}