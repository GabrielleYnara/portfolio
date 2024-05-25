let skillsDiv = document.getElementById("skills");
addSkillCategory("Languages: ", stringuify(skills.languages));
addSkillCategory("Technologies: ", stringuify(skills.technologies));
addSkillCategory("Human Skills: ", stringuify(skills.humanSkills));
addSkillCategory("Certifications: ", stringuify(skills.certifications));

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
    let strong = document.createElement("b");
    strong.innerHTML = label;
    p.append(strong);
    p.append(content);
    skillsDiv.append(p);
}