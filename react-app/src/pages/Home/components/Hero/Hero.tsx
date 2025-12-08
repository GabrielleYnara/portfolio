import stackedLogo from "../../../../assets/img/stacked-logo.svg";

import "./Hero.scss"

function Hero() {
    return <section className="hero">
        <img src={stackedLogo} alt="Personal Logo"/>
        <h2>Software Developer specializing in Accessibility</h2>
    </section>;
}

export default Hero;