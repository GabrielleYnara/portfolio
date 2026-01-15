import logo from "../../../../assets/img/stacked-logo.svg";
import puzzlePieces from "../../../../assets/img/puzzle-pieces.svg";
import mysticCards from "../../../../assets/img/cards.svg";
import constellation from "../../../../assets/img/constellation.svg";
import eye from "../../../../assets/img/eye.svg";
import sparkle from "../../../../assets/img/sparkle1.svg";
import moon from "../../../../assets/img/moon.svg";
import arrow from "../../../../assets/img/arrow.svg";

import "./Hero.scss"

function Hero() {
    return <section className="hero">
        <div className="inner-content">

            <div className="config">
                <a href="#" id="language" className="accent">Português</a>
                <a href="#">
                    <img src={moon} id="moon"/>
                </a>
            </div>
            
            <img src={puzzlePieces} aria-hidden id="puzzle-pieces"/>
            <img src={sparkle} aria-hidden id="sparkle"/>
            <img src={arrow} aria-hidden id="arrow"/>
            <img src={constellation} aria-hidden id="constellation"/>
            <img src={eye} aria-hidden id="eye"/>
            <img src={mysticCards} aria-hidden id="mystic-cards"/>
            {/* <img src={} aria-hidden id=""/> */}

            <img src={logo} alt="Personal Logo" id="logo"/>
            <h2>Software Developer specializing in Accessibility</h2>
        </div>
        
    </section>;
}

export default Hero;