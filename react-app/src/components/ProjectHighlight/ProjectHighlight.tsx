import { NavLink } from "react-router-dom";
import "./ProjectHighlight.scss"

function ProjectHighlight(){
    const project = {
        description: "Quick summary of the project Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        demo_url: "#"
    }
    return <div className="project-highlight">
        <span></span>
        <div>
            <p>{project.description}</p>
            <div className="links">
                <a href={project.demo_url} target="_blank" aria-label="Opens project in a new tab">Demo</a>
                <NavLink to="/Projects/ProjectDetails">Project details</NavLink>
            </div>
            
        </div>
    </div>;
}

export default ProjectHighlight;