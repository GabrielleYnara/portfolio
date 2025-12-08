import { NavLink } from "react-router-dom";
import gitHubLogo from "../../assets/img/gitHub-logo.svg";
import linkedInLogo from "../../assets/img/linkedIn-logo.svg";

import "./Footer.scss"

function Footer() {
    return <footer>
        <div className="content">
            <div>
                <div className="external-links">
                    <a href="https://github.com/GabrielleYnara" target="_blank" aria-label="Opens GitHub profile in a new tab">
                        <img src={gitHubLogo}/>
                    </a>
                    <a href="https://www.linkedin.com/in/gabrielleynara/" target="_blank" aria-label="Opens LinkedIn profile in a new tab">
                        <img src={linkedInLogo}/>
                    </a>
                </div>
                <NavLink to="/Contact">Let's work together</NavLink>
            </div>
            <p>built by Gabrielle Ynara</p>
        </div>
    </footer>;
}

export default Footer;