import Button from "../Button/Button"

import "./CallToAction.scss";

function CallToAction() {
    return <section className="cta">
        <h1>Do you need a Software Developer?</h1>
        <p>If you're looking for a software developer who likes to get things done, let's talk.</p>
        <p className="email"><strong>gabrielleynara@ymail.com</strong></p>
        <Button button={{title: "Send me a message", class: "golden-button", destination: "/Contact"}}/>
    </section>;
}

export default CallToAction;