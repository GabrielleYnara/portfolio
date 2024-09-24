// Listen for the custom languageChange event
document.addEventListener("languageChange", (event) => {
    console.log("Language changed to:", event.detail);
    generateProjects(); // Call generateProjects when the language changes
});

function generateProjects() {
    // Converts string back into object
    const translations = JSON.parse(localStorage.getItem("translations"));
    const projectContainer = document.querySelector(".show-items");
    projectContainer.innerHTML = ""; // Clear existing projects
    console.log("GenerateProjects");
    console.log(translations);
    translations.projects.forEach((project) => {
        let inactive = project.inactive === true ? 'inactive' : '';
        const projectCard = `
            <a class="${inactive} card col-12 col-md-5 " href="https://gabrielleynara.github.io/tic-tac-toe/" target="_blank" aria-label="${project.aria_label}">
                <span class="project">${project.title}</span>
                <span class="project-details">${project.description}</span>
            </a>
        `;
        projectContainer.innerHTML += projectCard;
    });
}

// generateProjects();
