import { Link } from "react-router-dom";

import "./Intro.scss";

function Intro(){
    return <section className="intro">
        <div className="inner-content">
            <h2>Hi there, <br/> I'm Gabrielle Ynara!</h2>
            <h1>a full‑stack developer</h1>
            <p>specializing in accessible, user-centered web and Java-based applications. I’m all about improving usability, refactoring legacy code, and keeping things clean, readable, and maintainable (future me appreciates it).</p>
            <p>I currently work in an enterprise environment where accessibility, collaboration, and problem-solving shape my day-to-day. Outside of work, I like exploring new technologies and tinkering with personal projects that help me grow as a developer.</p>
            <Link to="/Contact" className="accent">Send me a message</Link>
        </div>
    </section>;
}

export default Intro;