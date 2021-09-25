import Logo from "../atoms/Logo"
import HeaderNav from "../molecules/HeaderNav"

const Header = ():JSX.Element => {
    return (
        <div className="page-header">
            <Logo />

            <HeaderNav />
        </div>
    )
};

export default Header;