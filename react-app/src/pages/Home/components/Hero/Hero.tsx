import primaryLogo from "../../../../assets/img/primary-logo.svg";
import stackedLogo from "../../../../assets/img/stacked-logo.svg";

import "./Hero.scss"

function Hero() {
    return (
        <div className="hero">
            <img src={stackedLogo} alt="Personal Logo" className="logo-mobile"/>
            <img src={primaryLogo} alt="Personal Logo" className="desktop-logo"/>
            <h2>Software Developer specializing in Accessibility</h2>
        </div>
    );
}

export default Hero;