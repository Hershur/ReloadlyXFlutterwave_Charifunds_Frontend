import NavLink from "../atoms/NavLink";

const HeaderNav = ( { isLandingPage }: { isLandingPage?: Boolean } ):JSX.Element => {
    return (
        <div className="page-nav">
            <NavLink text="Home"  textStyle={{color: '#2f5349'}} link="/" />
            <NavLink text="Pages"  textStyle={{color: '#2f5349'}} link="/" />
            <NavLink text="Portfolio"  textStyle={{color: '#2f5349'}} link="/" />
            <NavLink text="Sign In"  textStyle={{color: '#2f5349'}} link="/" />
            {isLandingPage && 
                <NavLink text="Donate now"  textStyle={{color: '#2f5349', border: '1px solid #2f5349', height: '20px'}} link="/foundation" />
            }
        </div>
    );
};

export default HeaderNav;