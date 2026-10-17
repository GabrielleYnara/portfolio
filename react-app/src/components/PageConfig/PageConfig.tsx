import moon from "../../assets/img/moon.svg";
import "./PageConfig.scss";

function PageConfig() {
    return (
        <section className="config">
            <a href="#" id="language" className="accent">Português</a>
            <a href="#">
                <img src={moon} id="moon"/>
            </a>
        </section>
    )
}

export default PageConfig;