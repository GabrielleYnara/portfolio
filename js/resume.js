let skillsDiv = document.getElementById("skills");
addSkillCategory("Languages: ", stringuify(skills.languages));
addSkillCategory("Technologies: ", stringuify(skills.technologies));
addSkillCategory("Human Skills: ", stringuify(skills.humanSkills));
addSkillCategory("Certifications: ", stringuify(skills.certifications));

let educationDiv = document.getElementById("education");
addEducation(education[0]);

let experienceDiv = document.getElementById("experience");
for (let i = 0; i < workExperience.length; i++){
    console.log(workExperience[i])
    addWorkExperience(workExperience[i]);
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
    div.classList.add("education");
    let row = document.createElement("div");
    let p = document.createElement("p");
    let label = document.createElement("b");
    row.classList.add("row");
    label.innerHTML = education.institution;
    p.classList.add("col-xs-12");
    p.classList.add("col-sm-8");
    p.append(label);
    row.append(p);

    p = document.createElement("p");
    p.classList.add("col-xs-12");
    p.classList.add("col-sm-4");
    p.classList.add("text-end")
    p.innerHTML = education.period;
    row.append(p);
    div.append(row);
    
    p = document.createElement("p");
    p.innerHTML = education.degree;
    div.append(p);

    if (education.project) { // project-related
        p = document.createElement("p");
        label = document.createElement("b");
        label.innerHTML = "Project: " + education.project + " ";
        p.append(label);
        p.append(education.projectSummary + ".");
        
        let ul = document.createElement("ul");
        for (let i = 0; i < education.projectDetails.length; i++){
            let li = document.createElement("li");
            li.innerHTML = education.projectDetails[i];
            ul.append(li);
        }
        p.append(ul);
        p.append("Details and source code are available on ");
        
        let a = document.createElement("a");
        a.href = education.projectFont;
        a.target = "_blank";
        a.ariaLabel = "GitHub repository (opens new tab)"
        a.innerHTML = "GitHub."
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

    p = document.createElement("p");
    p.classList.add("col-xs-12");
    p.classList.add("col-sm-4");
    p.classList.add("text-end")
    p.innerHTML = work.period;
    row.append(p);
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