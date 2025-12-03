import stackedLogo from "../../../../assets/img/stacked-logo.svg";

import "./Hero.scss"

function Hero() {
    return (
        <div className="hero">
            <img src={stackedLogo} alt="Personal Logo"/>
            <h2>Software Developer specializing in Accessibility</h2>
        </div>
    );
}

export default Hero;