import stackedLogo from "../../../../assets/img/stacked-logo.svg";

import "./Hero.scss"

function Hero() {
    return <section className="hero">
        <div className="inner-content">
            <img src={stackedLogo} alt="Personal Logo"/>
            <h2>Software Developer specializing in Accessibility</h2>
        </div>
        
    </section>;
}

export default Hero;