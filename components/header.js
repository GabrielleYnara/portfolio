class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div id="LangSwitcher">
                    <a href="#" id="portuguese" lang="pt">Português</a>
                    <a href="#" id="english" hidden="true" lang="en">English</a>
                </div>
                <div id="BtnsContainer">
                    <button id="navBtn" aria-label="Expand menu">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#1C274C"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1C274C"></path> 
                            <path d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="#1C274C"></path></g>
                        </svg>
                    </button>
                    <button id="closeBtn" aria-label="Close menu" hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#61A5DA" stroke-width="1.5"></path> 
                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#61A5DA" stroke-width="1.5" stroke-linecap="round"></path> </g>
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul id="navigation-items">
                        <li class="active" aria-current="page">
                            <a href="index.html" data-translate="home">Home</a>
                        </li>
                        <li>
                            <a href="resume.html" data-translate="resume">Resume</a>
                        </li>
                        <li>
                            <a href="contact.html" data-translate="contact">Contact</a>
                        </li>
                        <hr aria-hidden="true">
                        <li class="external-links" id="linkedin">
                            <a href="https://www.linkedin.com/in/gabrielleynara/" target="_blank" aria-label="My LinkedIn profile (opens new tab)">
                                <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="10 10 30 30">
                                        <path d="M24.84 9.955c-8.34 0-15.101 6.76-15.101 15.1s6.76 15.101 15.1 15.101c8.342 0 15.1-6.762 15.1-15.1 0-8.34-6.758-15.1-15.1-15.1Zm-4.227 21.416h-2.944v-9.42h2.944v9.42Zm-1.547-10.598h-.02c-1.065 0-1.757-.72-1.757-1.632 0-.93.711-1.635 1.798-1.635 1.086 0 1.754.703 1.775 1.632 0 .913-.69 1.635-1.796 1.635ZM32.39 31.371h-3.337v-4.875c0-1.276-.52-2.145-1.67-2.145-.879 0-1.367.587-1.593 1.153-.085.203-.073.486-.073.77v5.097H22.41s.042-8.635 0-9.42h3.306v1.478c.195-.646 1.252-1.569 2.94-1.569 2.09 0 3.733 1.355 3.733 4.272v5.239Z"/>
                                </svg>
                                <span class="visibility">LinkedIn</span>
                            </a>
                        </li>
                        <li class="external-links" id="github">
                            <a href="https://github.com/GabrielleYnara" target="_blank" aria-label="My GitHub profile (opens new tab)">
                                <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 98 96">
                                    <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                </svg>
                                <span class="visibility">GitHub</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
        console.log("header.js runnig")
        const navBtn = this.querySelector("#navBtn");
        const closeBtn = this.querySelector("#closeBtn");
        const languageSwitcher = document.getElementById("LangSwitcher");
        let lang = "";

        let currentLocation = location.pathname.split('/').pop(); // retrieves the last part of the path name
        let navItems = document.querySelectorAll("#navigation-items li");

        // temporary hide language options on resume and contact pages
        if (currentLocation === "contact.html"){
            
            languageSwitcher.hidden = true;
        }
        navBtn.addEventListener("click", toggleNavMenu);
        closeBtn.addEventListener("click", toggleNavMenu);
        languageSwitcher.childNodes.forEach((item) => {
            item.addEventListener("click", toggleLanguageOption);
        });
        console.log("selectedLanguage: ");
        console.log(localStorage.getItem("selectedLanguage"));
        if (localStorage.getItem("selectedLanguage")) {
            loadLanguage(localStorage.getItem("selectedLanguage"));
        } else {
            loadLanguage(document.querySelector("[lang]").getAttribute("lang"));
        }
        // Runs through menu items and mark the current page as active
        navItems.forEach( (item) => {
            if (item.children[0].href.split('/').pop() === currentLocation) {
                activePage(item);
            } else {
                removeActive(item);
            }
        });
    }
}
//register the element
customElements.define("header-component", Header); //DOMString, class