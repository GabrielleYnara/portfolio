class SourceCode extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <a id="source-code" href="https://github.com/GabrielleYnara/portfolio" target="_blank" data-translate="source_code">Check out the source code and details on GitHub.</a>
        `;
        document.getElementById("source-code").setAttribute("aria-label", loadAriaLabel());

        // returns aria label for github link acording to selected language
        function loadAriaLabel() {
            // Converts string back into object
            const translations = JSON.parse(localStorage.getItem("translations"));
            const key = "source_code_aria_lbl";
            return translations[key];
        }
    }
    
}

//register the element
customElements.define("source-code-component", SourceCode); //DOMString, class

