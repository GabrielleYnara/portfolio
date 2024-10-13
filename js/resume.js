window.addEventListener('DOMContentLoaded', () => {
    // Check if language is already set in localStorage and generate resume
    const lang = localStorage.getItem("selectedLanguage") || "en"; // Default to English if none is found
    generateResume(); // Generate content based on stored language
});

// Listen for the custom languageChange event
document.addEventListener("languageChange", () => {
    console.log("resume.js notified, gerenate Resume");
    generateResume();
});

let skillsDiv = document.getElementById("skills");
let educationDiv = document.getElementById("education");
let experienceDiv = document.getElementById("experience");

function generateResume() {
    // Converts string back into object
    const translations = JSON.parse(localStorage.getItem("translations"));
    // Reset the page
    const paragraphs = skillsDiv.querySelectorAll("p");
    const workDivs = experienceDiv.querySelectorAll("[class='work']");
    const educationDivs = educationDiv.querySelectorAll("[class='degree']");
    // Loop through each element and remove it
    paragraphs.forEach((p) => p.remove());    
    workDivs.forEach((div) => div.remove());
    educationDivs.forEach((div) => div.remove());

    translations.skills.forEach((skill) => {
        addSkillCategory(`${skill.category}: `,stringuify(skill.items));
    });
    translations.education.forEach((education) => {
        addEducation(education);
    });
    translations.work_experience.forEach((experience) => {
        addWorkExperience(experience);
    });
}


function stringuify(array){
    let txtResult = "";
    for (let i = 0; i < array.length; i++){
        if (i === array.length -1){ // ultimo item
            txtResult = txtResult.concat(array[i], ".");
        } else {
            txtResult = txtResult.concat(array[i], ", ");
        }
    }
    return txtResult;
}

function addSkillCategory(label, content) {
    let p = document.createElement("p");
    let bold = document.createElement("b");
    bold.innerHTML = label;
    p.append(bold);
    p.append(content);
    skillsDiv.append(p);
}

function addEducation(education){
    let div = document.createElement("div");
    div.classList.add("degree");
    let row = document.createElement("div");
    let p = document.createElement("p");
    let label = document.createElement("b");
    row.classList.add("row");
    label.innerHTML = education.institution;
    p.classList.add("col-xs-12");
    p.classList.add("col-sm-8");
    p.append(label);
    row.append(p);

    span = document.createElement("span");
    span.classList.add("col-xs-12");
    span.classList.add("col-sm-4");
    span.classList.add("text-end")
    span.innerHTML = education.period;
    row.append(span);
    div.append(row);
    
    p = document.createElement("p");
    p.innerHTML = education.degree;
    div.append(p);

    if (education.project) { // project-related
        p = document.createElement("p");
        label = document.createElement("b");
        label.innerHTML = education.project + " ";
        p.append(label);
        p.append(education.projectSummary + ".");
        
        let ul = document.createElement("ul");
        for (let i = 0; i < education.projectDetails.length; i++){
            let li = document.createElement("li");
            li.innerHTML = education.projectDetails[i];
            ul.append(li);
        }
        p.append(ul);
        p.append(education.projectFont_label);
        
        let a = document.createElement("a");
        a.href = education.projectFont_url;
        a.target = "_blank";
        a.ariaLabel = education.projectFont_ariaLbl;
        a.innerHTML = `${education.projectFont}.`;
        p.append(a);
        div.append(p);
    } // end - project exist
    educationDiv.append(div);
} // end - addEducation

function addWorkExperience(work){
    div = document.createElement("div");
    div.classList.add("work");
    headerDiv = document.createElement("div");
    headerDiv.classList.add("expandable");
    let row = document.createElement("div");
    let p = document.createElement("p");
    let label = document.createElement("b");
    row.classList.add("row");
    label.innerHTML = work.role;
    p.classList.add("col-xs-12");
    p.classList.add("col-sm-8");
    p.append(label);
    row.append(p);

    span = document.createElement("span");
    span.classList.add("col-xs-12");
    span.classList.add("col-sm-4");
    span.classList.add("text-end");
    span.innerHTML = work.period;
    row.append(span);
    headerDiv.append(row);

    secondRow = document.createElement("div");
    secondRow.classList.add("row");
    p = document.createElement("p");
    p.classList.add("col-11");
    p.innerHTML = work.company + " | " + work.location;
    secondRow.append(p);
    icon = document.createElement("button");
    icon.classList.add("col-1");
    icon.classList.add("text-end");
    icon.classList.add("icon");
    secondRow.append(icon);

    headerDiv.append(secondRow);
    div.append(headerDiv);

    let ul = document.createElement("ul");
    ul.classList.add("work-description");
    for (let i = 0; i < work.experience.length; i++){
        let li = document.createElement("li");
        li.innerHTML = work.experience[i];
        ul.append(li);
    }
    div.append(ul);

    let line = document.createElement("hr");
    line.classList.add("thin-line");
    line.setAttribute("aria-hidden", "true");
    div.append(line);
    experienceDiv.append(div);

    //Dynamically expands or collapses the job description according to data;
    if (work.expanded){
        showJobDescription(ul);
    } else {
        hideJobDescription(ul);
    }
    headerDiv.addEventListener("click", toggleJobDescription);
}

function toggleJobDescription(event){
    let el = event.target.closest(".expandable"); 
    if (el.nextSibling.getAttribute("hidden")) {
        showJobDescription(el.nextSibling);
    } else {
        hideJobDescription(el.nextSibling);
    }
}

function hideJobDescription(element) {  
    element.setAttribute("hidden", "true");
    let icon = element.previousSibling.lastChild.lastChild;
    icon.setAttribute("aria-expanded", "false");
    icon.setAttribute("aria-label", "Show Job Description");
    icon.innerHTML = `<svg viewBox="0 0 24 24" width="22px" height="22px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9L12 15L5 9" stroke="#c2d4e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    element.nextSibling.removeAttribute("hidden");
}

function showJobDescription(element) {
    element.removeAttribute("hidden"); //show description
    element.nextSibling.setAttribute("hidden", "true"); //hide line
    let icon = element.previousSibling.lastChild.lastChild;
    icon.setAttribute("aria-label", "Hide Job Description");
    icon.setAttribute("aria-expanded", "true");
    // icon.setAttribute("","");
    icon.innerHTML = `<svg viewBox="0 0 24 24" width="22px" height="22px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 15L12 9L5 15" stroke="#c2d4e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
}