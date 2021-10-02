import NavLink from "../atoms/NavLink";

const HeaderNavMobile = ( { isLandingPage }: { isLandingPage?: Boolean } ):JSX.Element => {
    return (
        <div className="page-nav-mobile">
            <NavLink text="Home"  textStyle={{color: '#2f5349'}} link="/" />
            <NavLink text="Foundations"  textStyle={{color: '#2f5349'}} link="/" />
            <NavLink text="About Us"  textStyle={{color: '#2f5349'}} link="/" />
            <NavLink text="Sign In"  textStyle={{color: '#2f5349'}} link="/" />
            {isLandingPage && 
                <NavLink text="Donate now"  textStyle={{color: '#2f5349', border: '1px solid #2f5349', height: '20px'}} link="/foundation" />
            }
        </div>
    );
};

export default HeaderNavMobile;