import { Link } from "react-router-dom";

import "./Intro.scss";

function Intro(){
    return (
        <div className="intro">
            <h2>Hi there, <br/> I'm Gabrielle Ynara!</h2>
            <h1>a full‑stack developer</h1>
            <p> with a passion for accessibility. I build inclusive web and Java‑based applications and have experience in accessibility testing, cross‑team collaboration, and training.</p>
            <p>Currently, I work for a private company; in my free time, you’ll find me tinkering with independent projects to explore new technologies, sharpen my skills, and have fun.</p>
            <Link to="/Contact" className="accent">Contact Me</Link>
        </div>
    );
}

export default Intro;