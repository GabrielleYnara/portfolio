import { Link } from "react-router-dom";
import "./NavBar.sass";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    )
}

export default NavBar;