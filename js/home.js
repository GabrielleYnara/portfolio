window.addEventListener('DOMContentLoaded', () => {
    // Check if language is already set in localStorage and generate projects
    const lang = localStorage.getItem("selectedLanguage") || "en"; // Default to English if none is found
    generateProjects(); // Generate content based on stored language
});

// Listen for the custom languageChange event
document.addEventListener("languageChange", () => {
    console.log("home.js notified, gerenate Projects");
    generateProjects(); // Call generateProjects when the language changes
});

function generateProjects() {
    // Converts string back into object
    const translations = JSON.parse(localStorage.getItem("translations"));
    const projectContainer = document.querySelector(".show-items");
    projectContainer.innerHTML = ""; // Clear existing projects
    translations.projects.forEach((project) => {
        let inactive = project.inactive === true ? 'inactive' : '';
        let aria_disabled = project.inactive === true ? 'aria-disabled="true" tabindex="-1"' : '';
        const projectCard = `
            <a class="${inactive} card col-12 col-md-5 " href="https://gabrielleynara.github.io/tic-tac-toe/" target="_blank" aria-label="${project.aria_label}" ${aria_disabled}>
                <span class="project">${project.title}</span>
                <span class="project-details">${project.description}</span>
            </a>
        `;
        projectContainer.innerHTML += projectCard;
    });
}

// generateProjects();
