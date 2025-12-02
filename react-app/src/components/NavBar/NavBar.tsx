import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "./NavBar.scss";

import monogram from "../../assets/img/monogram.svg";
import primaryLogo from "../../assets/img/primary-logo.svg";
import menuIcon from "../../assets/img/menu-icon.svg";
import closeIcon from "../../assets/img/close-icon.svg";

function NavBar() {
    let [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("blur");
        } else {
            document.body.classList.remove("blur");
        }

        return () => {
            document.body.classList.remove("blur");
        };
    }, [isMenuOpen]);

    function toggleNavMenu(){
        setIsMenuOpen(current => !current);
    }
    
    function handleNavItemClick() {
        setIsMenuOpen(false);
    }

    return (
        <div className="nav-wrapper">
        <nav className={isMenuOpen ? "open" : ""}>
            <Link to="/" onClick={handleNavItemClick}>
                <img src={monogram} alt="Monogram" className="mobile-logo" hidden/>
                <img src={primaryLogo} alt="Personal Logo" className="desktop-logo" hidden/>
            </Link>

            <button id="navBtn" onClick={toggleNavMenu} aria-label="Expand navigation menu" hidden={isMenuOpen}>
                <img src={menuIcon} />
            </button>
            <button id="closeBtn" onClick={toggleNavMenu} aria-label="Close navigation menu" hidden={!isMenuOpen}>
                <img src={closeIcon} />
            </button>
            <button id="blurred-overlay" onClick={handleNavItemClick} aria-hidden="true" tabIndex="-1" hidden={!isMenuOpen}></button>

            <div id="navigation-items">
                <NavLink to="/" onClick={handleNavItemClick}>Home</NavLink>
                <NavLink to="/Projects" onClick={handleNavItemClick}>Projects</NavLink>
                <NavLink to="/Resume" onClick={handleNavItemClick}>Resume</NavLink>
                <NavLink to="/Contact" onClick={handleNavItemClick}>Contact</NavLink>
                <div id="external-links">
                    <a href="https://github.com/GabrielleYnara"  onClick={handleNavItemClick} target="_blank" aria-label="Opens GitHub profile in a new tab">GitHub</a>
                    <a href="https://www.linkedin.com/in/gabrielleynara/" onClick={handleNavItemClick} target="_blank" aria-label="Opens LinkedIn profile in a new tab">LinkedIn</a>
                </div>
                
            </div>
        </nav>
        </div>
    );
}

export default NavBar;