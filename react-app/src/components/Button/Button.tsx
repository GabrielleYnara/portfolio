import { NavLink } from "react-router-dom";
import "./Button.scss"

function Button({button}){
    return <NavLink to={button.destination} className={button.class} role="button">
        {button.title}
    </NavLink>;
}

export default Button;