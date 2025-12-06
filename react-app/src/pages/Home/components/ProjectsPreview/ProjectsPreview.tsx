import { NavLink } from "react-router-dom";

import ProjectHighlight from "../../../../components/ProjectHighlight/ProjectHighlight";

import "./ProjectsPreview.scss"

function ProjectsPreview(){
    return (
        <section className="projects-preview">
            <h1>Projects</h1>
            <p>
                Check out some of my projects.
            </p>
            <div id="projects">
                <ProjectHighlight/>
                <ProjectHighlight/>
                <NavLink to="/Projects" className="accent">See more projects</NavLink>
            </div>
            

        </section>);
}

export default ProjectsPreview;