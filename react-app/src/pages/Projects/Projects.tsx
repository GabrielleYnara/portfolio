import {Link} from "react-router-dom";

function Projects() {
    return <div>
        <h1>Projects Page</h1>
        <Link to="/Projects/ProjectDetails">Project Details</Link>
    </div>;
}

export default Projects;