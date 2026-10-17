import sparkle2 from "../../assets/img/sparkle2.svg";
import sparkle3 from "../../assets/img/sparkle3.svg";
import outlinedSparkle from "../../assets/img/outlined-sparkle.svg";
import constellation from "../../assets/img/constellation.svg";

import "./Contact.scss";
import PageConfig from "../../components/PageConfig/PageConfig";
import Button from "../../components/Button/Button";


function Contact() {
    return <div className="contact">
        <div className="dots" aria-hidden>
            {Array.from({length:53}, (_, i) => (
                <span key={i}></span>
            ))}
        </div>
        <div className="inner-content">
            <PageConfig/>
            <h2>Got a project in mind?</h2>
            <p>Use the form to give me as much detail as possible and I'll get back to you as soon as I can.</p>
            <p>Alternatively, get in touch using the email below</p>
            <p className="accent-text">gabrielleynara@ymail.com</p>
            <img src={sparkle2} aria-hidden id="sparkle2"/>
            <form>
                <h1>Send me a message</h1>
                <div className="inner-form">
                    <label htmlFor="identity" className="form-label" >Name</label>
                    <input type="text" id="identity" className="form-control" name="name" placeholder="First and Last name" autoComplete="given-on"/>
                    <div className="invalid-feedback" id="invalid-identity">
                        Don't forget your name, so I'll know who you are.
                    </div>
                    <label htmlFor="email" className="form-label" data-translate="email">Email</label>
                    <input type="email" id="email" className="form-control" name="email" placeholder="example@email.com"/>
                    <div className="invalid-feedback" id="invalid-email" >
                        Add your email, so I can reply to you.
                    </div>
                    <label htmlFor="message" className="form-label" data-translate="message">Message</label>
                    <textarea id="message" name="message" className="form-control" placeholder="Write your message here" autoComplete="on"></textarea>
                    <div className="invalid-feedback" id="invalid-message">
                        Don't forget your message.
                    </div>
                </div>
                <Button button={{title: "Send message", class: "golden-button", destination: ""}}/>
            </form>
            <img src={sparkle3} aria-hidden id="sparkle3"/>
            <img src={outlinedSparkle} aria-hidden id="outlined-sparkle"/>
            <img src={constellation} aria-hidden id="constellation"/>
        </div>
    </div>;
}

export default Contact;