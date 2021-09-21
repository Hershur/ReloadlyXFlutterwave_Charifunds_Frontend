import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';
import ButtonP from "../atoms/Button";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Outline = (): JSX.Element => {
    return (
        <div className="page-outline">
            <div className="page-outline-left">
                <Logo />

                <div className="page-outline-details">
                    Fundraising for the Charities and causes you care about
                </div>

                <div className="page-outline-details-sub">
                    We've spent the last 5 years helping over 25,000 teams
                    just like yourself to create and sustain successful online support.
                </div>

                <div style={{marginBottom: '4rem'}}>
                    <ButtonP text="Donate now" textStyle={{fontWeight: '600', background: '#EDC974', color: '#2f5349', padding: '1rem 2rem', border: 'none'}} />
                    <Button variant="text" sx={{p: '1rem 1rem', color: '#2f5349'}} startIcon={<PlayArrowIcon />}>
                        How it works
                    </Button>
                    {/* <Button text={<span><PlayArrowIcon sx={{color: '#2f5349'}} /> How it works</span>} textStyle={{fontWeight: '700', background: 'transparent', color: '#2f5349', padding: '0.8rem 2rem', border: 'none'}} /> */}
                </div>

            </div>
            <div className="page-outline-right">
                <div className="page-nav">
                    <NavLink text="Home"  textStyle={{color: '#2f5349'}} link="/" />
                    <NavLink text="Pages"  textStyle={{color: '#2f5349'}} link="/" />
                    <NavLink text="Portfolio"  textStyle={{color: '#2f5349'}} link="/" />
                    <NavLink text="Sign In"  textStyle={{color: '#2f5349'}} link="/" />
                    <NavLink text="Donate now"  textStyle={{color: '#2f5349', border: '1px solid #2f5349', height: '20px'}} link="/" />
                </div>
                
                <div className="page-outline-image">

                </div>
            </div>
        </div>
    );
};

export default Outline