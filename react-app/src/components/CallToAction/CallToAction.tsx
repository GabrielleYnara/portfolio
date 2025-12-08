import Button from "../Button/Button"

import "./CallToAction.scss";

function CallToAction({isHomePage}) {
    return <section className={isHomePage ? "home cta" : "cta"} >
        <div className="inner-content">
           <h1>Do you need a Software Developer?</h1>
            <p>If you're looking for a software developer who likes to get things done, let's talk.</p>
            <p className="email"><strong>gabrielleynara@ymail.com</strong></p>
            <Button button={{title: "Send me a message", class: "golden-button", destination: "/Contact"}}/>
        </div>
            </section>;
}

export default CallToAction;