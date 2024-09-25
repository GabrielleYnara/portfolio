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
    span.classList.add("text-end")
    span.innerHTML = work.period;
    row.append(span);
    div.append(row);

    p = document.createElement("p");
    p.innerHTML = work.company + " | " + work.location;

    div.append(p);

    let ul = document.createElement("ul");
    for (let i = 0; i < work.experience.length; i++){
        let li = document.createElement("li");
        li.innerHTML = work.experience[i];
        ul.append(li);
    }
    div.append(ul);
    experienceDiv.append(div);
}