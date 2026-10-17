import "./Contact.scss";
import PageConfig from "../../components/PageConfig/PageConfig";

function Contact() {
    return <div className="contact">
        <div className="dots" aria-hidden>
            {Array.from({length:53}, (_, i) => (
                <span key={i}></span>
            ))}
        </div>
        <div className="inner-content">
            <PageConfig/>
        </div>
    </div>;
}

export default Contact;