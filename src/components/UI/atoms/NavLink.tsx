import { Link } from "react-router-dom";

type NavLinkProps = {
    text: string | JSX.Element;
    textStyle: object;
    link: string;
};

const NavLink = ({text, textStyle, link}: NavLinkProps): JSX.Element => {
    return <span style={textStyle}> <Link to={link}>{text}</Link></span> 
}

export default NavLink;